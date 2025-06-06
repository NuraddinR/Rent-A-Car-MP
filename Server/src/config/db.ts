import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

async function main() {
  const username = process.env.DB_USERNAME;
  const password = process.env.DB_PASSWORD;
  await mongoose.connect(
    `mongodb+srv://${username}:${password}@cluster0.wsqmo.mongodb.net/rent-a-car?retryWrites=true&w=majority&appName=Cluster0`
  );
}

main()
  .then(() => {
    console.log("Connected to the db");
  })
  .catch((err) => console.log(err));
