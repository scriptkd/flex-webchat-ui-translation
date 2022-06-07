import React from 'react';
import * as FlexWebChat from "@twilio/flex-webchat-ui";

const prompt = {
  en: 'Select your language',
  es: 'Elige tu idioma',
  fr: 'Choisissez votre langue',
  pt: 'Selecione sua lingua'
}

const notice = {
  en: 'You selected English', 
  es: 'Has seleccionado Español', 
  fr: 'Vous avez sélectionné Français',
  pt: 'Você selecionou Português'
}

class LanguageSelect extends React.Component {

  constructor(props) {
    super(props);
    this.state = { language: 'en' };
    this.handleSelect = this.handleSelect.bind(this);
  }

  async handleSelect(event) {    
    this.setState({language: event.target.value});
    if (localStorage.twilioFlexWebChatLanguage !== event.target.value) {
      localStorage.twilioFlexWebChatLanguage = await event.target.value;
      await FlexWebChat.Actions.invokeAction("RestartEngagement");
      await alert(notice[localStorage.twilioFlexWebChatLanguage]);
      window.location.reload();
    }  
  }

  componentDidMount() {
    if (localStorage.twilioFlexWebChatLanguage) {
      this.setState({language: localStorage.twilioFlexWebChatLanguage})
    } else {
      localStorage.twilioFlexWebChatLanguage = 'en';
    }
  }

  render() {
    const { language } = this.state;
    const { isDisabled } = this.props

    return(<div>
      <h3>{prompt[language]}: </h3>
      <select onChange={this.handleSelect} disabled={isDisabled.disabled} value={language}>
        <option value="en">English</option>
        <option value="es">Español</option>
        <option value="fr">Français</option>
        <option value="pt">Português</option>
      </select>
    </div>)
  }
}

export default LanguageSelect;
