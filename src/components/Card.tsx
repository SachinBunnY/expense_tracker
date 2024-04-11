import React, { useState } from 'react';
import './Card.css'
import { FaPlus } from "react-icons/fa";
import Modal from 'react-modal';


const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
};





interface cardProp{
    spanText:string,
    walletPrice:number, 
    expenses:number
}

function Card({spanText, walletPrice, expenses}:cardProp){
    const[modalIsOpen, setModalIsOpen] = useState<boolean>(false)

    function closeModal(){
        setModalIsOpen(false);
    }

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
                <button style={{background:`${buttonStyle(spanText)}`}} className='cardBtn' onClick={()=>setModalIsOpen(true)}><FaPlus /> &nbsp;{spanText==='Expenses'?'Add Expense':'Add Income'}</button>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div>
                    <h2>Add Expenses</h2>
                    <div>
                        <input type='text' placeholder='Title'></input>
                        <input type='text' placeholder='Price'></input>
                    </div>
                    <div>
                        {/* <input type='text' placeholder='Select Category'></input> */}
                        <select name="" id="">
                            <option value="Entertainment">Entertainment</option>
                            <option value="Food">Food</option>
                            <option value="Travel">Travel</option>
                            <option value="Grocery">Grocery</option>
                        </select>
                        <input type='text' placeholder='dd/mm//yyyy'></input>
                    </div>
                    <div>
                        <button>Add Expence</button>
                        <button>Cancel</button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default Card;