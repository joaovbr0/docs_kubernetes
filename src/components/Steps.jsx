import React from 'react';
import styles from './Steps.module.css';

export function Steps({ children }) {
  const steps = React.Children.toArray(children);
  return (
    <div className={styles.stepsContainer}>
      {steps.map((child, index) =>
        React.cloneElement(child, { number: index + 1 })
      )}
    </div>
  );
}

export function Step({ title, children, number }) {
  return (
    <div className={styles.step}>
      <div className={styles.stepIndicator}>
        <span className={styles.stepNumber}>{number}</span>
        <div className={styles.stepLine} />
      </div>
      <div className={styles.stepContent}>
        <h3 className={styles.stepTitle}>{title}</h3>
        <div className={styles.stepBody}>{children}</div>
      </div>
    </div>
  );
}
