import React, {Component} from 'react';
import Restaurants from '../restaurants';
import style from './app.module.css'
import Header from "../header";


export default class App extends Component {

  render() {

      return(
          <div className={style.appWrapper}>
              <Header />
              <Restaurants restaurants={this.props.restaurants}/>
          </div>

      )
  }
}