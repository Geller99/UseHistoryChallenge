import React, { Component } from 'react';
import { render } from 'react-dom';
import FieldRenderer from './FieldRenderer';
import { useFields } from './redux/selectors'
import './style.css';

const App = () => {
  const fields = useFields()
    return (
      <div style={{display: 'flex', flexDirection: 'column'}}>
        {fields.map(field => <FieldRenderer field={field}/>)}
      </div>
    );
}
export default App;