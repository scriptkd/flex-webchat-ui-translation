import { Component } from 'react';

const WELCOME = {
  fr: 'Bienvenue au service client',
  es: 'Bienvenido al servicio al cliente',
  pt: 'Bem-vindo ao atendimento ao cliente'
}

const TYPE = {
  fr: "L'agent tape...",
  es: 'El agente está escribiendo...',
  pt: 'O agente está digitando...'
}



class TranslateMessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    const { language } = this.props;

    //translate welcome message
    const welcomeContainer = document.getElementsByClassName('Twilio-WelcomeMessage-default')[0];
    console.log('welcomeContainer: ', welcomeContainer);
    const welcomeMessage = welcomeContainer?.getElementsByClassName('Twilio')[0];
    if (welcomeMessage) {
      welcomeMessage.innerText = WELCOME[language];
    }

    //remove date seperator 
    const dates = document.getElementsByClassName('css-ujnvkj');
    for (let i = 0; i < dates.length; i++) {
      console.log('for loop hit', i)
      const date = dates[i];
      if (date) {
        date.innerText = '';
      }
    }
    
    //remove read message
    const read = document.getElementsByClassName('Twilio-MessageListItem-ReadStatus');
    for (let i = 0; i < read.length; i++) {
      const readMessage = read[i];
      if (readMessage) {
        const readText = readMessage?.getElementsByClassName('Twilio')[0];
        if (readText) {
          readText.innerText = '';
        }
      }
    }

    //translate 'agent is typing'
    const typing = document.getElementsByClassName('Twilio-TypingIndicator')[0];
    const agentTyping = typing?.getElementsByTagName('span')[0];
    if (agentTyping) {
      agentTyping.innerText = TYPE[language];
    }

  }

  componentDidUpdate() {
    const { language } = this.props;

    //translate welcome message
    const welcomeContainer = document.getElementsByClassName('Twilio-WelcomeMessage-TextContainer')[0];
    console.log('welcomeContainer: ', welcomeContainer);
    const welcomeMessage = welcomeContainer?.getElementsByClassName('Twilio')[0];
    if (welcomeMessage) {
      welcomeMessage.innerText = WELCOME[language];
    }

    //remove date seperator 
    const dates = document.getElementsByClassName('css-ujnvkj');
    for (let i = 0; i < dates.length; i++) {
      console.log('for loop hit', i)
      const date = dates[i];
      if (date) {
        date.innerText = '';
      }
    }

    //remove read message
    const read = document.getElementsByClassName('Twilio-MessageListItem-ReadStatus');
    for (let i = 0; i < read.length; i++) {
      const readMessage = read[i];
      if (readMessage) {
        const readText = readMessage?.getElementsByClassName('Twilio')[0];
        console.log('readText', readText);
        if (readText) {
          readText.innerText = '';
        }
      }
    }

    //translate 'agent is typing'
    const typing = document.getElementsByClassName('Twilio-TypingIndicator')[0];
    const agentTyping = typing?.getElementsByTagName('span')[0];
    if (agentTyping) {
      agentTyping.innerText = TYPE[language];
    }

  }


  render() {
    return null;
  }
}

export default TranslateMessageList;