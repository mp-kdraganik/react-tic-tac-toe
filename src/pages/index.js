import Board from "@/components/Board";
import styles from "@/styles/Home.module.css";
import { useState } from 'react';

export default function Home() {

  const [winner, setWinner] = useState(null);

  return (
    <>
      <h1>Kółko i krzyżyk</h1>
      <Board winner={setWinner}/>
      <div className={styles.winner}>
        {winner ? `Wygrał ${winner}` : ''}
      </div>
    </>
  );
}
