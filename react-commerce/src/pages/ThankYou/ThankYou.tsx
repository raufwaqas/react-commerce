import React, { FC } from 'react';
import styles from './ThankYou.module.scss';

const ThankYou: FC = () => {
  return (
    <div className={styles.thankYou_section}>
      <div
        className={styles.thankYou_section_inner}
        aria-label='Tack medelande'
      >
        <h4>Tack för köpa hos</h4>
        <h1>W&A Klinique</h1>

        <p>
          Vi är glada att kunna bekräfta din order. Den är nu packad och kommer
          snart att skickas från vårt lager.
        </p>
        <br />

        <p>
          Vänligen notera att spårningsnumret för din leverans kanske inte är
          tillgängligt direkt. Det kan ta upp till 24 timmar (mån-fre) innan din
          order är synlig online.
          <br />
          <br /> Om du har några frågor vänligen kontakta vår kundservice, eller
          läs våra frågor och svar nedan.
          <br />
          <br /> Information och allmänna villkor för din order är bifogade i
          ett separat dokument. Tack för att du shoppar hos oss! <br />
          <br />
          <strong>Vi hoppas att du kommer bli nöjd med ditt köp!</strong>
        </p>
      </div>
    </div>
  );
};

export default ThankYou;
