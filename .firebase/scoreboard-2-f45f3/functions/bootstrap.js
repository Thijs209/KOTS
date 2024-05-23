const app = import(`./dist/scoreboard2/server/server.mjs`).then(server => server.app());
exports.handle = (req,res) => app.then(it => it(req,res));
