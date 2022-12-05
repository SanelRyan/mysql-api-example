# MySQL API Example using Express.JS

This is an example API made using Express.JS and MySQL framworks, which fetches `product` table and lists the data.

**`product` table contents**:
| id | name | price |
|----|-----------|-------|
| 1 | Chocolate | 5 |
| 2 | Ice Cream | 10 |
| 3 | Biscuit | 3 |
| 4 | Milk | 5 |

**Endpoints**
GET `/getProductInfoById?id={id}`:

> Example `/getProductInfoById?id=3`:

```json
{
    "success": true,
    "data": {
        "id": 3,
        "name": "Biscuit",
        "price": 3
    }
}
```

## Installation

This requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies, update `/config.js` values and start the server.

```sh
cd mysql-api-example
npm i
npm start run
```

## License

MIT
