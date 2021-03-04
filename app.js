// Main file of the app, starts app.
const app = require("./config/server");

app.listen(3000, () => {
  console.log("Listening on 3000");
});
