import React from 'react';
import './Card.css'
import { FaPlus } from "react-icons/fa";


interface cardProp{
    spanText:string,
    walletPrice:number, 
    expenses:number

}

function Card({spanText, walletPrice, expenses}:cardProp){

    function buttonStyle(btn:string){
        if(btn==='Expenses'){
            return 'linear-gradient(85deg, #ebb8b8 0 5%, #ef0b0ba8 70% 100%)'
        }else{
            return 'linear-gradient(85deg, #b2e5b5 0 5%, #37ed40a8 70% 100%)'
        }
    }
    
    return(
        <div  className="cardDiv">
            <div className="cardDivText">
                <span className='headerSectionText'>{spanText}: {spanText==='Expenses'?expenses:walletPrice}</span>
                <button style={{background:`${buttonStyle(spanText)}`}} className='cardBtn'><FaPlus /> &nbsp;{spanText==='Expenses'?'Add Expense':'Add Income'}</button>
            </div>
        </div>
    )
}

export default Card;