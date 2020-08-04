import mongo from "mongoose";

module.exports = mongo
  .connect("mongodb://localhost:27017/proffy", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((err) => {
    console.log(err, "error on mongodb connection");
  });
