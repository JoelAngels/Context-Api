import React, { createContext, useState } from "react";

export const LanguageContext = createContext();

export function LanguageProvider(props) {
  const [language, setLanguage] = useState("english");
  const changeLanguage = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {props.children}
    </LanguageContext.Provider>
  );
}

//here we created  higher Component which takes a different component as an argument and some props and return the same component with all original props and injects in a a new prop coming from language context
export const withLanguageContext = (Component) => (props) => (
  <LanguageContext.Consumer>
    {(value) => <Component languageContext={value} {...props} />}
  </LanguageContext.Consumer>
);

//first one is the piece of state second one is the function to change the piece of state
