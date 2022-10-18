import React from 'react';
import { Link } from 'react-router-dom';
import Btn from '../../components/Buttons/Btn';
import styles from './Error.module.scss';

const Error = () => {
  return (
    <main className={styles.error_container}>
      <div className={styles.error_inner}>
        <h1 className={styles.error_main_heading}>404</h1>
        <h2>OPS something went wrong</h2>
        <p>
          The page you are looking for does not exist. How you got here is a
          mystery. But you can click the button below to got back to the
          Homepage.
        </p>
        <Link to='/' aria-label='Click here go back to Home page'>
          <Btn bgcolor='dark' onClick={() => {}} text='BACK TO HOME' />
        </Link>
      </div>
    </main>
  );
};

export default Error;
