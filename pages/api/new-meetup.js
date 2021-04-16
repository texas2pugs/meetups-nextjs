import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const mongodb_user = 'testadmin';
    const mongodb_pass = '4xl4Wzawo36sRxKn';
    const mongodb_cluster = 'cluster0.j3l7i.mongodb.net';
    const mongodb_database = 'next-meetups';

    const connectionString = `mongodb+srv://${mongodb_user}:${mongodb_pass}@${mongodb_cluster}/${mongodb_database}?retryWrites=true&w=majority`;

    const client = await MongoClient.connect(connectionString);
    const db = client.db();

    const meetupsCollection = db.collection('meetups');
    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: 'Meetup inserted' });
  }
}

export default handler;
