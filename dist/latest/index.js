(function() {
  var __hasProp = {}.hasOwnProperty;

  module.exports = {
    get: function(url, options) {
      if (options == null) {
        options = {};
      }
      return this._sendRequest('GET', url, options);
    },
    post: function(url, options) {
      if (options == null) {
        options = {};
      }
      return this._sendRequest('POST', url, options);
    },
    put: function(url, options) {
      if (options == null) {
        options = {};
      }
      return this._sendRequest('PUT', url, options);
    },
    _promise: function() {
      return {
        done: function(fn) {
          return this.callDone = fn;
        },
        callDone: null,
        fail: function(fn) {
          return this.callFail = fn;
        },
        callFail: null,
        always: function(fn) {
          return this.callAlways = fn;
        },
        callAlways: null
      };
    },
    _sendRequest: function(method, url, options) {
      var header, promise, value, xhr, _ref;
      if (options == null) {
        options = {};
      }
      promise = this._promise();
      if (options.data == null) {
        options.data = {};
      }
      if (options.headers == null) {
        options.headers = {};
      }
      xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        var _ref;
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (promise.callAlways != null) {
            promise.callAlways(xhr);
          }
          if ((200 <= (_ref = xhr.status) && _ref <= 206)) {
            if (promise.callDone != null) {
              return promise.callDone(xhr);
            }
          } else {
            if (promise.callFail != null) {
              return promise.callFail(xhr);
            }
          }
        }
      };
      xhr.open(method, url, true);
      xhr.setRequestHeader("Content-type", "application/json");
      _ref = options.headers;
      for (header in _ref) {
        if (!__hasProp.call(_ref, header)) continue;
        value = _ref[header];
        xhr.setRequestHeader(header, value);
      }
      xhr.send(options.data);
      return promise;
    }
  };

}).call(this);
