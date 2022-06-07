import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

class TranslatedMessageBody extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    const { message } = this.props;
    const messageArray = message?.source?.body?.split( ' TRANSLATEDFROM ') || ['error', 'error'];
    const messageDisplayed = message.isFromMe ? messageArray[1] : messageArray[0];
    return (
      <div style={{ marginLeft: "12px", marginRight: "12px", marginTop: "3px", marginBottom: "8px" }}>
        <ReactMarkdown components = {{ p: 'div' }}>
          { messageDisplayed }
        </ReactMarkdown>
      </div>
    )
  }
}

export default TranslatedMessageBody;
