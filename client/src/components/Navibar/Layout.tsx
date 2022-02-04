import React from 'react';
import Navibar from './Navibar';

export default function Layout(props) {
  return (
    <div>
      <Navibar />
      <main>{props.children}</main>
    </div>
  );
}
