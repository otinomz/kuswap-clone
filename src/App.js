import React, {useState} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.scss';
import { LeftPane } from './components';
import Home from '../src/components/pages/Home'



const App = () => {
  const [isActive, setIsActive] = useState(true)
  
  function toggleActive() {
    setIsActive(!isActive)
  }

  return (
    <BrowserRouter>
      <div className="App">

        <LeftPane toggleActive={toggleActive} isActive={isActive} />

        <Switch>
          <div className={`container ${isActive ?  "": 'inactive'}`}>
            <Route path='/' exact> <Home/></Route>
            <Route path='/exchange'> Exchange </Route>
            <Route path='/liquidity'> Liquidity </Route>
            <Route path='/charts'> Charts </Route>
            <Route path='/farms'> Farms </Route>
            <Route path='/pools'> Pools </Route>
            <Route path='/trading'> Trading Battle </Route>
            <Route path='/launchpad'> Launchpad</Route>
            <Route path='/lottery'> Lottery</Route>
            <Route path='/ku'> Kudrops </Route>
            <Route path='/analytics'> Analytics </Route>
            <Route path='/governance'> Governance</Route>
            <Route path='/bridge'> Bridge </Route>
            <Route path='/more'> More</Route>
          </div>
        </Switch>

      </div>
    </BrowserRouter>
    
  );
}

export default App;
