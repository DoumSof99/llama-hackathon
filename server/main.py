import replicate
import os
from flask import Flask, request, Response, jsonify
from flask_cors import CORS




app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}}) 




def generate_response(input_text: str):
    response_text = ""

    for event in replicate.stream(
            "meta/meta-llama-3-8b",
            input={
                "top_p": 0.9,
                "prompt": f"Provide one project idea for developers based on these technologies : {input_text} and give a brief description of the implementation.In the end write in 2 sentences how this project can strengthen your skills. Do not provide me with code information throught your answer.",
                "max_tokens": 500,
                "min_tokens": 256,
                "temperature": 0.5,
                "prompt_template": "{prompt}",
                "presence_penalty": 1.15
            },
        ):
            response_text += str(event)  # Accumulate the response text

    return response_text





@app.route('/', methods=['POST'])
def process():
    data = request.get_json()
    input_text = f"""
    Database: {data['database']},
    Backend Environment: {data['backendEnvironment']},
    Backend Framework: {data['backendFramework']},
    Backend Language: {data['backendLanguage']},
    Frontend Build Tool: {data['frontendBuildTool']},
    Frontend Framework: {data['frontendFramework']},
    Frontend Language: {data['frontendLanguage']}
    """

    # Call generate_response to get the response text
    response_text = generate_response(input_text)

    return jsonify({"response": response_text})




if __name__ == '__main__':
    app.run(debug=True)