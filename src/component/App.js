import React from 'react';
import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar';
export default class App extends React.Component {
  render() {
    return (
      <>
        <div>
          <Header />
          <div className="main">
            <Sidebar />
            <Main />
          </div>
        </div>
      </>
    );
  }
}
