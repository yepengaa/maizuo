import React, { Component } from 'react'

import store from '../../store'
import {Link} from 'react-router-dom'
import '../../css/header.css'

let unsubscribe;
export default class Header extends Component {
    constructor(){
        super();
        this.state={
            city:store.getState().cityName
        }
    }
    
    render() {
        return (
            <div class="header">
                <div class="menu" onClick={this.goLeftNav.bind(this)}>
                    <span class="iconfont icon-caidan"></span>
                    <span class='text'>{this.props.headTitle}</span>
                </div>
                <div class="head_right">
                    <Link to='/address' class="iconfont icon-shangxiajiantou">{this.state.city}</Link>
                    <Link to='/me' class="iconfont icon-ren"></Link>
                </div>
            </div>
            
        )
    }

    goLeftNav(){
        this.props.menuHandle();
    }
    componentWillMount(){
        unsubscribe = store.subscribe(()=>{
			console.log('one 触发了1');
			this.setState({city: store.getState().cityName});
		});
    }
    componentWillUnmount(){
        unsubscribe()
    }

}