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
            src='images/img-9.jpg'
            text='Internship'
            title='STEMCELL Technologies Internship'
            label=''
            url='/'
          />
         <CardItem
              src='images/img-9.jpg'
              text='Jan 2023 - Aug 2023 Commits'
              title='UBC Pharmacists GitHub'
              label=''
              url='https://github.com/ubcpharmclinic/queries'
            />
          <CardItem
              src='images/img-9.jpg'
              text='schema'
              title='Schema'
              label=''
              url='/Projects'
            />
         <CardItem
              src='images/img-9.jpg'
              text='hi'
              title='100 Days of Python Portfoilio'
              label=''
              url='https://100-days-of-python-portfoilio.charitygrey.repl.co/'
            />
          <CardItem
            src='images/img-9.jpg'
            text='hi'
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