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
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 120,
  };
}

export default HomePage;
