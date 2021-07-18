import React from "react";

export const AppContext = React.createContext();

class AppContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: false
    };
  }

  toggleAuth = () => {
    const { isAuth } = this.state;
    this.setState({
      isAuth: !isAuth
    });
  };

  render() {
    let { isAuth } = this.state;
    let { toggleAuth } = this;
    return (
      <AppContext.Provider value={{ isAuth, toggleAuth }}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppContextProvider;
