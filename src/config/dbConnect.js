import mongoose from "mongoose";

mongoose.connect("mongodb+srv://matheus:123@nodeexpress.ngutd.mongodb.net/node");

let db = mongoose.connection;

export default db;