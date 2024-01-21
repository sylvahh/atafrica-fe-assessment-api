"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.registerModels = registerModels;
var _fs = _interopRequireDefault(require("fs"));
var _path = _interopRequireDefault(require("path"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
let models = {};
function registerModels(sequelize) {
  const thisFile = _path.default.basename(__filename); // index.js
  const modelFiles = _fs.default.readdirSync(__dirname);
  const filterModelFiles = modelFiles.filter(file => {
    // filter throw files 
    return file !== thisFile && file.slice(-3) === '.js';
  });
  for (const file of filterModelFiles) {
    const model = require(_path.default.join(__dirname, file)).default(sequelize);
    models[model.name] = model;
  }
  Object.keys(models).forEach(modelName => {
    // loop throw models key
    if (models[modelName].associate) {
      models[modelName].associate(models);
    }
  });
  models.sequelize = sequelize;
}
var _default = models;
exports.default = _default;