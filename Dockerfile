FROM node:14

WORKDIR /usr/src/app

RUN git clone https://github.com/xSenpuu/Ultron-BotV1/tree/main .
RUN npm install


CMD ["npm", "run", "test"]
