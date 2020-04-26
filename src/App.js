import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.scss';
import Homepage from "./pages/Homepage/Homepage"
import Equipment from "./pages/Equipment/Equipment.js"
import Services from "./pages/Services/Services.js"
import Contacts from "./pages/Contacts/Contacts ";

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Switch>
                  <Route path = { '/' } exact component={Homepage}/>
                  <Route path = { '/equipment' } component={Equipment}/>
                  <Route path = { '/services' } component={Services}/>
                  <Route path = { '/contacts' } component={Contacts}/>
              </Switch>
          </div>
      </BrowserRouter>
  );
}

export default App;
