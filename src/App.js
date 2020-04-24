import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.scss';
import Homepage from "./pages/Homepage/Homepage"
import Equipment from "./pages/Equipment/Equipment";

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Switch>
                  <Route path = { '/' } exact component={Homepage}/>
                  <Route path = { '/equipment' } component={Equipment}/> 
              </Switch>
          </div>
      </BrowserRouter>
  );
}

export default App;
