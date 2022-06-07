import { Component } from 'react';

const HEAD = {
  fr: "Merci!",
  es: 'Gracias!',
  pt: 'Obrigada!'
}

const PARA = {
  fr: "Si vous avez d'autres questions, veuillez nous contacter à nouveau.",
  es: 'Si tiene más preguntas, comuníquese con nosotros nuevamente.',
  pt: 'Se você tiver mais alguma dúvida, entre em contato conosco novamente.'
}

const BTN = {
  fr: 'DÉMARRER UN NOUVEAU CHAT',
  es: 'COMENZAR CHAT NUEVO',
  pt: 'INICIAR NOVO CHAT'
}

//Thanks for chatting with us!

//If you have any more questions please reach out to us again.

//START NEW CHAT



class TranslateThankYou extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    const { language } = this.props;
    console.log('hello from TranslateThankYou');
    console.log(this.props);

    //thank you messages
    const thankBox = document.getElementsByClassName('MessageCanvasTrayContent')[0];
    const heading = thankBox?.getElementsByTagName('h6')[0];
    const paragraph = thankBox?.getElementsByTagName('p')[0];
    if (heading) {
      heading.innerText = HEAD[language];
    }
    if (paragraph) {
      paragraph.innerText = PARA[language];
    }
    
    //new chat button
    const button = document.getElementsByClassName('Twilio-Button')[0];
    console.log('button: ', button);
    const buttonMessage = button?.getElementsByClassName('Twilio')[0];
    console.log('buttonMessage: ', buttonMessage);
    if (buttonMessage) {
      buttonMessage.innerText = BTN[language];
    }

    //is typing message
    const typing = document.getElementsByClassName('Twilio-TypingIndicator')[0];
    const isTyping = typing?.getElementsByTagName('span')[0];
    if (isTyping) {
      isTyping.innerText = 'fuck stick';
    }
  }

  componentDidUpdate() {
    const { language } = this.props;

    //thank you messages
    const thankBox = document.getElementsByClassName('MessageCanvasTrayContent')[0];
    const heading = thankBox?.getElementsByTagName('h6')[0];
    const paragraph = thankBox?.getElementsByTagName('p')[0];
    if (heading) {
      heading.innerText = HEAD[language];
    }
    if (paragraph) {
      paragraph.innerText = PARA[language];
    }
    
    //new chat button
    const button = document.getElementsByClassName('Twilio-Button')[0];
    const buttonMessage = button?.getElementsByClassName('Twilio')[0];
    if (buttonMessage) {
      buttonMessage.innerText = BTN[language];
    }

    //is typing message
    const typing = document.getElementsByClassName('Twilio-TypingIndicator')[0];
    console.log('typing: ', typing);
    const isTyping = typing?.getElementsByTagName('span')[0];
    if (isTyping) {
    isTyping.innerText = 'stick';
    }
  }


  render() {
    return null;
  }
}

export default TranslateThankYou;