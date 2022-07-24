const intitalState=0;
const stepCount=(curr=intitalState,action)=>{
    switch(action.type){
        case "ADD":
            return curr+1;
        case "RESET":
            return 0;
        default:
            return curr;
    }
}
export default stepCount;