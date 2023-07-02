const bcrypt = require("bcrypt");
module.exports.hash = (plainText, saltRound = process.env.SaltRound) => {
  const hachResult = bcrypt.hashSync(plainText, parseInt(saltRound));
  return hachResult;
};
module.exports.compare = (password, hashValue) => {
  const CompareResult = bcrypt.compareSync(password, hashValue);
  return CompareResult;
};
