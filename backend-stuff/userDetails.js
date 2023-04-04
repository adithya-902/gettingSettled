const mongoose = require("mongoose");

const UserDetailsScehma = new mongoose.Schema(
  {
    fname: String,
    lname: String,
    email: { type: String, unique: true },
    password: String,
  },
  {
    collection: "UserInfo",
  }
);

const ExpenseDetails = new mongoose.Schema({
  email: { type: String, unique: true },
  expenses: {},
  splitted: {},
});
mongoose.model("UserInfo", UserDetailsScehma);
mongoose.model("ExpenseInfo", ExpenseDetails);
