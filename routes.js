const routes = require('next-routes');

module.exports = routes()
  .add('/home', 'home')
  .add('/users', 'users')
  .add('/users/:user', 'detail');
