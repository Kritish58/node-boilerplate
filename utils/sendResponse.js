const sendResponse = ({ res, status, message, data = '', success }) => {
   res.status(status).json({ success, data, message });
};

module.exports = sendResponse;
