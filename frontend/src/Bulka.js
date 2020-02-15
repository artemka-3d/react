import React from 'react';
import Lmao from './Lmao';
const Bulka = () => {

    return  ( <div className="bulka">
         <Lmao />
    <div><b>Что вкуснее?</b></div>
    <div  style={{fontSize: '50px', fontFamily: 'Arial'}}>
    <input type="radio" name="option1" value="a1" checked />Булка
    <input type="radio" name="option2" value="a2" 
        />Чомпстик
        <input type="radio" name="option3" value="a3" />Закваска
        <input type="radio" name="option4" value="a4" />Брусчеты
        <input type="radio" name="option5" value="a5" />Дамб он э вест кост...
    </div>
    </div>)      
}

export default Bulka;