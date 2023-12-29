# Stage 1: Building the code
FROM node:21.4 as builder

WORKDIR /app

COPY package.json package-lock.json .eslintrc.cjs vite.config.js ./

RUN npm install

# 

# Stage 2: Run the application
FROM node:21.4

WORKDIR /app

# COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json package.json
COPY --from=builder /app/package-lock.json package-lock.json
COPY --from=builder /app/.eslintrc.cjs .eslintrc.cjs
COPY --from=builder /app/vite.config.js vite.config.js
COPY ./index.html /app/index.html
# COPY ./src /app/src
# RUN rm -rf /app/src
EXPOSE 5173

CMD ["npm", "run", "dev"]