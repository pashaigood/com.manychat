import React from 'react';
import Chat from '../components/Chat';

const ChatExampleStyle = {float:"left", marginRight: 20};

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Chat style={Object.assign({width: 400}, ChatExampleStyle)}/>
        <Chat style={Object.assign({width: 800}, ChatExampleStyle)}/>
      </div>
    );
  }
}
