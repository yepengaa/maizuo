
import axios from 'axios';
import API from '../api/Api'

function getHomeBanner(){
    return new Promise((resolve,reject)=>{
        axios.get(`${API.homeBannerApi}?__t=${new Date().getTime()}`)
        .then((response)=>{
            resolve(response.data.data.billboards);
        })
        .catch((error)=>{
            console.log(error)
        })

    })

}
//请求首页热映数据
function getHomeHot(){
    return new Promise((resolve,reject)=>{
        axios.get(`${API.homeHot}&__t=${new Date().getTime()}`)
        .then((response)=>{
            // console.log(response)
            resolve(response.data.data.films)
        })
        .catch((error)=>{
            console.log(error)
        })
    })
}

//请求首页即将上映
function getBeAboutTo(){
    return new Promise((resolve,reject)=>{
        axios.get(`${API.beAboutTo}&__t=${new Date().getTime()}`)
        .then((response)=>{
            resolve(response.data.data.films)
        })
        .catch((error)=>{
            console.log(error)
        })
    })
}

//请求影片详情数据
function setDetails(id){
    return new Promise((resolve,reject)=>{
        axios.get(`${API.detailsApi}${id}?__t=${new Date().getTime()}`)
        .then((response)=>{
            // console.log(response)
            let newDAta = {}
            let obj=response.data.data.film;
            newDAta.actors=obj.actors;
            newDAta.category=obj.category;
            newDAta.director=obj.director;
            newDAta.grade=obj.grade;
            newDAta.id=obj.id;
            newDAta.name=obj.name;
            newDAta.nation=obj.nation;
            newDAta.language=obj.language;
            newDAta.coverImg=obj.cover.origin;
            let d = new Date(obj.premiereAt);
            let month=d.getMonth()+1;
            let day = d.getDate();
            let time = month+'月'+day+'日上映';
            newDAta.premiereAt=time;
            newDAta.synopsis=obj.synopsis;
            resolve(newDAta);
        })
        .catch((error)=>{
            console.log(error)
        })
    })
}
//请求影片数据
function getFilmHot(page){
    return new Promise((resolve,reject)=>{
        axios.get(`${API.filmApi}&page=${page}`)
        .then((response)=>{
            console.log(response)
            
            let newDAta=response.data.data.films.map((item)=>{
                var newObj = {}
                newObj.grade=item.grade;
                newObj.id=item.id;
                newObj.cinemaCount=item.cinemaCount;
                newObj.watchCount=item.watchCount;
                newObj.name=item.name;
                newObj.coverImg=item.poster.origin;
                newObj.intro=item.intro;
                return newObj
            })
            
            resolve(newDAta);
        })
        .catch((error)=>{
            console.log(error)
        })
    })
}
//请求即将上映影片数据
function getComingSoon(page){
    return new Promise((resolve,rejscet)=>{
        axios.get(`${API.comingSoonApi}&page=${page}`)
        .then((response)=>{
            console.log(response)
            let newData=response.data.data.films.map((item)=>{
                let newObj = {};
                newObj.id=item.id;
                newObj.name=item.name;
                newObj.intro=item.intro;
                newObj.coverImg=item.poster.origin;
                let d = new Date(item.premiereAt);
                let month=d.getMonth()+1;
                let day = d.getDate();
                let time = month+'月'+day+'日上映';
                let weekDay = '星期'+d.getDay();
                newObj.premiereAt=time;
                newObj.weekDay = weekDay;
                return newObj;
            })
            resolve(newData)
        })
        .catch((error)=>{
            console.log(error)
        })
    })
}












export default {
    getHomeBanner,
    getHomeHot,
    getBeAboutTo,
    setDetails,
    getFilmHot,
    getComingSoon
}



