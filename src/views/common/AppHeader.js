import React, { Component } from 'react'

import {Link} from 'react-router-dom'
import '../../css/header.css'

export default class Header extends Component {
    
    render() {
        return (
            <div class="header">
                <div class="menu" onClick={this.goLeftNav.bind(this)}>
                    <span class="iconfont icon-caidan"></span>
                    <span class='text'>{this.props.headTitle}</span>
                </div>
                <div class="head_right">
                    <Link to='/address' class="iconfont icon-shangxiajiantou">深圳</Link>
                    <Link to='/me' class="iconfont icon-ren"></Link>
                </div>
            </div>
            
        )
    }

    goLeftNav(){
        this.props.menuHandle();
    }


}