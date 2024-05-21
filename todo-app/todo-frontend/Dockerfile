# Stage 1: Install dependencies and run tests
FROM node:20.13.1 AS test

WORKDIR /app
COPY . /app
RUN npm install
RUN npm run test -- --run

FROM node:20.13.1 AS build

WORKDIR /app
COPY --from=test /app /app
ENV VITE_BACKEND_URL=http://localhost:3000
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "5173"]
