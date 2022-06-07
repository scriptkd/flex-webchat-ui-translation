import React from 'react';
import LanguageSelect from './LanguageSelect';
import App from './App';
const disableDropdown = { disabled: false };
const language = { customerLanguage: 'en' };

class ParentComponent extends React.Component {

  state = {};

  render() {

    return(<div>
      <LanguageSelect isDisabled={disableDropdown} language={language} />
      <App configuration={window.appConfig} isDisabled={disableDropdown} language={language} />
    </div>)
  }
}

export default ParentComponent;