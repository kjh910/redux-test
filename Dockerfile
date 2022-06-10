FROM --platform=linux/amd64 node:18.2.0

WORKDIR /app/

EXPOSE 3000

ADD . /app/

COPY ./runserver.sh /app/

RUN chmod 777 /app/runserver.sh

ENTRYPOINT ["/app/runserver.sh"]