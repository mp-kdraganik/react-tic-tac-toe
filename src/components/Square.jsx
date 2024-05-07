import style from '../styles/components/Square.module.css';


export default function Square({ value, i, onClick }) {

    return (
        <button className={style.square} onClick={ () => onClick(i) }>
            { value }
        </button>
    );
}