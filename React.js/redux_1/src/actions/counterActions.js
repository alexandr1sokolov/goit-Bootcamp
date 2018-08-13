export const increase =(number)=>({type: 'INCREASE', payload: number});
export const decrease =(number)=>({type: 'DECREASE', payload: number});
export const reset =()=>({type: 'RESET'});

export const incAsync =(number)=> dispatch=>{
    setTimeout(()=>{
        dispatch(increase(number));
    }, 2000)
};

export const decAsync =(number)=> dispatch=>{
    setTimeout(()=>{
        dispatch(decrease(number))
    }, 2000)
};

