import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Presentations',
    Svg: require('../../static/img/baguette.svg').default,
    description: (
      <>
        Beautiful slides, actually workings demos.
      </>
    ),
  },
  {
    title: 'Networking',
    Svg: require('../../static/img/wine.svg').default,
    description: (
      <>
        See image.
      </>
    ),
  },
  {
    title: 'Dev sessions',
    Svg: require('../../static/img/croissant.svg').default,
    description: (
      <>
        We get our hands dirty.      
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
