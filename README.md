![image](https://github.com/user-attachments/assets/81acfc86-572a-43d2-b9b6-9ab443facd92)

### Response after running a PATCH method on an employee user:
```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 83
ETag: W/"53-EDIbcjUBvN8m4gdiVWD6uMEUKGU"
Date: Thu, 22 May 2025 13:01:15 GMT
Connection: close

{
  "_id": "682cbc27bf27ea81a36c4bd1",
  "id": 1,
  "name": "Robert",
  "age": 38,
  "hobby": "gaming"
}
```  
### Response after running a PUT method on an employee user:
```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 130
ETag: W/"82-BPT7rwDZXZfDiY5arIYXVLjAbs8"
Date: Thu, 22 May 2025 13:17:13 GMT
Connection: close

{
  "message": "Employee updated successfully",
  "result": {
    "_id": "682cbb7ebf27ea81a36c4bd0",
    "name": "George",
    "age": 29,
    "hobby": "reading"
  }
}
```

### Response after running a GET request to verify the results:
```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 231
ETag: W/"e7-xhTm2sY+rjvDQn2TzF16t+QBNu0"
Date: Thu, 22 May 2025 13:18:52 GMT
Connection: close

[
  {
    "_id": "682cbb7ebf27ea81a36c4bd0",
    "name": "George",
    "age": 29,
    "hobby": "reading"
  },
  {
    "_id": "682cbc27bf27ea81a36c4bd1",
    "id": 1,
    "name": "Robert",
    "age": 38,
    "hobby": "gaming"
  },
  {
    "_id": "682f099e7a749c399202c222",
    "name": "Victor",
    "age": 34,
    "__v": 0
  }
]
```
