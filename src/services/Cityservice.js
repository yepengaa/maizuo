
import Axios from 'axios'
import API from '../api/Api'

function getCity(){
    return new Promise((resolve,reject)=>{
        Axios.get(`${API.addressApi}?__t=${new Date().getTime()}`)
        .then((response)=>{
            console.log(response)
            if(response.data.status==0){
                let data=response.data.data.cities;
                let arr=[];
                for(let i=0;i<data.length;i++){
                    if(arr.indexOf(data[i].pinyin.charAt(0))==-1){
                        arr.push(data[i].pinyin.charAt(0))
                    }
                    
                }
                let newArr=arr.sort()
                let newData = [];
                for(let d=0;d<newArr.length;d++){
                    var obj = {}
                    var city = []
                    obj.name=newArr[d]
                    obj.city = city;
                    newData.push(obj)
                }
                console.log(newData);
                for(let j=0;j<data.length;j++){
                    for(let c=0;c<newData.length;c++){
                        if(data[j].pinyin.charAt(0)==newData[c].name){
                            newData[c].city.push(data[j].name)
                        }
                    }
                }
                console.log(newData);
                resolve(newData);
            }else{

            }
        })
        .catch((error)=>{
            console.log(error)
        })
    })
}




export default {
    getCity
}





