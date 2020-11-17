import React from 'react';
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


ReactDom.render(
    <div>
        <SayHello names={['World', '', 'Apple', 'Red', 'Colleen']} />
    </div>,
    document.getElementById('root'));