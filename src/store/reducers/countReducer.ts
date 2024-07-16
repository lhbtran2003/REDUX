

export const countReducer = (state: number =0, action:{
    type:string, payload: number
} )=>{
    switch(action.type){
        case "INCREAMENT":
            return state +1;
        case "DECREAMENT":
            return state - 1;
        case "INCREA_BY_NUMBER":
            return state + action.payload;    
        case "RESET":
            return 0;    
        default:
            return state    
    }
        
}