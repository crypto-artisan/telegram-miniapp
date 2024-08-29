import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useTelegram } from './hooks/useTelegram';

function App() {
  const { user } = useTelegram();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {
          user ? (
            <section>
              <h4>User Name:<span>{user?.username || 'N/A'}</span></h4>
              <h4>First Name:<span>{user?.first_name || 'N/A'}</span></h4>
              <h4>Last Name:<span>{user?.last_name || 'N/A'}</span></h4>
              <h4>Chat Id:<span>{user?.id || 'N/A'}</span></h4>
            </section>
          ) : (
            <p>This app is only available via a telegram.</p>
          )
        }
      </header>
    </div>
  );
}

export default App;
