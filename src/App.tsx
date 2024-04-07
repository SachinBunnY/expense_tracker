import React, { useState } from 'react';
import './App.css';
import Card from './components/Card';
import Chart from './components/Chart';
import Item from './components/Item';

type MyKeyValuePair = {
  [key:string]:any;
}
type MyArr = MyKeyValuePair[];

let items:MyArr = [{
  "title":'Samosa',
  "price":'150',
  "category":'Food',
  'date':'2024-03-24'
},{
  "title":'Burger',
  "price":'250',
  "category":'Food',
  'date':'2024-03-24'
}
]


function App() {
  const [walletPrice, setWalletPrice] = useState<number>(5000);
  const [expenses, setExpenses] = useState<number>(500)
  
  return (
    <div className="mainContainer">
        <header className="headerSection">
          <div className='balanceDiv'>
            <Card spanText={"Wallet Balance"} walletPrice={walletPrice} expenses={expenses}/>
            <Card spanText={"Expenses"} walletPrice={walletPrice} expenses={expenses}/>
          </div>
          <div className='chartDiv'>
            <Chart />
          </div>
        </header>
        <footer className='footerSection'>
          <div className='recentTransactionDiv'>
            {items.length>0 && items.map((item:any)=>{
              return(<Item item={item}/>)
            })}
          </div>
          <div className='topExpensesDiv'>

          </div>
        </footer>
    </div>
  );
}

export default App;
