// import greeter from './Greeter.js'
// document.querySelector("#root").appendChild(greeter());
import React from 'react'
import {render} from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import {
    Router,
    Route,
    Switch,
} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import Greeter from './Greeter'
import TestRouter from './components/TestRouter'

import './main.css'

if (module.hot) {
    module.hot.accept(() => {
      ReactDom.render(
          <AppContainer>
              <Router history={history}>
                <div>
                    <Switch>
                        <Route exact path="/" component={Greeter}/>
                        <Route path="/testrouter" component={TestRouter}/>
                    </Switch>
                </div>
            </Router>
          </AppContainer>,
          document.getElementById('root')
      )
    })
  }
const history = createBrowserHistory()
render(
    <AppContainer>
        <Router history={history}>
            <div>
                <Switch>
                    <Route exact path="/" component={Greeter}/>
                    <Route path="/testrouter" component={TestRouter}/>
                </Switch>
            </div>
        </Router>
    </AppContainer>, 
    document.getElementById('root')
);