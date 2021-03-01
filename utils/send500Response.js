const send500Response = ({ res, error }) => {
   res.status(500).json({ success: false, message: error.message });
};
module.exports = send500Response;
