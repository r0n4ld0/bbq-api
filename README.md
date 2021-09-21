# API Barbecue-Planning

## Prerequisites
To build and run this app locally you will need:
- Install [Docker](https://www.docker.com/get-started)

## Requirements

- [x] Add a new barbecue with date, description and additional notes.

- [x] Add and remove participants (by entering your contribution amount).

- [x] Add a suggested value per contribution user (amount with and without drink included).

- [x] View the barbecue details, total participants and amount collected.

# Getting Started
To build and run this app locally you will need:

Install Node.js

### 1. Clone repository
```
git clone https://github.com/r0n4ld0/bbq-api
```
### 2. Install NPM packages
```
npm install
```
### 3. Environment variables
```
Copy `.env.example` file to `.env` and fill the variables
```
### 4. Build docker image
```
docker-compose up --build -d
```
### 5. Run migrations
```
docker exec -it bbq-api sh -c "yarn typeorm migration:run"
```

## API documentation
  [BBQ Planning API](http://localhost:3333/api-docs/)

## Contact
Ronaldo Scheffer - ronaldo_scheffer@hotmail.com
