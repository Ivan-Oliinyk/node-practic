FROM node:16.13.1

# WORKDIR /app

COPY . . 

RUN npm install

ENV PORT 4200 
ENV HELLO "Good morning !!!"

EXPOSE $PORT

CMD ["npm", "run", "start"]