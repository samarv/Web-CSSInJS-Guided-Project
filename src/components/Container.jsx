import React from 'react';
import Playground from './Playground';


const theme = {
  colors: {
    primary: 'yellow',
    secondary: 'red',
  },
  margins: {
    sm: '10em',
    l: '12em',
  },
  padding: {

  },
};

export default class Container extends React.Component {
  state = {
    primary: 'black',
  }

  setPrimary = primary => this.setState({ primary })

  render() {
    return (
      <div className='container'>
        <Playground primary={this.state.primary} />

        <button onClick={() => this.setPrimary('red')}>Red</button>
        <button onClick={() => this.setPrimary('yellow')}>Yellow</button>
        <button onClick={() => this.setPrimary('blue')}>Blue</button>
      </div>
    );
  }
}
