import {loadStripe} from '@stripe/stripe-js'

let stripePromise;

const getStripe = ()=>{
    if(!stripePromise){
        stripePromise = loadStripe('pk_test_51Lxs43CzD1Ch0v0JzFzL6vHam9xWDPkNvMUioHrcrjvdmNUORzwRJFv5EVF4eIcIoVudMvaR8If399qT3m2rUQLH00V2bgH04w')
    }

    return stripePromise
}

export default getStripe;