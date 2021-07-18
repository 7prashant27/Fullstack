import React from "react";

export const AppContext = React.createContext();

class AppContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "light"
    };
  }

  toggleTheme = () => {
    const { theme } = this.state;
    this.setState({
      theme: theme === "light" ? "Dark" : "light"
    });
  };

  render() {
    let { theme } = this.state;
    let { toggleTheme } = this;
    return (
      <AppContext.Provider value={{ theme, toggleTheme }}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppContextProvider;
