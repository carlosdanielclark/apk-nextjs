const GetCurrencyRate = ( rate ) => {
    return fetch(
    `http://api.exchangeratesapi.io/v1/latest?access_key=f9250b028e2721d128d762fb95e4bb11&base=EUR&symbols=${rate}`
    ).then(res => res.json());
}

export default GetCurrencyRate;

// http://api.exchangeratesapi.io/v1/latest?access_key=f9250b028e2721d128d762fb95e4bb11&base=EUR&symbols=USD
