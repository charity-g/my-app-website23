import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
   <div className='Cards'>
    <div className='cards__container'>
      <div className='cards__wrapper'>
        <ul className='cards__items'>
          <CardItem
            src='https://images.unsplash.com/photo-1696813519917-1fb0a17177b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
            text='SAP data upload, Snowflake scripting, SQL queries, Tableau visualizations,  Excel and Google sheets and formulas, Python pandas scripts'
            title='STEMCELL Technologies Internship'
            label=''
            url='/Projects'
          />
         <CardItem
              src='https://images.unsplash.com/photo-1696832631681-b290850e5843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
              text='Jan 2023 - Aug 2023 queries'
              title='UBC Pharmacists GitHub'
              label=''
              url='https://github.com/ubcpharmclinic/queries'
            />
          <CardItem
              src='https://images.unsplash.com/photo-1696754115844-8219cc646f2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60'
              text='Diagrammed the schema for the adapted OSCAR EMR database'
              title='Schema'
              label=''
              url='https://www.figma.com/file/dQbkfUzWUHUnl34a2baTqt/Schema-Project-Present?type=design&mode=design&t=8pRmfLhrozFQJA2B-1'
            />
         <CardItem
              src='https://images.unsplash.com/photo-1696610101250-f5933d2f616c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60'
              text='Created various projects such as  recursion, console programs, scripting, hashing, salting, libraries, databases, api, and Flask routing, networking and sessions'
              title='100 Days of Python Portfoilio'
              label=''
              url='https://100-days-of-python-portfoilio.charitygrey.repl.co/'
            />
          <CardItem
            src='https://images.unsplash.com/photo-1696489149180-bb53f8c38bdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM0fDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60'
            text='Implemented and refactored a Minesweeper game in Java with JSwing GUI, using  branching and version control'
            title='JSwing Minesweeper'
            label=''
            url='https://100-days-of-python-portfoilio.charitygrey.repl.co/'
          />
        </ul>
      </div>
    </div>
   </div>
  );
}

export default Cards;