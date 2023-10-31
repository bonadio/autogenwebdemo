# Autogen with FastApi backend and React frontend

This is a simple implementation of Autogen Agents using FastApi as backend and a frontend client using React

1. **FastApi Backend**: A FastApi application running autogen.
2. **Webapp**: React webapp using websocket to communicate with FastApi.

## Running demo

1. **Clone this repo**
```
git clone https://github.com/bonadio/autogenwebdemo.git
cd autogenwebdemo
```
2. **Configure backend**

Configure python deps
```
cd backend
pip install -r ./requirements.txt 
```

Add your Openai key to .env inside src folder
```
cd backend/src (edit .env and add your key)
```

Start backend server inside src folder
```
python main.py
```
You should see

```
INFO:     Started server process [85614]
INFO:     Waiting for application startup.
INFO:     Application startup complete.
INFO:     Uvicorn running on http://0.0.0.0:8000 (Press CTRL+C to quit)
```

2. **Configure frontend**

Open a new terminal and go to the react-frontend folder (you need to have nodejs installed and npm >= v14 )
```
cd autogenwebdemo/react-frontend
npm install
npm run dev
```
Open you browser on http://localhost:5173/ or the port shown 

Send the following messages:
```
-> Hi
<- Hello! How can I assist you today?

-> What the status of my order?
<- Sure, I can help you with that. Could you please provide me with your order number and customer number?

-> Order 222
<- Thank you for providing the order number. Could you also please provide me with your customer number?

-> customer 333
<- The status of your order with order number 222 and customer number 333 is "delivered". Is there anything else I can assist you with?
```

4. **Groupchat** if you want to use Groupchat take a look at autogen_group_chat.py


![chat interface](/chat.png "Chat")

Have fun!

