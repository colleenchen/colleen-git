
import React, { useState, useEffect } from 'react';
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

const Counter = () => {
    useEffect(() => {
        console.log('Component Render 後執行');
        return () => {
            console.log('Component 移除執行');
        }
    }, []);

    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log(`State 改變後 ${count}`)
        return () => {
            console.log(`State 改變前 ${count}`);
        };
    }, [count]);
    return (
        <>
            <h1 className={styles.main}>{count}</h1>
            <button type='button' onClick={() => setCount(count + 1)}>
                點我+1
            </button>
        </>
    );
}

const Main = () => {
    const [hiddenCounter, setHiddenCounter] = useState(false);
    return (
        <>
            <button type='button' onClick={() => setHiddenCounter(!hiddenCounter)}>
                開啟關閉計時器
            </button>
            {hiddenCounter ? <SayHello names={['World', '', 'Apple', 'Red', 'Colleen']} /> : <Counter />}
        </>
    );
}



ReactDom.render(
    <div>
        <Main />
    </div>,
    document.getElementById('root'));