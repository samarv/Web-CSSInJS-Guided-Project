import React from 'react';
import Playground from './Playground';


export default class Container extends React.Component {
  state = {
    primaryColor: 'black',
  }

  setPrimaryColor = primaryColor => {
    this.setState({ primaryColor });
  }

  render() {
    return (
      <div className='container-hello-world'>
        <Playground primaryColor={this.state.primaryColor} />

        <button onClick={() => this.setPrimaryColor('red')}>Red</button>
        <button onClick={() => this.setPrimaryColor('green')}>Green</button>
        <button onClick={() => this.setPrimaryColor('blue')}>Blue</button>
      </div>
    );
  }
}
