import React, { Component } from 'react'

import { BrowserRouter, Link, Route } from 'react-router-dom';

import '../src/css/app.css'
import Me from './page/Me.js'
import Home from './page/Home.js'
import Film from './page/Film.js'
import Movie from './page/Movie.js'
import Shopping from './page/Shopping.js'
import Clip from './page/Clip.js'
import Address from './page/Address.js'
import Details from './page/Details'
import Reserve from './page/Reserve'
import RowPiece from './page/RowPiece'
import ShoppingCar from './page/ShoppingCar'

import HeaderCom from './views/common/AppHeader.js';
import LeftNav from './views/common/LeftNav.js';



export default class App extends Component {
    constructor(){
        super();

        this.state={
            isLeftNav:false,
            headTitle:"卖座电影"
        }
    }
    render() {
        console.log(12)
        return ( 
            <BrowserRouter>
                <div id="mai_zuo">
                    <HeaderCom menuHandle={this.menuHandle.bind(this)} headTitle={this.state.headTitle}/>
                    <Route path='/' render={({history,location})=>{
                        return <LeftNav show={this.state.isLeftNav} 
                                setShow={this.menuHandle.bind(this)}
                                history={history}
                                location={location}
                                setTitle={this.setTitle.bind(this)}

                                />
                    }}/>
                    <Route path='/' exact={true} component={Home} />
                    <Route path='/film' component={Film} />
                    <Route path='/movie' component={Movie} />
                    <Route path='/shopping' component={Shopping} />
                    <Route path='/me' component={Me} />
                    <Route path='/clip' component={Clip} /> 
                    <Route path='/address' component={Address} />
                    <Route path='/details/:id' component={Details} /> 
                    <Route path='/reserve/:id' component={Reserve}  />    
                    <Route path="/rowpiece/:id" component={RowPiece}/>    
                    <Route path='/shopcar/:id/:name/:address' component={ShoppingCar}/>     
                </div>
            </BrowserRouter>
        )
    };

    menuHandle(){
        
        this.setState({isLeftNav:!this.state.isLeftNav});
    };
    setTitle(val){
        this.setState({headTitle:val});
    }

}