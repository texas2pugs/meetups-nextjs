import { Fragment } from 'react';

import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://media-cdn.tripadvisor.com/media/photo-s/08/df/98/7d/blick-auf-das-starbucks.jpg"
      title="First meetup"
      date="May 25, 2021"
      address="1 Eins Strase Berlin, Germany"
      description="Let's meet in the beautiful city of Berlin"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        image:
          'https://media-cdn.tripadvisor.com/media/photo-s/08/df/98/7d/blick-auf-das-starbucks.jpg',
        id: meetupId,
        title: 'First meetup',
        address: '1 Zwei Strase Berlin, Germany',
        description: 'Our first meetup in the beautiful city of Berlin!',
      },
    },
  };
}

export default MeetupDetails;
