import { memo } from "react";
import styles from "./Task.css";

export default memo(function Task({ text, onDelete, id }: any) {
  const onClick = () => {
    onDelete(id);
  };
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Text}>{text}</div>

      <button onClick={onClick} className={styles.Delete}>
        Удалить
      </button>
    </div>
  );
});
