import { Component } from 'react';

const BANNER = {
  fr: 'Discute avec nous',
  es: 'Habla con nosotros',
  pt: 'Converse conosco'
}

const TYPE = {
  fr: 'Tapez un message',
  es: 'Escriba el mensaje',
  pt: 'Digite a mensagem'
}

class TranslateChatWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    const { language } = this.props;

    //translate banner
    console.log(document.getElementsByClassName('css-cejg07'))
    const chatBanner = document.getElementsByClassName('css-cejg07')[0];
    if (chatBanner) {
      chatBanner.innerText = BANNER[language];
    }

    //translate type message
    const typeMessage = document.getElementsByClassName('css-85s8ih')[0];
    if (typeMessage) {
      typeMessage.placeholder=TYPE[language];
    }
  }

  componentDidUpdate() {
    const { language } = this.props;
    
    //translate banner
    const chatBanner = document.getElementsByClassName('css-cejg07')[0];
    if (chatBanner) {
      chatBanner.innerText = BANNER[language];
    }
  }


  render() {
    return null;
  }
}

export default TranslateChatWindow;