# README

# Jobs Portal API

Football Review is a rails API that provides a way to show, create, update and delete reveiws. 


# User Login Credentials 🔑

```json
{
  "username": "john",
  "password": "password"
}
```

# Setup Requirements (Front -end)

   - Access the front end of this project on - (https://football-front-end.vercel.app/) 

# Setup Requirements (Back -end)

    - Git (to clone the repository)
    - Ruby 2.7
    - PostgreSQL (to run the database)
    - Postman (to test the API)
    - Railway cli (if you want to deploy to Railway)

# Setup Installation

    - Clone the repository
    - Run the following commands in the repository:
        - cd into the project
        - run bundle install
        - run db:migrate db:seed to migrate data
        - run rails s to start server
    - Open Postman to test the API endpoints or use the following link:
        - http://localhost:3000/<the_endpoint>
    - Run the following commands if you want to deploy to Heroku:
        - railway login
        - railway init
        - railway link <project-id>
        - railway up

# Endpoints

- Root endpoint:
  - [https://https://football.up.railway.app/](https://football.up.railway.app/)

> POST

`/user/create/`

- Create a new user

```json
{
  "username": "string",
  "password": "string",
  "image_url": "string",
  "Bio": "string",
}
```

- Response:

```json
{
  "success": "User created successfully"
}
```



`/reviews`

- Get a list of reviews

- Response:

```json
{
  [
  {
    "id": 1,
    "username": "Johhny Bravo",
    "match": "Brazil Vs Argentina",
    "date": "12-02-2022",
    "description": "The game was intense with a lot of players requiring extra minutes to take a breather", 
  },
  {
     "id": 2,
    "username": "Peter Pan",
    "match": "Brazil Vs Argentina",
    "date": "12-02-2022",
    "description": "The game was intense but lacked fluidity from start to end. Wasted my time on it",
  }
]
}
```

`/review/id`

- Create a new review

```json
{
    "username": "Johhny Bravo",
    "match": "Brazil Vs Argentina",
    "date": "12-02-2022",
    "description": "The game was intense with a lot of players requiring extra minutes to take a breather", 
    "user": {id},
  }
```

    - Response:

```json
{
  "success": "Job created successfully"
}
```

# Known Bugs

So far so good there are no bugs related to this project 😎

# Support and contact details 😃

To make a contribution to the code used or any suggestions you can click on the contact link and email me your suggestions.

- Email: nyabutozablon2@gmail.com

# License

Copyright (c) 2022 Zablon Onchari

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files , to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
