# Autogen with FastApi backend and React frontend

This is a simple implementation of Autogen Agents using FastApi as backend and a frontend client using React

1. **FastApi Backend**: A FastApi application running autogen.
2. **Webapp**: React webapp using websocket to communicate with FastApi.

## Running demo
0. **Install Docker**
* Visit the [Docker Desktop](https://www.docker.com/products/docker-desktop) page.
* Click on the "Get Docker" button to download the Docker Desktop installer.
* Once the installer is downloaded, double-click on it to start the installation process.
* Follow the instructions in the installer, accepting the defaults unless you have specific requirements.
1. **Clone this repo**
```
git clone https://github.com/bonadio/autogenwebdemo.git
cd autogenwebdemo
```
2. **Configure backend**
```
docker-compose up 
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

