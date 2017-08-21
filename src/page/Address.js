import React , {Component}from 'react'

import '../css/address.css'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Address extends Component{
    constructor(history){
        super();
        this.state={
            className:'',
            history
        }
    }

    render(){
        return(
            <ReactCSSTransitionGroup
            transitionName="city"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeave={false}
            >
                <div class={"page address "+this.state.className}>
                    <ul>
                        <li onClick={this.selectAction.bind(this)}>郑州</li>
                    </ul>
                </div>
            </ReactCSSTransitionGroup>
        )
    }

    selectAction(){
        console.log(this)
        this.setState({className:'leave'});       
        setTimeout(()=>{
            console.log(this.className);
        },50)
    }


    componentDidupdate(){
        console.log(this.className);
    }


}