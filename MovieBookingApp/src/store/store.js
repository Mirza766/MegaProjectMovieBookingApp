import {configureStore} from '@reduxjs/toolkit'
import rootReducer from '../rootReducer/rootReducer'
import { saveState } from './LocalStoragePersisitence/SaveState'
import { loadState } from './LocalStoragePersisitence/LoadState'


const store=configureStore({reducer:rootReducer,
    preloadedState:loadState()
})


store.subscribe(()=>{
    saveState(store.getState());
})
export default store