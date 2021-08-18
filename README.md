# api-server

## LAB - 04

### Deployment Test

**Author: Tariq Abu-Laban**

- [tests report](https://github.com/Abu-laban/api-server/actions).
- [back-end](https://lab04-server.herokuapp.com/).
- [pull request](https://github.com/Abu-laban/api-server/pull/1).

**Setup**

`.env` **requirements**

- `PORT` - Port Number

- `POSTGRES_URI` = Postgres DB

**Running the app**

- `npm start`

- Endpoint: `/customer/1`

  - Returns Object

        {
        "id": 1,
        "customerName": "Tariq",
        "createdAt": "2021-08-18T18:41:23.550Z",
        "updatedAt": "2021-08-18T18:41:23.550Z"
        }

- Endpoint: `/customer/2`

  - Returns Object

        {
        "id": 2,
        "customerName": "Ibrahim",
        "createdAt": "2021-08-18T18:41:38.051Z",
        "updatedAt": "2021-08-18T18:41:38.051Z"
        }

- Endpoint: `/clothes/1`

  - Returns Object

        {
        "id": 1,
        "clothesName": "Sweetheart",
        "clothesType": "Blouse",
        "customerId": 1,
        "createdAt": "2021-08-18T18:46:29.471Z",
        "updatedAt": "2021-08-18T18:46:29.471Z"
        }

- Endpoint: `/food/2`

  - Returns Object

        {
        "id": 2,
        "foodName": "apple",
        "foodType": "fruit",
        "customerId": 1,
        "createdAt": "2021-08-18T18:45:10.193Z",
        "updatedAt": "2021-08-18T18:45:10.193Z"
        }

**Tests**

- Unit Tests: `npm run test`
- Lint Tests: `npm run lint`
