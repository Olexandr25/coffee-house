import React from 'react';
import './SpecialMenu.css';
import { Button } from '../../components';
import { data } from '../../constants';

const MenuItem = props => {
  const { coffee, price } = props;
  return (
    <div className='menu-item_wrapper'>
      <div className='menu-item'>
        <h2>{coffee}</h2>
        <span>{price} $</span>
      </div>
      <div className='divider' />
    </div>
  );
};

const SpecialMenu = () => {
  return (
    <div className='app__menu section__padding' id='menu'>
      <div className='flex__two menu_title'>
        <h1 className='headtext__cormorant'>OUR MENU</h1>
        <Button type='ghost'>See more</Button>
      </div>
      <div className='flex__three menu_items'>
        <div className='menu-header'>
          <span>COFFEE</span>
          <span>PRICE</span>
        </div>
        <div className='menu-items'>
          {data.menu?.map((item, index) => (
            <MenuItem
              coffee={item.coffee}
              price={item.price}
              key={`menu-item-${item.coffee}-${item.price}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialMenu;
