import React,{Component} from 'react';
import '../css/details.css';
import HomeServices from '../services/Homeservices';

export default class Details extends Component{
constructor({match}){
        super();
        this.state={
            match,
            filmData:{}
        }
    }
    render(){
        let film = this.state.filmData
        console.log(film)
        return (
            <div class="details">
                <h1><img src={film.coverImg} /></h1>
                <div class="details_main">
                    <h2>影片简介</h2>
                    <div class="director"><span>导　　演: </span><span>{film.director}</span></div>
                    <div><span>主　　演: </span></div>
                    <div class="nation"><span>地区语言: </span>{film.nation}({film.language})</div>
                    <div class="category"><span>类　　型: </span><span>{film.category}</span></div>
                    <div class="premiereAt"><span>上映日期: </span><span>{film.premiereAt}</span></div>
                    <div class="synopsis">{film.synopsis}</div>
                    <div class="btn"><button>立即购买</button></div>
                </div>
            </div>
        )
    }
    componentWillMount(){
        let id = this.state.match.params.id;
        HomeServices.setDetails(id)
        .then((data)=>{
            console.log(data)
            this.setState({filmData:data});
        })
    }



}



