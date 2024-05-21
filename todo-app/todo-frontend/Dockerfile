FROM node:20.13.1

WORKDIR /app
COPY . /app
RUN npm install
ENV VITE_BACKEND_URL=http://localhost:3000
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "5000"]
