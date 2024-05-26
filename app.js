const express = require("express");
const port = 3000;
const app = express();

// code logic in calc function
function calc(p1, p2, p3) {
  if ((p1 + p2 + p3) % 2 == 1) {
    return -1;
  } else {
    return (p1 + p2 + p3) / 2;
  }
}

app.get("/:p1/:p2/:p3", (req, res) => {
  const p1 = parseInt(req.params.p1);
  const p2 = parseInt(req.params.p2);
  const p3 = parseInt(req.params.p3);
  //   validating the input
  if (
    p1 < 0 ||
    p1 > 30 ||
    p2 < 0 ||
    p2 > 30 ||
    p3 < 0 ||
    p3 > 30 ||
    !(p1 <= p2 && p2 <= p3)
  ) {
    return res.status(400).send("Invalid input");
  } else {
    let ans = calc(p1, p2, p3);
    if (ans == -1) {
      res.status(400).json({ draws: ans });
    } else {
      res.status(200).json({ draws: ans });
    }
  }
});

  app.listen(port, () => {
    console.log(`Running on Port ${port}`);
  });

module.exports = {app,calc};
