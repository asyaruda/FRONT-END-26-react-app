import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'



function App() {
  return (
    <div>
      <header>
        <h3>Home</h3>
        <h3>About</h3>
        <h3>Careers</h3>
        <h3>Contacts</h3>
      </header>

      <div className="main-container">

        <nav className="left-nav">
          <h3>Startups</h3>
          <h3>Retails</h3>
          <h3>Platforms</h3>
          <h3>Events</h3>
          <h3>News</h3>
        </nav>

        <main className="center-content">
          <h2>Lorem</h2>
          <p>Lorem</p>
        </main>

      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
);