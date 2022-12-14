import React, { useEffect, useState } from "react";
import { getSchedule } from "../../api/api";

import styles from "./Schedule.css";

// История
// Хитрый бекендер поменял формат возвращаемых данных из API getSchedule
// И все сломалось :)
// Вчера он попытался починить компонент Schedule, но стало только хуже

// Задача
// Починить компонент Schedule :) и вывести список дней возвращаемых из getSchedule
// "Понедельник ..."
// "Вторник ..."

// Условие
// getSchedule возвращает Promise
// Структуру самой функции getSchedule менять нельзя

export default function Schedule() {
  const [list, setList] = useState<any>([]);
  useEffect(() => {
    const getData = async () => {
      const { data }: any = await getSchedule();
      const arr = [];
      for (const key in data) {
        arr.push(data[key]);
      }
      setList(arr);
    };

    getData();
  }, []);

  return (
    <div>
      <div className={styles.Header}>Дни недели</div>

      <ul>
        {list.map((item: any) => {
          return <li key={item?.index}>{item.text}</li>;
        })}
      </ul>
    </div>
  );
}
