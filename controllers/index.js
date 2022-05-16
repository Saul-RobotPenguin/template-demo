const fs = require("fs");
const carbone = require("carbone");
const path = require("path");

let data = {
  posts: "This is posts",
  text: "Shang-chi is pretty Awesome",
  author: "Saul.C",
};

const createResume = async (req, res) => {
  try {
    carbone.render("template.docx", data, function (err, result) {
      if (err) {
        return console.log(err);
      }
      // write the result
      fs.writeFileSync("result.docx", result);
    });

    // const docPath = path.join(__dirname, "..", "result.docx");
    // res.download(docPath, "result.docx", function (err) {
    //   if (err) {
    //     // if the file download fails, we throw an error
    //     throw err;
    //   }
    // });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const createNewResume = async (req, res) => {
  try {
    const data = req.body;
    carbone.render("./templates/template.docx", data, function (err, result) {
      if (err) {
        return console.log(err);
      }
      // write the result
      fs.writeFileSync("./results/result.docx", result);
      return res.status(500).json({ data, result: "template has been made" });
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createResume,
  createNewResume,
};
