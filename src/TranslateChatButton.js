import { Component } from 'react';

const TEXT = {
  fr: 'Discute avec nous',
  es: 'Habla con nosotros',
  pt: 'Converse conosco'
}

class TranslateChatButton extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    const { language } = this.props;
    console.log('hello from TranslateStatic');
    console.log(this.props);
    // class=Twilio-EntryPoint
    console.log(document.getElementsByClassName('Twilio-EntryPoint-Tagline'))
    const chatButton = document.getElementsByClassName('Twilio-EntryPoint-Tagline')[0];
    if (chatButton) {
      chatButton.innerText = TEXT[language];
    }
  }

  componentDidUpdate() {
    const { language } = this.props;
    // console.log('hello from TranslateStatic');
    // console.log(this.props);
    // class=Twilio-EntryPoint
    console.log(document.getElementsByClassName('Twilio-EntryPoint-Tagline'))
    const chatButton = document.getElementsByClassName('Twilio-EntryPoint-Tagline')[0];
    if (chatButton) {
      chatButton.innerText = TEXT[language];
    }
  }


  render() {
    return null;
  }
}

export default TranslateChatButton;
