import {useAsyncStorage} from "./_hooks";
import {useState, useEffect} from "react";
import {useTabContext} from "../context/context";

const priceFormatted = (sum: number) => {
    const {selectedCurrency} = useTabContext();
    if(sum){
    return sum.toLocaleString('en-CA', {style: 'currency', currency: selectedCurrency?.code ?? 'CAD'})
    }else{
        return 0
    }

}

export {priceFormatted}