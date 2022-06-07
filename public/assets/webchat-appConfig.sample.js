var LANGUAGE_NAME = {
    en: "English",
    fr: "Français",
    es: "Español",
    pt: "Português"
  };

var appConfig = {
    //  change to your AccountSid
    accountSid: "MY_ACCOUNT_SID",
    // change to your Flex Flow SID
    flexFlowSid: "MY_FLEX_FLOW_SID",
    colorTheme: {
    },
    markdownSupport: true,
    context: {
        friendlyName: LANGUAGE_NAME[localStorage.twilioFlexWebChatLanguage] || "English",
        language: localStorage.twilioFlexWebChatLanguage || "en"
    },
}
