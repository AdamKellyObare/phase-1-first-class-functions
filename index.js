function receivesAFunction(callBack){
    callBack();

}
callBack();

let namedFunction = 10;
function returnsANamedFunction(){
    return ++namedFunction;

}
console.log(returnsANamedFunction());





function myName();
function returnsAnAnonymousFunction(){
    return myName();

}
myName();








