import axios from 'axios';

const initialState = {
    imageCollection:[],
    hasMore:true,
    loading:true
}

export default function imagesListReducer(state = initialState, action){
    switch (action.type){
        case 'GetImageList': {
            var setHasMore;
            if(action.payload !== undefined){
                setHasMore = action.payload.length !== 0 ? true : false
            } else {
                setHasMore = false
            }
            return {
                ...state,
                hasMore:setHasMore,
                imageCollection :
                    state.hasMore !== true ? state.imageCollection : 
                    state.imageCollection.concat(action.payload)
            }
        }
        default :
            return state
    }
}

export function GetImageList(page){
    return async function getImagesForCardsThunk(dispatch){
        const params = { page:page, results:30}
        const res = await axios.get(
            'https://api.unsplash.com/photos/random?client_id=KoFPQF-WKwwxEVgYOK9teoRrE4b7--AgVLA4H5sba5k&count=30', 
            {params:params});
        if(res){
            dispatch({type:'GetImageList',payload:res.data})
            console.log(res);
        }
    }
}