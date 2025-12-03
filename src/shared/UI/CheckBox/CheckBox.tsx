import styles from './CheckBox.module.scss';

const CheckBox = () => {
  return (
    <label className={styles.checkbox}>
      <input type="checkbox" />
      <span className={styles.checkmark}></span>
    </label>
  );
};

export default CheckBox;
