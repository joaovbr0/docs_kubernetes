import React from 'react';
import Link from '@docusaurus/Link';
import styles from './CardGroup.module.css';

export function CardGroup({ cols = 2, children }) {
  return (
    <div
      className={styles.cardGroup}
      style={{ '--card-cols': cols }}
    >
      {children}
    </div>
  );
}

export function Card({ title, icon, href, children }) {
  const content = (
    <div className={styles.card}>
      {icon && <div className={styles.cardIcon}>{icon}</div>}
      <div className={styles.cardTitle}>{title}</div>
      {children && <div className={styles.cardBody}>{children}</div>}
    </div>
  );

  if (href) {
    return (
      <Link to={href} className={styles.cardLink}>
        {content}
      </Link>
    );
  }

  return content;
}
