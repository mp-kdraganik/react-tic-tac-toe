import Square from "./Square";
import style from "../styles/components/Board.module.css";
import { useState } from 'react';


export default function Board({ winner }) {

    const [squares, setSquares] = useState(Array(9).fill(null));
    const [nextMove, setNextMove] = useState('X');

    function handleClick(i) {
        const newSquares = squares.slice();
        if (newSquares[i] === null) {
            newSquares[i] = nextMove;
            setSquares(newSquares);
            setNextMove(nextMove === 'X' ? 'O' : 'X');
        }
        const w = calculateWinner(newSquares);
        if (w) {
            winner(w);
        }
    }

    function calculateWinner(squares) {
        const lines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        for (let line of lines) {
            const [a, b, c] = line;
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    return (
        <div>
            <div className={style.boardRow}>
                <Square value={squares[0]} i={0} onClick={handleClick}/>
                <Square value={squares[1]} i={1} onClick={handleClick}/>
                <Square value={squares[2]} i={2} onClick={handleClick}/>
            </div>
            <div className={style.boardRow}>
                <Square value={squares[3]} i={3} onClick={handleClick}/>
                <Square value={squares[4]} i={4} onClick={handleClick}/>
                <Square value={squares[5]} i={5} onClick={handleClick}/>
            </div>
            <div className={style.boardRow}>
                <Square value={squares[6]} i={6} onClick={handleClick}/>
                <Square value={squares[7]} i={7} onClick={handleClick}/>
                <Square value={squares[8]} i={8} onClick={handleClick}/>
            </div>
        </div>
    );
}