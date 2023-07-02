// import multer from "multer";
const multer = require("multer");
// export const HME = (err, req, res, next) => {
module.exports.HME = (err, req, res, next) => {
  if (err) {
    return res.status(400).json({ message: "multer error" });
  } else {
    console.log("HME ready");
    next();
  }
};
// export const fileValidation = {
module.exports.fileValidation = {
  image: ["image/png", "image/jpeg", "image/gif"],
  file: ["application/pdf"],
};
// function fileUpload(custumValidation=[]){
module.exports.fileUpload = (custumValidation = []) => {
  const storage = multer.diskStorage({});

  function fileFilter(req, file, cb) {
    if (custumValidation.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb("invalid format", false);
    }
  }
  const upload = multer({ fileFilter, storage });
  console.log("upload");
  console.log(upload);
  return upload;
};

// export default fileUpload
