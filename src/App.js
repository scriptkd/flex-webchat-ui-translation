import React from 'react';
import * as FlexWebChat from "@twilio/flex-webchat-ui";
import TranslatedMessageBody from './TranslatedMessagebody';
import TranslateChatButton from './TranslateChatButton';
import TranslateChatWindow from './TranslateChatWindow';
import TranslateMessageList from './TranslateMessageList';
import TranslateThankYou from './TranslateThankYou';
FlexWebChat.MessagingCanvas.defaultProps.predefinedMessage = false;

// set URL equal to the URL for your translator's endpoint
const  URL  = 'MY_TRANSLATOR_API_ENDPOINT'
const parser = ' TRANSLATEDFROM ';
let notYetTranslated = true;
FlexWebChat.Actions.addListener("beforeSendMessage", async(payload, abortFunction) => {
  // declare local bindings
  let { body } = payload;
  const { channelSid } = payload;
  const language = payload.channel?.source?.attributes?.pre_engagement_data?.language || 'en';
  const messages = payload.channel?.messages || [];
  const lastMessage = messages[messages?.length - 1]?.source?.body || ''; 
  const requiresTranslation = (language !== 'en' && !messages.length) || lastMessage.includes(parser);

  // translate message
  if (requiresTranslation && notYetTranslated) {
    console.log('time to translate');
    abortFunction();
    const translate = await fetch(`${URL}?text=${encodeURIComponent(body)}&to=en&from=${language}`, { method: 'GET'} );
    const translatedMessage = await translate.json();
    notYetTranslated = false;
    FlexWebChat.Actions.invokeAction("SendMessage", { channelSid, body: translatedMessage + parser + body });
    notYetTranslated = true;
  }

});

  // replace message bodies
  FlexWebChat.MessageBubble.Content.remove("body", {if: (props) => props.message?.source?.body?.includes('TRANSLATEDFROM')});
  FlexWebChat.MessageBubble.Content.add(<TranslatedMessageBody key="translatedBody"  />, {
      if: (props) => props.message?.source?.body?.includes('TRANSLATEDFROM') });

  // localize strings
  FlexWebChat.EntryPoint.Content.add(<TranslateChatButton key="entrytext" language={localStorage.twilioFlexWebChatLanguage} />, {
    if: () => localStorage.twilioFlexWebChatLanguage !== 'en' });

  FlexWebChat.MainContainer.Content.add(<TranslateChatWindow key="transchatwindow" language={localStorage.twilioFlexWebChatLanguage} />, {
    if: () => localStorage.twilioFlexWebChatLanguage !== 'en' }); 
    
  FlexWebChat.MessageList.Content.add(<TranslateMessageList key="transmessagelist" language={localStorage.twilioFlexWebChatLanguage} />, {
    if: () => localStorage.twilioFlexWebChatLanguage !== 'en' });   
    
  FlexWebChat.MessageCanvasTray.Content.add(<TranslateThankYou key="transthankyou" language={localStorage.twilioFlexWebChatLanguage} />, {
    if: () => localStorage.twilioFlexWebChatLanguage !== 'en' });   




class App extends React.Component {

  state = {};

  constructor(props) {
    super(props);

    const { configuration } = props;
    FlexWebChat.Manager.create(configuration)
      .then(manager => this.setState({ manager }))
      .catch(error => this.setState({ error }));
  }
  
  componentDidMount() {
    console.log('App is mounted');
    console.log('App props: ', this.props);

    const { customerLanguage } = this.props.language;
    console.log('this is the language: ', customerLanguage);
  }

  render() {
    const { manager, error } = this.state;
    if (manager) {
      return (
        <FlexWebChat.ContextProvider manager={manager}>
          <FlexWebChat.RootContainer />
        </FlexWebChat.ContextProvider>
      );
    }

    if (error) {
      console.error("Failed to initialize Flex Web Chat", error);
    }

    return null;
  }
}

export default App;
