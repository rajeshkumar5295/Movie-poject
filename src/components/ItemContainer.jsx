import React from 'react';
import Item from './Item';
import {PRODUCTS,RESOURCES,COMPANY,SUPPORT} from "./Menus"

const ItemContainer = () => {
  return (
    <div  className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-10 mb-0'>
        <Item Links={PRODUCTS} title="PRODUCTION COMPANIES" />
        <Item Links={COMPANY} title="MOVIE MAKING COMPANY" />
        <Item Links={RESOURCES} title="RESOURCES" />
        
        <Item Links={SUPPORT} title="SUPPORT" />


    </div>
  )
}

export default ItemContainer ;