# llama-hackathon
A web app that uses LLaMA-3 to suggest innovative project ideas based on user-input topics.

Our Figma UI Design: https://www.figma.com/design/6rmRJZQuJRIFhiXI2pUZlN/Untitled?node-id=0-1&t=6mXZ1BGYfQBYGMGW-0

Dependencies installed:
React: 
1) npm install

Python:
1) install Python in vs code
2) PowerShell select "Run as Administrator".
3) run Get-ExecutionPolicy
4) Set-ExecutionPolicy RemoteSigned and select Y
5) python -m venv venv
6) run .\venv\Scripts\Activate to activate the virtual evn
7) click ctrl + shift + p, and then the in the 'search command box' enter -> Python: Select Interpreter
8) Then select 'Enter Interpreter path' -> Browse Interpreter -> 
9) ![image](https://github.com/user-attachments/assets/476d3760-1685-4947-9fb4-79eeee50dc8c)
10) pip install flask
11) pip install flask_cors
12) pip install langchain_community langchain_core
13) run uvicorn main:app --reload
14) python main.py



