from flask import Flask, request, Response, jsonify
from flask_cors import CORS
import time
from pydantic import BaseModel
from langchain_community.chat_models import ChatOllama
from langchain_core.output_parsers import StrOutputParser
from langchain_core.prompts import ChatPromptTemplate

app = Flask(__name__)
CORS(app)  

class SuggestionRequest(BaseModel):
    backendDatabase: str
    backendEnvironment: str
    backendFramework: str
    backendLanguage: str
    frontendBuildTool: str
    frontendFramework: str
    frontendLanguage: str

def generate_suggestions(input_text: str):
    llm = ChatOllama(
        model="llama3",
        keep_alive=-1,
        temperature=0.9,
        max_new_tokens=256
    )

    prompt = ChatPromptTemplate.from_template("Provide a project idea for developers based on these technologies and give a brief description of the implementation: {input}")
    chain = prompt | llm | StrOutputParser()

    try:
        for result in chain.stream({"input": input_text}):
            yield result
    except Exception as e:
        yield f"Error generating suggestions: {e}"

def generate_response(input_text):
    for suggestion in generate_suggestions(input_text):
        # for word in suggestion.split():
        #     time.sleep(1)  # Simulate delay
        yield f"{suggestion} "
        time.sleep(0.5)

@app.route('/process', methods=['POST'])
def process():
    data = request.get_json()
    input_text = f"""
    Backend Database: {data['backendDatabase']}
    Backend Environment: {data['backendEnvironment']}
    Backend Framework: {data['backendFramework']}
    Backend Language: {data['backendLanguage']}
    Frontend Build Tool: {data['frontendBuildTool']}
    Frontend Framework: {data['frontendFramework']}
    Frontend Language: {data['frontendLanguage']}
    """

    return Response(generate_response(input_text), mimetype='text/plain')

if __name__ == '__main__':
    app.run(port=8000)
