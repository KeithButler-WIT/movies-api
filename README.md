# Movies-Api

​
Name: Keith Butler

Student Number: 20089137
​

## Features.

- Feature 1 - Popular Actors endpoint
- Feature 2 - Tv shows endpoint and parameterised URL
- Feature 3 - Private Routes
- Feature 4 - User authentication
- Feature 5 - User creation
- Feature 6 - mongoDB implementation
- Feature 7 - Upcoming movies endpoint

## Installation Requirements

Requirements:
``` sh
node v16.20.1
npm
mongodb
```

​
Installation:
``` sh
git clone https://github.com/KeithButler-WIT/movies-api.git
```

``` sh
cd movies-api
npm install
```
​

## API Configuration

Here is an example configuration

```bat
REACT_APP_TMDB_KEY=YourTMDBKey
FAST_REFRESH=false
NODE_ENV=development
PORT=8080
HOST=localhost
MONGO_DB=YourMongoURL
SEED_DB=True
SECRET=YourJWTSecret
```


## API Design
​
This api was designed using [Swagger](https://swagger.io/)
The endpoint design can be viewed [here](http://localhost:8080) when the api is running.

## Security and Authentication

Movies/Actors/Shows routes are protected and require the user to be signed in to view them.

Users can register at route 
Then can authenticate at route 
​

## Integrating with React App
​
Describe how you integrated your React app with the API. Perhaps link to the React App repo and give an example of an API call from React App. For example:
​

```Javascript
export const getMovies = () => {
  return fetch(
     '/api/movies',{headers: {
       'Authorization': window.localStorage.getItem('token')
    }
  }
  )
    .then(res => res.json())
    .then(json => {return json.results;});
};
​
```

​

## Extra features
​
- Deleting users
    - By id
    - By username
- Searching users
    - By id 
    - By username
- Password validation
​

## Independent learning.

### [Swagger](https://swagger.io/)
Swagger was used to design this api. Following the OpenAPI 3.0 Specification.
