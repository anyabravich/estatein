'use client';

import { useState } from 'react';
import styles from './page.module.scss';
import Image from 'next/image';
import Button from '../Button';
import { ICard } from './types';

const Card = ({ image, title, description, list, price }: ICard) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <article className={styles['card']}>
      <div className={styles['image-wrapper']}>
        <Image
          className={styles['image']}
          src={image}
          alt="card"
          fill
          sizes="100%"
          priority
        />
      </div>
      <h3 className={styles['title']}>{title}</h3>
      <p className={styles['description']}>
        <span
          className={`${styles['description-text']} ${
            showMore && styles['showed']
          }`}
        >
          {description}
        </span>
        <button
          className={styles['read-more']}
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? 'Read Less' : 'Read More'}
        </button>
      </p>
      <ul className={styles['components']}>
        {list.map((item, index) => (
          <li className={styles['component']} key={index}>
            <Image
              className={styles['component-icon']}
              src={`/icons/card/icon-${index + 1}.svg`}
              alt={`${index + 1}-icon`}
              width={24}
              height={24}
            />
            {item}
          </li>
        ))}
      </ul>
      <footer className={styles['footer']}>
        <p className={styles['price']}>
          <span className={styles['price-label']}>Price</span>
          <span className={styles['price-value']}>{price}</span>
        </p>
        <Button styled="primary" isFulled={true}>
          View Property Details
        </Button>
      </footer>
    </article>
  );
};

export default Card;
