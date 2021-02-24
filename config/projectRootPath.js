const path = require('path');

const projectRootDir = () => {
   return path.join(__dirname, '..');
};

module.exports = projectRootDir;
