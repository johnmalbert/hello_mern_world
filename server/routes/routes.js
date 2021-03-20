const PersonController = require('../controllers/controller');

module.exports = function(app) {
    app.get('/api', PersonController.index);
}