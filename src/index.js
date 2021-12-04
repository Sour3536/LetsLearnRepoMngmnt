import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Card from './Card';
import Sdata from './Sdata';

ReactDOM.render(
  <>
  <h1 className="heading_style">List of top 5 Netflix series in 2020</h1>
  {Sdata.map((val,index) => {
  return (
    <Card imgsrc={val.imgsrc} 
    title={val.title} 
    sname={val.sname} 
    link={val.links} />
  );
})}
  </>
  ,
  document.getElementById('root')
);

