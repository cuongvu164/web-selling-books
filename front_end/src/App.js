import './App.css';
// import Component from './components'
import Navbar from './components/Navbar/Navbar'
import Slider from './components/Slider/Slider'
import Footer from './components/Footer/Footer'
import { routers } from './routers'

import {
  BrowserRouter,
  Switch,
  Route,
  Link,
} from "react-router-dom";


import store from './redux/store'
import { Provider } from 'react-redux'
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Slider />
        <Switch>
          {
            routers.map((item, index) => {
              const { Component } = item;
              return (
                <Route exact={item.exact} path={item.path} keys={index}>
                  <Component />
                </Route>
              )
            })
          }
        </Switch>
        <Footer />
      </BrowserRouter>
    </Provider>

  );
}

export default App;
