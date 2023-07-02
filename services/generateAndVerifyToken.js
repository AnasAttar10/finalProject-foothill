const jwt = require("jsonwebtoken");

module.exports.generateToken = (
  payload,
  signature = process.env.SIGNATURE_TOKEN,
  expiresIn = "7d"
) => {
  const token = jwt.sign(payload, signature, { expiresIn });
  return token;
};
module.exports.verifyToken = (
  token,
  signature = process.env.SIGNATURE_TOKEN
) => {
  const decoded = jwt.verify(token, signature);
  return decoded;
};
