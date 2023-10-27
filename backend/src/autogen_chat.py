import autogen
from user_proxy_webagent import UserProxyWebAgent
import asyncio

config_list = [
    {
        "model": "gpt-3.5-turbo",
    }
]
llm_config_assistant = {
    "model":"gpt-3.5-turbo",
    "temperature": 0,
    "config_list": config_list,
        "functions": [
        {
            "name": "search_db",
            "description": "Search database for order status",
            "parameters": {
                "type": "object",
                "properties": {
                    "order_number": {
                        "type": "integer",
                        "description": "Order number",
                    },
                    "customer_number": {
                        "type": "string",
                        "description": "Customer number",
                    }
                },
                "required": ["order_number","customer_number"],
            },
        },
    ],
}
llm_config_proxy = {
    "model":"gpt-3.5-turbo-0613",
    "temperature": 0,
    "config_list": config_list,
}


#############################################################################################
# this is where you put your Autogen logic, here I have a simple 2 agents with a function call
class AutogenChat():
    def __init__(self, chat_id=None, websocket=None):
        self.websocket = websocket
        self.chat_id = chat_id
        self.client_sent_queue = asyncio.Queue()
        self.client_receive_queue = asyncio.Queue()

        self.assistant = autogen.AssistantAgent(
            name="assistant",
            llm_config=llm_config_assistant,
            system_message="""You are a helpful assistant, help the user find the status of his order. 
            Only use the tools provided to do the search. Only execute the search after you have all the information needed. 
            When you ask a question, always add the word "BRKT"" at the end.
            When you responde with the status add the word TERMINATE"""
        )
        self.user_proxy = UserProxyWebAgent(  
            name="user_proxy",
            human_input_mode="ALWAYS", 
            max_consecutive_auto_reply=10,
            is_termination_msg=lambda x: x.get("content", "") and x.get("content", "").rstrip().endswith("TERMINATE"),
            code_execution_config=False,
            function_map={
                "search_db": self.search_db
            }
        )

        # add the queues to communicate 
        self.user_proxy.set_queues(self.client_sent_queue, self.client_receive_queue)

    async def start(self, message):
        await self.user_proxy.a_initiate_chat(
            self.assistant,
            clear_history=True,
            message=message
        )

    #MOCH Function call 
    def search_db(self, order_number=None, customer_number=None):
        return "Order status: delivered TERMINATE"

