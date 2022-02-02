import React from 'react';
import ItemList from '../ItemList/ItemList';
export default function Dashboard() {
  return (
    <>
      <div>
        <h1>NavBard</h1>
      </div>
      <div>
        <h1>Dashboard</h1>
      </div>
      <h1>Current List</h1>
      <div className='list'>
        <ItemList complete={false} />
      </div>
      <h1>Past List</h1>
      <div className='list'>
        <ItemList complete={true} />
      </div>
    </>
  );
}
