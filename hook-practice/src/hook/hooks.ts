import React, { SetStateAction, useState } from "react";

export const useCounter = ():[number, React.Dispatch<SetStateAction<number>>, ()=>void, ()=>void] => {
    const [count, setCount] = useState(0);

    const incrementCount = ():void => setCount(count => count + 1);
    const decrementCount = ():void => setCount(count => count - 1);

    return [count, setCount, incrementCount, decrementCount];
}