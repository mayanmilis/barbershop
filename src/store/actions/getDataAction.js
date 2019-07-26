import {database} from '../../fbConfig/fbConfig';

export const getData = (category) => {
    return(dispatch) =>{
        let data = [];
        console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
        database.collection("Images").get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                // if(doc.data().category===category){
                    data.push({id:doc.id,data:doc.data()})
                    // console.log(doc.id, " => ", doc.data());
                // }
            });
        })
        .then(() =>{
            dispatch({ type: 'GET_DATA', data: data});
        }).catch((err) => {
            dispatch({type: "GET_DATA_ERR", err})
        })
    }
}
