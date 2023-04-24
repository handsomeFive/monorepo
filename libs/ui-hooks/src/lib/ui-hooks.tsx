import styles from './ui-hooks.module.css';

/* eslint-disable-next-line */
export interface UiHooksProps {}

export function UiHooks(props: UiHooksProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiHooks!</h1>
    </div>
  );
}

export default UiHooks;
