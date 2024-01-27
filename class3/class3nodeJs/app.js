const express = require("express");
const app = express();

app.get("/health-checkup", function (req, res) {
  const userName = req.headers.username;
  const password = req.header.password;
  const kidneyId = req.header.kidneyId;

  if (userName != "harkirat" || password != "pass") {
    res.status(403).json({
      msg: "User doesnt exist",
    });
    return;
  }
  if (kidneyId != 1 && kidneyId != 2) {
    res.status(411).json({
      msg: "why do you have this many kidneys",
    });
    return;
  }
  res.json({
    msg: "you have fine kidneys",
  });
});
app.listen(3000, () => {
  console.log("the site is up boy");
});
