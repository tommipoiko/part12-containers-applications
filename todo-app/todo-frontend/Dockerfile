FROM node:20.13.1 AS test

WORKDIR /app
COPY . /app
RUN npm install
RUN npm run test -- --run

FROM node:20.13.1 AS build

WORKDIR /app
COPY --from=test /app /app
ENV VITE_BACKEND_URL=http://localhost:8080/api
RUN npm run build
RUN npm install -g serve
EXPOSE 5173
CMD ["serve", "-s", "dist", "-l", "5173"]
