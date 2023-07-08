const multer = require("multer");
module.exports.HME = (err, req, res, next) => {
  if (err) {
    return res.status(400).json({ error: "multer error" });
  } else {
    console.log("HME ready");
    next();
  }
};
module.exports.fileValidation = {
  image: ["image/png", "image/jpeg", "image/gif", "image/avif"],
  file: ["application/pdf"],
};
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
  return upload;
};
