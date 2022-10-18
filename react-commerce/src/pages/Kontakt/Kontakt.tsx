
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import { NavItem } from '../../components/Data/DataHeader';
import styles from './Kontakt.module.scss';

export const Kontakt = () => {
  return (
    <>
      <Breadcrumb
        title={NavItem[3].name}
        path={NavItem[0].name}
        pagepath={NavItem[3].name}
        sectionpath={NavItem[3].slug}
      />
      <div className={styles.container}>
        <iframe
          className={styles.google_map}
          title='This is a unique title'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2253.587520777794!2d12.99905621618743!3d55.60919208051524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4653a3fbe478e801%3A0xb97fde100fa8935c!2sMalm%C3%B6%20centralstation%2C%20211%2020%20Malm%C3%B6!5e0!3m2!1sen!2sse!4v1665828363823!5m2!1sen!2sse'
          style={{ border: 0 }}
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
          aria-hidden='true'
        ></iframe>
        <div
          className={styles.form_container}
          role='form'
          id='contact-info'
          aria-label='Contact information'
        >
          <h2>Kontakta oss</h2>
          <br aria-hidden='true' />
          <form action='https://formspree.io/f/xpznlvea' method='POST'>
            <label htmlFor='First Name'>Full Name</label>
            <input
              type='text'
              name='user_name'
              placeholder='Your name..'
              required
              autoComplete='off'
            />
            <label htmlFor='email'>Email</label>
            <input
              type='text'
              name='email'
              placeholder='Your email'
              required
              autoComplete='off'
            />
            <label htmlFor='message'>Message</label>
            <textarea
              name='message'
              placeholder='Write something..'
              required
              autoComplete='off'
              cols={30}
              rows={10}
            ></textarea>
            <br aria-hidden='true' />
            <br aria-hidden='true' />
            <input type='submit' value='Skicka'></input>
          </form>
        </div>
      </div>
    </>
  );
};

export default Kontakt;
