import React from 'react';
import styles from './Accordion.module.css';

export function AccordionGroup({ children }) {
  return <div className={styles.accordionGroup}>{children}</div>;
}

export function Accordion({ title, children }) {
  return (
    <details className={styles.accordion}>
      <summary className={styles.accordionSummary}>
        <span className={styles.accordionTitle}>{title}</span>
        <span className={styles.accordionIcon}>›</span>
      </summary>
      <div className={styles.accordionBody}>{children}</div>
    </details>
  );
}
