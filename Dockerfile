FROM --platform=linux/amd64 node:18.2.0

WORKDIR /app/

EXPOSE 3000

ADD ./vanilla-redux/ /app/

CMD ["npm","start"]