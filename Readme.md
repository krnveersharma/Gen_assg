# Web API for Go Game Score Calculation

## Setup

### Prerequisites
- Node.js
- npm

### Installation

- Clone the repository :- git clone https://github.com/krnveersharma/Gen_assg.git

- run npm install on terminal

- To start the server run node app.js


## API Documentation

### Endpoint
`GET /:p1/:p2/:p3`

### Parameters
- `p1`: Integer (0 <= p1 <= 30)
- `p2`: Integer (0 <= p2 <= 30)
- `p3`: Integer (0 <= p3 <= 30)

`p1`, `p2`, and `p3` must satisfy the condition `p1 <= p2 <= p3`.

### Responses
- **Success (200)**: Returns the calculated result.
  OUTPUT:-  { "draws": number }

- **Error (400)**: Returns an error message for invalid input.
OUTPUT:- Invalid input

