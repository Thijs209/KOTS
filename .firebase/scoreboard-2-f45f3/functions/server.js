const { onRequest } = require('firebase-functions/v2/https');
  const server = import('firebase-frameworks');
  exports.ssrscoreboard2f45f3 = onRequest({"region":"europe-west1"}, (req, res) => server.then(it => it.handle(req, res)));
  