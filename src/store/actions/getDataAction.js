import {database} from '../../fbConfig/fbConfig';

export const getDataByCategory = (category) => {
    let obj = JSON.parse(sessionStorage.getItem(category));
    if(obj){
        console.log('from session');            
        return(dispatch) =>{
            let data = [];
            for(let key in obj){
                data.push({id: key, data: obj[key]});
            }
            try{
                dispatch({ type: 'GET_DATA', data: data});
            }
            catch(err){
                dispatch({type: "GET_DATA_ERR", err})
            }
        }
    }else{
        console.log('get call');  
        return(dispatch) =>{
            let data = [];
            let obj = {};
            database.collection("Images").get().then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    if(doc.data().category===category){
                        data.push({id:doc.id,data:doc.data()});
                            if(!obj[doc.id]){
                                obj[doc.id] = doc.data();
                            }
                    } 
                });
                obj = JSON.stringify(obj);
                sessionStorage.setItem(category, obj);
            })
            .then(() =>{
                dispatch({ type: 'GET_DATA', data: data});
            }).catch((err) => {
                dispatch({type: "GET_DATA_ERR", err})
            })
        }
    }
}

export const getDataById = (id,category) => {
        let key = JSON.parse(sessionStorage.getItem(category));
        if(key[id]){
            console.log('from session');            
            return(dispatch) =>{
                let data = key[id];
                try{
                    dispatch({ type: 'GET_DATA_BY_ID', data: data});
                }
                catch(err){
                    dispatch({type: "GET_DATA_BY_ID_ERR", err})
                }
            }
        }else{
            console.log('get call');
            return(dispatch) =>{
                let data = [];
                database.collection("Images").get().then(function(querySnapshot) {
                    querySnapshot.forEach(function(doc) {
                        // doc.data() is never undefined for query doc snapshots
                        if(doc.id===id){
                            data.push({id:doc.id,data:doc.data()})
                            // console.log(doc.id, " => ", doc.data());
                        }
                    });
                })
                .then(() =>{
                    dispatch({ type: 'GET_DATA_BY_ID', data: data});
                }).catch((err) => {
                    dispatch({type: "GET_DATA_BY_ID_ERR", err})
                })
            }
        }
}
