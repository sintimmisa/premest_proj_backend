/**
 * Function to setLocal storage to key:value pair
 * @param {*} key 
 * @param {*} value 
 * to change value into obj use JSON.tringify
 */


exports.setLocalStorage=(key,value)=>{
    localStorage.setItem(key,JSON.stringify(value));
}


exports.getLocalStorage=(key)=>{
    return JSON.parse(localStorage.getItem(key));
}

exports.deleteLocalStorage=(key)=>{
    localStorage.removeItem(key);
}