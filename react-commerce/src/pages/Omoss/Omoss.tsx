import React from 'react';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import { NavItem } from '../../components/Data/DataHeader';
import styles from './Omss.module.scss';

const Omoss = () => {
  return (
    <main className='sida' Aria-label='Om W&A Klinique'>
      <Breadcrumb
        title={NavItem[2].name}
        path={NavItem[0].name}
        pagepath={NavItem[2].name}
        sectionpath={NavItem[2].slug}
      />
      <article className={styles.om_oss_block} aria-label='Om OSS'>
        <section
          className={styles.om_oss_block_om}
          aria-label='Om W&A Klinique'
        >
          <div
            className={styles.om_oss_block_om_rubrik}
            aria-label='Company history'
          >
            <dfn className={styles.rubrik} aria-label='Company Salogan'>
              Le bättre med oss
            </dfn>
            <label className={styles.title_main}>
              <h2 aria-label='W&A KLINIQUE'>W&A KLINIQUE</h2>
            </label>
            <label className={styles.om_oss_kortbeskrv}>
              <p>Visionen – Ett liv i hälsa</p>
            </label>
            <span
              className={styles.om_oss_block_beskrivning}
              aria-label='Company history detail'
            >
              <strong>
                The standard Lorem Ipsum passage, used since the 1500s
              </strong>
              <br aria-hidden='true' /> "Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum."
              <strong>
                <br aria-hidden='true' />
                <br aria-hidden='true' />
                Section 1.10.32 of "de Finibus Bonorum et Malorum", written by
                Cicero in 45 BC
              </strong>
              <br aria-hidden='true' />
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur?"
              <br aria-hidden='true' />
              <br aria-hidden='true' />
              <strong>1914 translation by H. Rackham</strong>{' '}
              <br aria-hidden='true' />
              "But I must explain to you how all this mistaken idea of
              denouncing pleasure and praising pain was born and I will give you
              a complete account of the system, and expound the actual teachings
              of the great explorer of the truth, the master-builder of human
              happiness. No one rejects, dislikes, or avoids pleasure itself,
              because it is pleasure, but because those who do not know how to
              pursue pleasure rationally encounter consequences that are
              extremely painful. Nor again is there anyone who loves or pursues
              or desires to obtain pain of itself, because it is pain, but
              because occasionally circumstances occur in which toil and pain
              can procure him some great pleasure. To take a trivial example,
              which of us ever undertakes laborious physical exercise, except to
              obtain some advantage from it? But who has any right to find fault
              with a man who chooses to enjoy a pleasure that has no annoying
              consequences, or one who avoids a pain that produces no resultant
              pleasure?" <br aria-hidden='true' />
              <br aria-hidden='true' />
              <strong>
                Section 1.10.33 of "de Finibus Bonorum et Malorum", written by
                Cicero in 45 BC
              </strong>
              <br aria-hidden='true' />
              "At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio. Nam libero tempore, cum soluta
              nobis est eligendi optio cumque nihil impedit quo minus id quod
              maxime placeat facere possimus, omnis voluptas assumenda est,
              omnis dolor repellendus. Temporibus autem quibusdam et aut
              officiis debitis aut rerum necessitatibus saepe eveniet ut et
              voluptates repudiandae sint et molestiae non recusandae. Itaque
              earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
              voluptatibus maiores alias consequatur aut perferendis doloribus
              asperiores repellat."
            </span>
          </div>
        </section>
        <section className={styles.om_oss_block_produkt}>
          <div className={styles.om_oss_block_inner}>
            <div className={styles.om_oss_block_produkt_left}>
              <dfn className={styles.rubrik} aria-label='Company Salogan'>
                Success story
              </dfn>
              <label className={styles.title_main}>
                <h2 aria-label='W&A KLINIQUE'>W&A KLINIQUE</h2>
              </label>
              <label>
                <p>Visionen – Ett liv i hälsa</p>
              </label>
              <p>
                <strong>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </strong>
                <br aria-hidden='true' />
                <br aria-hidden='true' />
                "At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio. Nam libero tempore,
                cum soluta nobis est eligendi optio cumque nihil impedit quo
                minus id quod maxime placeat facere possimus, omnis voluptas
                assumenda est, omnis dolor repellendus.
              </p>
            </div>
            <div className={styles.om_oss_block_produkt_right}>
              <img
                src='https://d3studio.se/react/img/slider/bild2.webp'
                alt=''
                className={styles.om_oss_block_bild}
              />
            </div>
          </div>
        </section>
        <section className={styles.om_oss_block_kvalite}>
          <div className={styles.om_oss_block_kvalite_inner}>
            <div className={styles.om_oss_block_kvalite_1}>
              <img
                src='https://d3studio.se/react/img/icons/nature-icon.svg'
                alt='Natural Icon'
                className={styles.om_oss_icons}
              />
              <h4 aria-label='Natural' className={styles.om_oss_block_heading}>
                Natural
              </h4>
              <dfn>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </dfn>
            </div>
            <div className={styles.om_oss_block_kvalite_2}>
              <img
                src='https://d3studio.se/react/img/icons/quality.svg'
                alt='Quality Icon'
                className={styles.om_oss_icons}
              />
              <h4 aria-label='Quality' className={styles.om_oss_block_heading}>
                Quality
              </h4>
              <dfn>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </dfn>
            </div>
            <div className={styles.om_oss_block_kvalite_3}>
              <img
                src='https://d3studio.se/react/img/icons/organic.svg'
                alt='Organic Icon'
                className={styles.om_oss_icons}
              />
              <h4 aria-label='Organic' className={styles.om_oss_block_heading}>
                Organic
              </h4>
              <dfn>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </dfn>
            </div>
          </div>
        </section>
        <section className='om_oss_block4_testimonial'></section>
        <section className='om_oss_block5_nyhett'></section>
      </article>
    </main>
  );
};

export default Omoss;
