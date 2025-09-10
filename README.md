# E-Commerce Microservices Backend

This project is a **microservices-based e-commerce backend**. It consists of separate services for handling **users, products, orders, and carts**, all communicating asynchronously using **RabbitMQ**. The entire system is containerized using **Docker Compose** for easy deployment.

## Features

- Microservices architecture for scalability and maintainability
- Containerized services using Docker and Docker Compose
- Asynchronous communication via RabbitMQ
- Independent service databases (PostgreSQL for each service)
- RESTful APIs for each service
- Centralized configuration and environment management
- TypeScript-based backend services
- Easy scaling of individual services

## Tech Stack

- **Backend:** Node.js, TypeScript, Express.js  
- **Database:** MongoDb
- **ORM:** Sequelize  
- **Message Broker:** RabbitMQ  
- **Containerization:** Docker, Docker Compose  
- **Authentication:** JWT  
- **Environment Management:** dotenv  

## Prerequisites

- Docker >= 24.x  
- Docker Compose >= 2.x  
- Node.js >= 18.x (if running services locally)  

## Services Overview

| Service           | Description |
|------------------|-------------|
| **user-service**  | Handles user registration, login, and profiles |
| **product-service** | Handles CRUD operations for products |
| **order-service**  | Handles order creation and management |
| **cart-service**   | Handles shopping cart operations |
| **rabbitmq**       | Message broker for asynchronous communication |


