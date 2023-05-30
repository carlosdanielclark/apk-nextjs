'use client'
import { useState } from 'react';
import GetCurrencyRate from '../../service/get_currency_rate';
import { useForm } from '../hooks/useForm';

import style from "../styles/form.module.css";

const change_base = [ "EUR" ];
const change_rate = [  
"AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", 
"BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BRL", "BSD", "BTC", 
"BTN", "BWP", "BYN", "BYR", "BZD", "CAD", "CDF", "CHF", "CLF", "CLP", "CNY", 
"COP", "CRC", "CUC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", 
"ERN", "ETB", "EUR", "FJD", "FKP", "GBP", "GEL", "GGP", "GHS", "GIP", "GMD", 
"GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "IMP", 
"INR", "IQD", "IRR", "ISK", "JEP", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", 
"KMF", "KPW", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", 
"LTL", "LVL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRO", 
"MUR", "MVR", "MWK", "MXN", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", 
"NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", 
"RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLE", 
"SLL", "SOS", "SRD", "STD", "SVC", "SYP", "SZL", "THB", "TJS", "TMT", "TND", 
"TOP", "TRY", "TTD", "TWD", "TZS", "UAH", "UGX", "USD", "UYU", "UZS", "VEF",  
"VES", "VND", "VUV", "WST", "XAF", "XAG", "XAU", "XCD", "XDR", "XOF", 
"XPF", "YER", "ZAR", "ZMK", "ZMW", "ZWL"
];

const Form = () => {
    const [ selectBase, setSelectBase ] = useState('Select Base');
    const [ selectRate, setSelectRate ] = useState('Select Rate');
    const [ result, setResult ] = useState(0);

    const [ values, handleInputChange ] = useForm({
      base: 1,
    });
    
    const { base } = values;

    const handleBase = (e)=>{
        e.preventDefault;
        const data_base = e.target.innerHTML;
        setSelectBase(data_base);
    }

    const handleRate = async (e) => {
        e.preventDefault;
        const data_rate = e.target.innerHTML;
        setSelectRate(data_rate);
        const currencyValue = await GetCurrencyRate(data_rate);
        setResult(base * currencyValue.rates[`${data_rate}`]);
        
    }

    return (
       <div>
            { (selectBase!='EUR' || base == 0)
                ? <h3 className='c-red mb-8'> Drag the arrow to dropdown buttons and insert amount</h3>
                : <></>
            }
            <div className={style.Container}>
                <h2>From</h2>
                <div className={style.Content}>
                    
                    <div class={ style.dropdown }>
                        <span> { selectBase } </span>
                        <div class={ style.dropdown_content }>
                            {
                                change_base.map( (c_base)=>{
                                    return <p onClick={ handleBase }>{c_base}</p>
                                } )     
                            }
                        </div>
                    </div>

                    <input 
                    className={style.Input}                 
                    type="number" 
                    name='base'
                    placeholder="Amount"
                    value={ base }
                    onChange={handleInputChange} 
                    />
                </div>
                <h2> to </h2>
                <div className={ style.Content }>

                    <div class={ style.dropdown }>
                        <span> { selectRate } </span>
                        <div class={ style.dropdown_content }>
                            {
                                change_rate.map( (c_rate)=>{
                                    return <p onClick={ handleRate }>{c_rate}</p>
                                } )     
                            }
                        </div>
                    </div>

                    <h4 className="ml-8 xl-text"> { result } </h4>
                </div>
                
                
            </div>
        </div>
       
    )
}

export default Form

