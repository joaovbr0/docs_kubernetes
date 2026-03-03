import React from 'react';
import styles from './Callout.module.css';
import clsx from 'clsx';

function Callout({ type, children }) {
  return (
    <div className={clsx(styles.callout, styles[type])}>
      <div className={styles.calloutContent}>{children}</div>
    </div>
  );
}

export function Tip({ children }) {
  return <Callout type="tip">{children}</Callout>;
}

export function Note({ children }) {
  return <Callout type="note">{children}</Callout>;
}

export function Warning({ children }) {
  return <Callout type="warning">{children}</Callout>;
}

export function Info({ children }) {
  return <Callout type="info">{children}</Callout>;
}
