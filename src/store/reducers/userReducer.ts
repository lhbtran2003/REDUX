interface IUser{
    id:number,
    name:string,
    sex:boolean
}

const initState = {
    id: 1,
    name: "Tran",
    sex: false
}
export const userReducer = (
    state: IUser = initState, action:{
        type: string, payload: IUser
    }
)=>{
    switch(action.type){
        default:
            return state;
    }
}

// export const sumTwoNumber = (number1 : number = 0, number2: number = 1 ){
//     return number1 + number2
// }