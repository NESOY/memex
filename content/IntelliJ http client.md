---
tags:
  - publish
  - tool/intellij
aliases:
  - IntelliJ http
created: 2024-07-30 13:47
updated: 2024-07-30 15:48
---
# IntelliJ http client
- IntelliJ Ultimate에서 제공되는 http client 기능이다.

## How to use
### Authenticate header
```
// Basic authentication
GET http://example.com
Authorization: Basic username password 
```
### In-place variables
```
@myhost = example.org 
GET {{myhost}}/users 
### 

GET {{myhost}}/stats
```

## See Also
- [[IntelliJ]]

## Reference
- https://www.jetbrains.com/help/idea/exploring-http-syntax.html