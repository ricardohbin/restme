# restme

Restme is an easy way to execute requests in terminal. Instead of use the classic curl, why don't use a simpler cli?

### Version
1.0.0
### Installation
```sh
$ [sudo] npm i -g restme
```
### Simple example
```sh
$ restme https://status.github.com/api/status.json
```
### Using convenience -j or --json option to auto include Accept: application/json
```sh
$ restme https://someurl.com.br/post/1 -j
```
### Pretty simple example
```sh
$ restme https://status.github.com/api/status.json -j -p [or --pretty]
```
### Use other request method (default is GET)
```sh
$ restme DELETE https://someurl.com.br/post/1
```
### Adding some headers
```sh
$ restme https://someurl.com.br/post/1 -h "Accept: application/json, X-Token: XXXXXXXXXX" [or --header]
```
### Using basic auth
```sh
$ restme https://someurl.com.br/auth -a user@password [or --auth]
```
### Putting all together 
```sh
$ restme https://someurl.com.br -j -h "X-Token: XXXXXXXXX" -p -a user@password
```
### Todo's
 - Write Tests
 - Add more and more helpful options
 - Add Code Comments
 - Write the code in ES6 (?)

License
----
SIC
