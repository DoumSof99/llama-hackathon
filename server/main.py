from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from langchain_community.chat_models import ChatOllama
from langchain_core.output_parsers import StrOutputParser
from langchain_core.prompts import ChatPromptTemplate
from fastapi.responses import StreamingResponse
import asyncio

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class SuggestionRequest(BaseModel):
    input: str 

@app.post("/")
async def suggest_project(request: SuggestionRequest):
    user_input = request.input

    # TODO
    return StreamingResponse(run_llama3_model(user_input), media_type="text/event-stream")

    # Synchronous way (works)
    # suggestion = await run_llama3_model(user_input)  
    # return {"suggestion": suggestion}

async def run_llama3_model(input_text: str): #TODO #-> str:
    llm = ChatOllama(
        model="llama3",
        keep_alive=-1,
        temperature=0,
        max_new_tokens=512
    )

    prompt = ChatPromptTemplate.from_template("Provide 3 project ideas for developers based on these technologies: {input}")
    chain = prompt | llm | StrOutputParser()

    # TODO

    # Synchronous way (works)
    # response = chain.invoke({"input": input_text}) 
    # suggestions = response.split('\n\n')[:3]

    # Asynchronous way
    suggestions = []
    async for chunk in chain.stream({"input": input_text}):
        suggestions.append(chunk)
        if len(suggestions) >= 3:
            break

    for suggestion in suggestions:
        yield f"data: {suggestion}\n\n"
        await asyncio.sleep(1) # May not need

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
