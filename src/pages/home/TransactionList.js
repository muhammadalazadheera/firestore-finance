import { useFirestore } from "../../hooks/useFirestore";

import styles from "./home.module.css";

export default function TransactionList({ transactions }) {
  const { deleteDocument, state } = useFirestore("transactions");
  console.log(state);
  return (
    <ul className={styles.transactions}>
      {transactions.map((transaction) => {
        return (
          <li key={transaction.id}>
            <p className={styles.name}>{transaction.name}</p>
            <p className={styles.amount}>${transaction.amount}</p>
            <button onClick={() => deleteDocument(transaction.id)}>x</button>
          </li>
        );
      })}
    </ul>
  );
}
