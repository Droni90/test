import { useCallback, useState } from "react";
import Task from "../Task";
import { TaskInput } from "../TaskInput";

import { TaskItem } from "./Todo.types";
import styles from "./Todo.css";

// Задача:
// 1. Написать логику хранения и обработки списка задач list - Добавление/Удаление
// 2. Вывести список добавленных задач. Использовать компонент Task в src/components/Task

export function Todo() {
  const [list, setList] = useState<Array<TaskItem>>([]);

  const onAdd = useCallback((name: string) => {
    setList((prev) => [...prev, { text: name, id: name + Date.now() }]);
  }, []);

  const onDelete = useCallback((id: string) => {
    setList((prev) => prev.filter((i) => i.id !== id));
  }, []);

  return (
    <div className={styles.App}>
      <div className={styles.Header}>Мои задачи</div>

      <div className={styles.TaskInputWrapper}>
        <TaskInput onAdd={onAdd} />
        {list.map((i) => {
          return (
            <Task text={i.text} key={i.id} id={i.id} onDelete={onDelete} />
          );
        })}
      </div>
    </div>
  );
}
