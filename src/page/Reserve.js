import React,{Component} from 'react'
import '../css/reserve.css'
import Movieservice from '../services/Movieservice'

export default class Reserve extends Component{
    constructor({match}){
        super();
        this.state={
            match,
            reserveData:{}
        }
    }

    render(){
        return (
            <div id="reserve" class="page">
                <img src="../../static/img/img02.png"/>
                <div>
                    <ul>
                        <li>
                            <div><i></i></div>
                            <div></div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
    componentWillMount(){
        let id = this.state.match.params.id
        Movieservice.getReserve(id)
        .then((data)=>{
            this.setState({reserveData:data});
        })
    }


}


