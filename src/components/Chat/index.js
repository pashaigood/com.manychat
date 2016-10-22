import React  from 'react';
import './index.scss';
import messages from '../../mocks/messages';

const ImageSize = 40;
const ImageStyle = {width: ImageSize, height: ImageSize};

export default class Chat extends React.Component {
  render() {
    return (
      <div className="chat" {...this.props}>
        {
          messages.map((message, index) => (
            <div
              className="message"
              style={{marginLeft: message.level * (ImageSize + 5) + 10}}
              key={index}
            >
              <img
                src={message.avatar}
                style={ImageStyle}
              />
              <div>
                <p>{message.text}</p>
              </div>
            </div>
          ))
        }
      </div>
    );
  }
}
