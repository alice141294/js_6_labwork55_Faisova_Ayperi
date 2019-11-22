import React from 'react';
import nanoid from 'nanoid'
import './BurgerBuilder.css';

const filds = arr => {
    let arrDiv =[];
    for (let i = 0; i < arr.length;i++){
        for (let j = 0;j < arr[i].count ; j++){
            arrDiv.push(<div key={nanoid()} className={arr[i].name}/>)
        }
    }
    return arrDiv
} ;
const BurgerBuilder = props => {
    return (
    <div className='NewBurger'>
            <div className="Burger">
                <h2> Burger</h2>
                <div className="BreadTop">
                    <div className="Seeds1"/>
                    <div className="Seeds2"/>
                </div>
                {filds(props.ingredients)}
                <div className="BreadBottom"/>
                
            </div>
            <div className='price'>Общая стоимость {props.price}</div>
    </div>
    )
};
export default BurgerBuilder