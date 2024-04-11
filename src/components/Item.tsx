import React from 'react';
import './Item.css'
import { IoPizzaOutline } from "react-icons/io5";
import { MdOutlineEdit } from "react-icons/md";
import { RxCrossCircled } from "react-icons/rx";
import { MdCurrencyRupee } from "react-icons/md";



interface itemsProps{
    item:any,
}


function Item({item}:itemsProps){
    return(<>
        <div className='itemsDiv commonStyle'>
            <div className='commonStyle'>
                <div className='itemsIcon'>
                    <IoPizzaOutline />
                </div>
                <div className='textAndDAteDiv'>
                    <span style={{fontWeight:"500"}}>{item.title}</span>
                    <span style={{color:"#9f9c9c"}}>{item.date}</span>
                </div>
            </div>
            <div className='commonStyle actionBtnDiv'>
                <span><MdCurrencyRupee />{item.price}</span>
                <button className='actionBtn' style={{backgroundColor:"#ef0b0ba8"}}><RxCrossCircled /></button>
                <button className='actionBtn' style={{backgroundColor:"#ef910ba8"}}><MdOutlineEdit /></button>
            </div>
        </div>
        <hr style={{color:"red", width:"94%", marginLeft:"1rem"}}></hr>
    </>)
}

export default Item;