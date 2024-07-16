const listNumber = [22,33,44,55,66,77,88,99,11]

export const randomNumberReducer = (state = 0, action: {
    type: string
}) => {
   switch(action.type) {
       case "GET_RANDOM" :
           const randomIndex = Math.floor(Math.random() * listNumber.length);
           return listNumber[randomIndex]
    default:
        return state;
   }
}