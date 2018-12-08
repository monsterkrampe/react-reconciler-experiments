import React, { Component } from 'react';
import View from './View';
import Text from './Text';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };

    this.increment = this.increment.bind(this);
  }

  increment() {
    console.log('clicked');
    this.setState(state => ({ ...state, counter: state.counter + 1 }));
  }

  render() {
    console.log(this.state);
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#8BBDD9',
          height: 400
        }}
      >
        <Text>Counter: {this.state.counter}</Text>
        <Text onClick={this.increment}>Click me!</Text>
      </View>
    );
  }
}

export default App;
