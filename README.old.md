## Base URL

https://capstone-api-m3.herokuapp.com/

## API Endpoints

### Cadastro

POST /register

example:

> https://primeiro-teste-osmar.herokuapp.com/register

```
{
  "email": "quack@email.com",
  "password": "123quack",
  "name": "Quack",
  "age": 25,
}
```

Resposta:

> 201 OK

```
{
	"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InF1YWNrQG1haWwuY29tIiwiaWF0IjoxNjUyMjE5Mzc2LCJleHAiOjE2NTIyMjI5NzYsInN1YiI6IjIifQ.EX8cuN2lFfU6gKVn3qcEa-A0c25AVvGLonxIOqCrsAg",
	"user": {
		"email": "quack@mail.com",
		"id": 2
	}
}
```

---

### Login

POST /login

```
{
  "email": "quack@mail.com",
  "password": "1234quack",
}
```

Resposta:

> 200 OK

```
{
	"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InF1YWNrQG1haWwuY29tIiwiaWF0IjoxNjUyMjE5Mzc2LCJleHAiOjE2NTIyMjI5NzYsInN1YiI6IjIifQ.EX8cuN2lFfU6gKVn3qcEa-A0c25AVvGLonxIOqCrsAg",
	"user": {
		"email": "quack@mail.com",
		"id": 2
	}
}
```

---

### Titulos

GET /titles

Resposta:

> 200 OK

```
[
    {
      id: 1,
      title: 'filmName',
      releaseDate: '10/08/2020',
      genre: 'action',
      sinopse: 'lorem ipsun',
      poster: 'img',
      rating: '5',
      reviews: [
        {
          userId: 1,
          review: 'Lorem ipsum...',
          likes: 2,
        },
      ],
    },
  ]
```

GET /titles/:id

Resposta:

> 200 OK

```

    {
      id: 1,
      title: 'filmName',
      releaseDate: '10/08/2020',
      genre: 'action',
      sinopse: 'lorem ipsun',
      poster: 'img',
      rating: '5',
      reviews: [
        {
          userId: 1,
          review: 'Lorem ipsum...',
          likes: 2,
        },
      ],
    }
```

### Users

#### Necessita autenticação:

GET /users/:id

PATCH /users/:id

> 200 OK

```
  {
    "preferencias": {
      genre: "drama"
    }
  }
```

### Reviews

POST /titles/:id/reviews

> Authorization: Bearer {token}

```
  {
    userId: 1,
    review: 'Lorem ipsum...',
    likes: 2,
  }
```

> 200 OK

DELETE /titles/:id/reviews/:id

Resposta:

> 200 OK

### Topicos

GET /topics

Resposta:

> 200 OK

```
[
  {
    id: '',
    user: {},
    title,
    movieTitle: '',
    coments: [
      {
        id: '',
        user: 'id',
        coment: '',
      },
    ],
  },
],

```

GET /topics/:id

Resposta:

> 200 OK

```
  {
    id: '',
    user: {},
    title,
    movieTitle: '',
    comments: [
      {
        id: '',
        user: 'id',
        coment: '',
      },
    ],
  }
```

DELETE /topics/:id

Resposta:

> 200 OK

POST /topics

```
  {
    userId: ,
    title,
    movieTitle: '',
    comments: [
      {
        user: 'id',
        coment: 'este e um comentario',
      },
    ],
  }
```

### Comentarios

POST /topics/:id/comments

PATCH /topics/:id/comments/:id

```
{"comment": "novo comentario"}
```

DELETE /topics/:id/comments/:id
