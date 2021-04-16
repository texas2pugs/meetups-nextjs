import { MongoClient } from 'mongodb';

import MeetupList from '../components/meetups/MeetupList';

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  const mongodb_user = 'testadmin';
  const mongodb_pass = '4xl4Wzawo36sRxKn';
  const mongodb_cluster = 'cluster0.j3l7i.mongodb.net';
  const mongodb_database = 'next-meetups';

  const connectionString = `mongodb+srv://${mongodb_user}:${mongodb_pass}@${mongodb_cluster}/${mongodb_database}?retryWrites=true&w=majority`;

  const client = await MongoClient.connect(connectionString);
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 120,
  };
}

export default HomePage;
