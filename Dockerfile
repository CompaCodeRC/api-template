FROM node:18

RUN mkdir -p /home/app

WORKDIR /home/app

COPY package.json /home/app

RUN test -d /home/app/node_modules || npx playwright install-deps

RUN test -d /home/app/node_modules || npm install

EXPOSE 3000

CMD [ "npm", "run", "start" ]