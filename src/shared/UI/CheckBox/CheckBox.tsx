import styles from './CheckBox.module.scss';

type Props = {
  selected: boolean;
  onClick: () => void;
};

const CheckBox = ({ onClick, selected }: Props) => {
  return (
    <label className={styles.checkbox}>
      <input onChange={onClick} checked={selected} type="checkbox" />
      <span className={styles.checkmark}></span>
    </label>
  );
};

export default CheckBox;
