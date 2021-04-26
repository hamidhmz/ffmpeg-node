const axios = require('axios');
const http = require('https');

/**
 * factory function for request
 * @param {String} method - method of the request
 * @param {String} url - target url
 * @param {Object} params - parameter for request
 * @param {Object} method - header object for request
 * @param {Object} method - data is body of request
 * @returns {Promise<String>}
 */
module.exports = (method, url, params, headers, data) => {
  // const axiosOptions = {
  //   // `url` is the server URL that will be used for the request
  //   url,
  //   // `method` is the request method to be used when making the request
  //   method, // default
  //   // `headers` are custom headers to be sent
  //   headers,
  //   // `params` are the URL parameters to be sent with the request
  //   // Must be a plain object or a URLSearchParams object
  //   params,
  //   // `data` is the data to be sent as the request body
  //   // Only applicable for request methods 'PUT', 'POST', 'DELETE , and 'PATCH'
  //   // When no `transformRequest` is set, must be of one of the following types:
  //   // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
  //   // - Browser only: FormData, File, Blob
  //   // - Node only: Stream, Buffer
  //   data,
  //   // `timeout` specifies the number of milliseconds before the request times out.
  //   // If the request takes longer than `timeout`, the request will be aborted.
  //   timeout: 900000, // 15 minutes
  //   // `withCredentials` indicates whether or not cross-site Access-Control requests
  //   // should be made using credentials
  //   withCredentials: false, // default
  //   // `adapter` allows custom handling of requests which makes testing easier.
  //   // Return a promise and supply a valid response (see lib/adapters/README.md).
  //   // adapter(config) {
  //   //   /* ... */
  //   // },
  //   // `responseType` indicates the type of data that the server will respond with
  //   // options are: 'arraybuffer', 'document', 'json', 'text', 'stream'
  //   //   browser only: 'blob'
  //   responseType: 'stream', // default
  //   // `responseEncoding` indicates encoding to use for decoding responses (Node.js only)
  //   // Note: Ignored for `responseType` of 'stream' or client-side requests
  //   responseEncoding: 'utf8', // default
  //   // `xsrfCookieName` is the name of the cookie to use as a value for xsrf token
  //   xsrfCookieName: 'XSRF-TOKEN', // default
  //   // `xsrfHeaderName` is the name of the http header that carries the xsrf token value
  //   xsrfHeaderName: 'X-XSRF-TOKEN', // default
  //   // `maxContentLength` defines the max size of the http response content in bytes allowed in node.js
  //   // maxContentLength: 5000,
  //   // `maxBodyLength` (Node only option) defines the max size of the http request content in bytes allowed
  //   maxBodyLength: 2000,
  //   // `maxRedirects` defines the maximum number of redirects to follow in node.js.
  //   // If set to 0, no redirects will be followed.
  //   maxRedirects: 0, // default is 5
  //   // `socketPath` defines a UNIX Socket to be used in node.js.
  //   // e.g. '/var/run/docker.sock' to send requests to the docker daemon.
  //   // Only either `socketPath` or `proxy` can be specified.
  //   // If both are specified, `socketPath` is used.
  //   socketPath: null, // default
  //   // `httpAgent` and `httpsAgent` define a custom agent to be used when performing http
  //   // and https requests, respectively, in node.js. This allows options to be added like
  //   // `keepAlive` that are not enabled by default.
  //   // httpAgent: new http.Agent({ keepAlive: true }),
  //   // httpsAgent: new https.Agent({ keepAlive: true }),
  //   // `cancelToken` specifies a cancel token that can be used to cancel the request
  //   // (see Cancellation section below for details)
  //   // cancelToken: new CancelToken((cancel) => {}),
  //   // `decompress` indicates whether or not the response body should be decompressed
  //   // automatically. If set to `true` will also remove the 'content-encoding' header
  //   // from the responses objects of all decompressed responses
  //   // - Node only (XHR cannot turn off decompression)
  //   decompress: true, // default
  // };
  // return axios(axiosOptions);

  const Furl = url.replace('https://', '');
  const [hostname, ...path] = Furl.split('/');
  const Fpath = `/${path.join('/')}`;

  const options = {
    hostname,
    path: Fpath,
    port: 443,
    method: 'GET',
  };
  queueMicrotask(() => {
    console.log('🚀 ~ file: request.js ~ line 86 ~ options', options);
  });
  return new Promise((resolve, reject) => {
    http
      .request(options, (res) => {
        console.log(`STATUS: ${res.statusCode}`);
        console.log(`HEADERS: ${JSON.stringify(res.headers)}`);

        res.on('error', (error) => {
          console.log('this is my error.', error);
        });
        res.on('end', () => {
          console.log('No more data in response.');
        });
        resolve(res);
      })
      .end();
  });
};
