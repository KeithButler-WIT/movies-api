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
- Feature 7 - 
- Get Similar Movies:
  - Get a list of similar movies using a movie ID.
  - Get a list of similar movies using a movie genre.
  - Get a list of similar movies using a movie language.
- Get Similar Shows:
  - Get a list of similar shows using a show ID.
  - Get a list of similar shows using a show genre.
  - Get a list of similar shows using a show language.
- Get Similar actors:
  - Get a list of similar actors using an actor ID.
  - Get a list of similar actors using an actor name.
  - Get a list of similar actors using an actor popularity.
    ​

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
|                               | GET                       | POST                          | PUT | DELETE       |
|-------------------------------|---------------------------|-------------------------------|-----|--------------|
| /api/movies                   | Gets a list of movies     | N/A                           | N/A |              |
| /api/movies/{movieid}         | Get a Movie               | N/A                           | N/A | N/A          |
| /api/movies/{movieid}/reviews | Get all reviews for movie | Create a new review for Movie | N/A | N/A          |
| /api/shows                    | Gets a list of shows      | N/A                           | N/A |              |
| /api/shows/{showid}           | Get a show                | N/A                           | N/A | N/A          |
| /api/actors                   | Gets a list of actor      | N/A                           | N/A |              |
| /api/actors/{actorid}         | Get a actor               | N/A                           | N/A | N/A          |
| /api/users                    | Gets a list of actor      | N/A                           | N/A |              |
| /api/users/{userid}           | Get a actor               | N/A                           | N/A | Delete users |
| ...                           | ...                       | ...                           | ... | ...          |

[Swaggerhub](https://app.swaggerhub.com/)

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
​
. . State the non-standard aspects of React/Express/Node (or other related technologies) that you researched and applied in this assignment . .

### Swagger
