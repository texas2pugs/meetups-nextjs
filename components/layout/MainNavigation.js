import Link from 'next/link';

import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link href="/">All Meetups</Link>
          </li>
          <li>
            <Link href="/new-meetup">New Meetup</Link>
          </li>
          {/* <li>
            <Link href="/favorites">Favorites</Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
