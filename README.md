# restme

Restme is an easy way to execute requests in terminal. Instead of use the classic curl, why don't use a simpler cli?

### Version
1.0.6
### Installation
```sh
$ [sudo] npm i -g restme
```
### Try it now! (with chuck norris API :P)
```sh
$ restme http://api.icndb.com/jokes/random
```
![alt text](http://i.imgur.com/iixeafA.png "restme output")

Awesome uh?
### Simple example
```sh
$ restme https://someurl.com
```
### Using convenience -j or --json option to auto include Accept: application/json
```sh
$ restme https://someurl.com/post/1 -j
```
### Raw mode! If you don't want pretty json responses
```sh
$ restme https://someurl.com -r [or --raw]
```
### Use other request method (default is GET)
```sh
$ restme DELETE https://someurl.com/post/1
```
### Adding some headers
```sh
$ restme https://someurl.com/post/1 -H "Accept: application/json, X-Token: XXXXXXXXXX" [or --header]
```
### Posting serialized data
```sh
$ restme POST https://someurl.com/post/1 -f "name=foo&password=bar"[or --form]
```
### Posting JSON data
```sh
$ restme POST https://someurl.com/post/1 -d '{"name":"foo", "password": "bar" }'[or --data]
```
### Using basic auth
```sh
$ restme https://someurl.com/auth -a user@password [or --auth]
```
### Only returns the headers (curl -I equivalent)
```sh
$ restme https://www.someurl.com -I
```
### Only returns the body
```sh
$ restme https://www.someurl.com -B
```
### Putting all together
```sh
$ restme https://someurl.com.br -j -H "X-Token: XXXXXXXXX" -r -a user@password
```
### Still want to help?
```sh
$ restme -h [--help]
```
### Todo's
 - Write Tests (shame on me)
 - Add more and more helpful options
 - Add Code Comments
 - Write the code in ES6 (?)
 - Plz, suggests

License
----
MIT
