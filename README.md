funcky.req
==========

Mini lib without deps with xhr functions.


#### Get request

```JavaScript
req = funcky.get 'http://some.url'
req.done (res) ->
req.fail (res) ->
req.always (res) ->
```

#### Post request
```JavaScript
options =
  data:
    myval: 12

req = funcky.post 'http://some.url', options
req.done (res) ->
req.fail (res) ->
req.always (res) ->
```
