const path = require('path');
const mkdirp = require('mkdirp');

const uploadDirectoryPath = ({ foldername }) => {
   mkdirp.sync(path.join(__dirname, '..', 'uploads', foldername));
   return path.join(__dirname, '..', 'uploads', foldername);
};

module.exports = uploadDirectoryPath;
