# API Barbecue-Planning

## Requirements

- [x] Add a new barbecue with date, description and additional notes.

- [x] Add and remove participants (by entering your contribution amount).

- [x] Add a suggested value per contribution user (amount with and without drink included).

- [x] View the barbecue details, total participants and amount collected.

# Getting Started

### 1. Clone repository
```
git clone git remote add origin git@github.com:r0n4ld0/bbq-api.git
```
### 2. Build docker image
```
docker-compose up
```
### 3. Run migrations
```
docker exec -it bbq-api sh -c "yarn typeorm migration:run"
```
### 3. Environment variables
```
Copy `.env.example` file to `.env` and fill the variables
```

## API documentation
  [BBQ Planning API](http://localhost:3333/api-docs/)

## Contact
Ronaldo Scheffer - ronaldo_scheffer@hotmail.com
