import { useRouter } from 'next/router';
// import { useContext } from 'react';

import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
// import FavoritesContext from '../../store/favorites-context';

function MeetupItem(props) {
  // const favoritesCtx = useContext(FavoritesContext);
  const router = useRouter();

  // const isFavorite = favoritesCtx.isFavorite(props.id);
  function showDetailsHandler() {
    router.push('/' + props.id);
  }

  // function toggleIsFavoriteHandler() {
  //   if (isFavorite) {
  //     favoritesCtx.removeFavorite(props.id);
  //   } else {
  //     favoritesCtx.addFavorite({
  //       id: props.id,
  //       title: props.title,
  //       description: props.description,
  //       image: props.image,
  //       address: props.address,
  //     });
  //   }
  // }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Details</button>
        </div>
        {/* <div className={classes.actions}>
          <button onClick={toggleIsFavoriteHandler}>
            {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          </button>
        </div> */}
      </Card>
    </li>
  );
}

export default MeetupItem;
