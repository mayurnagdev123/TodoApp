export const loadState = () =>{
    try{
        const localState=localStorage.getItem('state');
        if(localState == null)
        {
            console.log("[localizedStorage]","localStorage has null state")
        return undefined;
        }
        console.log("[localizedStorage]","localStorage has state",localState)
        return JSON.parse(localState);
    }
    catch(err){
        return undefined;
    }
}

export const saveState = (state) =>{
try{
    const serializedState=JSON.stringify(state);
localStorage.setItem('state',serializedState);
console.log("[localizedStorage]","successfully stored state to localStorage")
}
catch(err)
{
    console.log("[localizedStorage]","error occured while storing state to localStorage")
}
}