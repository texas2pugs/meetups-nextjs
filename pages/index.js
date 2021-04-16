import { MongoClient } from 'mongodb';

import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'First Meetup',
    image:
      'https://media-cdn.tripadvisor.com/media/photo-s/08/df/98/7d/blick-auf-das-starbucks.jpg',
    address: 'Berlin, Germany',
    description:
      'We will have our very first meetup at this Starbucks in Berlin!',
  },
  {
    id: 'm2',
    title: 'Second Meetup',
    image:
      'http://wanderingjustin.com/wp-content/uploads/2010/07/coffeehus-400x267.jpg',
    address: 'Reykjavik, Iceland',
    description: 'If all goes well, we will meet next in Reykjavik!',
  },
];

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
