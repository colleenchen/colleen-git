import React, { useState } from 'react';
import ReactDom from 'react-dom';
import styles from './scss/index.scss';

const SayHello = (props) => {
    const { names } = props;
    const isEmpty = value => value === '';
    return names.map(name => (
        <div key={name} className={`${styles.mainBackground} ${isEmpty(name) ? '' : styles.main}`}
            style={{
                fontSize: 28,
            }}>
            {`Hello ${isEmpty(name) ? 'HAPPY' : name}`}
        </div>
    ));
}

const Main = () => {
    // 會回傳一個陣列， count 為 0 ， setCount 用來設置 count
    const [count, setCount] = useState(0);
    return (
        <>
            <h1 className={styles.main}>{count}</h1>
            <button type='button' onClick={() => setCount(count + 1)}>
                點我+1
            </button>
        </>
    );
}



ReactDom.render(
    <div>
        <Main names={['World', '', 'Apple', 'Red', 'Colleen']} />
    </div>,
    document.getElementById('root'));