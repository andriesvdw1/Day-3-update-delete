### Response after running a PATCH method on an employee user:
``` HTTP/1.1 200 OK
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
```HTTP/1.1 200 OK
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
}```
