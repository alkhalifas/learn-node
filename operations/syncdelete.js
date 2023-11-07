const fs = require("fs");
fs.readFile("./data/test.txt", (err, data) => {
  if (err) console.log(err.message);
  else console.log(data);
});
fs.unlinkSync("./data/test.txt");		// delete the file

