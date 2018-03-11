# dictionary-prototype

A basic Web Service for dictionary prototype, incorporating the use of [Oxford Dictionaries API](https://developer.oxforddictionaries.com).

### How to use locally
#### Clone the Repository
Run
```
git clone https://github.com/kunal-mohta/dictionary-prototype.git
```
#### Install dependency packages
Run
```
cd dictionary-prototype
npm install
```
#### Start the server
Run
```
npm start
```
#### Done!
Server will start listening at `http://localhost:3000/`
Start making requests to this URL

### Requests
Currently, the only available end point is\
**GET** `/definition/{word}`
which means when running locally, the required URL is `http://localhost:3000/definition/{word}`

### Responses
The standard format of the JSON response is
```
"statusCode": Number,
"responseMessage": String,
"jsonDefinitions": Array
```
More specifically..
```
"statusCode": {code},
"responseMessage": {message},
"jsonDefinitions": [
  {
    "definitions" : [],
    "examples" : []
  },
  {
    "definitions" : [],
    "examples" : []
  },
  ...
]
```

For any queries/suggestions/pointing out issues, contact me at `kunalmohta1818@gmail.com`
