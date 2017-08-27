
import {createStore} from 'redux'

function reducer(state,action){
    switch(action.type){
        case "DATACHANGE":
        state.cityName=action.cityName;
        return state
        default:
        return {
            cityName:'深圳'
        }
    }

}





export default createStore(reducer)


