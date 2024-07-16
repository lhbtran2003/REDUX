interface IUser {
  id: number;
  name: string;
  sex: boolean;
}

const initialState = [
    {id: 1, name: "trân", sex: false},
    {id: 1, name: "trân", sex: false},
    {id: 1, name: "trân", sex: false}
]


export const arrayUserReducer = (state = initialState, action: {
    type: string,
} ) => {
   switch(action.type) {
    default:
        return state;
   }
}