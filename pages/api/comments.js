import { MongoClient } from "mongodb";

async function handler(req, res) {
  try {
    if (req.method === "POST") {
      const data = req.body;

      const client = await MongoClient.connect(
        "mongodb+srv://ryza_91:rickyampas123@dpproject.zweomzn.mongodb.net/?retryWrites=true&w=majority"
      );
      const db = client.db();
      const dpCollection = db.collection("dpproject");

      const result = await dpCollection.insertOne(data);

      client.close();

      res.status(201).json();
    }
  } catch (err) {
    console.log(err);
  }
}
export default handler;
