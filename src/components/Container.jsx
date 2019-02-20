import React from 'react';
import Playground from './Playground';


export default class Container extends React.Component {
  render() {
    return (
      <div className='container'>
        <Playground />
      </div>
    );
  }
}
