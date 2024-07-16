import os
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
    database: str
    backendEnvironment: str
    backendFramework: str
    backendLanguage: str
    frontendBuildTool: str
    frontendFramework: str
    frontendLanguage: str

def generate_response(input_text: str):
    llm = ChatOllama(
        model="llama3",
        keep_alive=-1,
        temperature=1.0,
        max_new_tokens=256
    )

    prompt = ChatPromptTemplate.from_template("Provide a project idea for developers based on these technologies and give a brief description of the implementation: {input}")
    chain = prompt | llm | StrOutputParser()

    try:
        for result in chain.stream({"input": input_text}):
            yield f"{result} "
    except Exception as e:
        yield f"Error generating suggestions: {e}"



@app.route('/', methods=['POST'])
def process():
    data = request.get_json()
    input_text = f"""
    Database: {data['database']}
    Backend Environment: {data['backendEnvironment']}
    Backend Framework: {data['backendFramework']}
    Backend Language: {data['backendLanguage']}
    Frontend Build Tool: {data['frontendBuildTool']}
    Frontend Framework: {data['frontendFramework']}
    Frontend Language: {data['frontendLanguage']}
    """

    return Response(generate_response(input_text), mimetype='text/plain')

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 8000))
    app.run(host='0.0.0.0', port=port)

