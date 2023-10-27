# FastApi with Autogen backend and React frontend

This is a simple implementation of Autogen Agents using FastApi as backend and a frontend client using React

1. **FastApi Backend**: A FastApi application running autogen.
2. **Webapp**: React webapp using websocket to communicate with FastApi.

## Running demo

1. **Backend configuration**: Before starting the services, ensure you fill out any necessary environment variables in the `docker-compose.yml` file. Make sure to enter your Open AI API  Secret in the `OPENAI_API_KEY` field.
2. **Start Services**: Simply run the following command:

```
docker-compose up
```
This will start both the agent backend and the webapp.

## Current Workflow

1. A task is passed to the `team-generation` team
2. Based on the task, the `team-generation` team creates the *ideal* team to undertake the task (so, we are utilising Autogen to formulate the team)
3. The user can give feedback to Autogen to augment the team if they wish
4. Once the user is happy with the team, they type exit  (it's a bit unintuitive, we know; we're working on changing it), which ends the team generation step and immediately initiates `task-execution`
  using the newly formulated team, the task is then undertaken using standard Autogen workflow

