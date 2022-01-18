import React, {useRef, useEffect} from 'react';
import { btns, BTN_ACTIONS } from './btnconfig';
import '../../style/calculator.css';

const Calculator = () => {

    const btnsRef = useRef(null);
    const expRef = useRef(null);

    useEffect(() => {
        const btns = Array.from(btnsRef.current.querySelectorAll('button'));
        btns.forEach(e => e.style.height = e.offsetWidth + 'px');
    }, []);

    const handleClick = (item) => {

    }
    
    return (
        <div className='calculator'>
            <div className="calculator__result">
                <div ref={expRef} className="calculator__result__exp">34234324</div>
                <div className="calculator__result__exp"></div>
            </div>
            <div ref={btnsRef} className="calculator__btns">
                {
                    btns.map((item, index) => (
                        <button key={index} className={item.class} onClick={() => handleClick(item)}>
                            {item.display}
                        </button>
                    ))
                }
            </div>
        </div>
    )
}

export default Calculator
