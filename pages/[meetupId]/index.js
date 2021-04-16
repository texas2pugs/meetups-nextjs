import { MongoClient, ObjectId } from 'mongodb';

import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails(props) {
  return (
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      date="May 25, 2021"
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
}

export async function getStaticPaths() {
  const mongodb_user = 'testadmin';
  const mongodb_pass = '4xl4Wzawo36sRxKn';
  const mongodb_cluster = 'cluster0.j3l7i.mongodb.net';
  const mongodb_database = 'next-meetups';

  const connectionString = `mongodb+srv://${mongodb_user}:${mongodb_pass}@${mongodb_cluster}/${mongodb_database}?retryWrites=true&w=majority`;

  const client = await MongoClient.connect(connectionString);
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  // fetch all documents, but only the _id
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId;

  const mongodb_user = 'testadmin';
  const mongodb_pass = '4xl4Wzawo36sRxKn';
  const mongodb_cluster = 'cluster0.j3l7i.mongodb.net';
  const mongodb_database = 'next-meetups';

  const connectionString = `mongodb+srv://${mongodb_user}:${mongodb_pass}@${mongodb_cluster}/${mongodb_database}?retryWrites=true&w=majority`;

  const client = await MongoClient.connect(connectionString);
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  // fetch all documents, but only the _id
  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });

  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
  };
}

export default MeetupDetails;
