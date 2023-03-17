// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(Ralph){
    return cats.push(Ralph)
}
function destructivelyPrependCat(Joyce){
    return cats.unshift(Joyce)
}
function destructivelyRemoveLastCat(Ralph){
    return cats.pop(Ralph)
}
function  destructivelyRemoveFirstCat(Joyce){
    return cats.shift(Joyce)
}
function   appendCat(Winny){
    return [...cats,Winny];
}
function    prependCat(Broom){
    return [Broom,...cats];
}
function  removeLastCat(Garfield){
    return   cats.slice(0, -1);;
}
function   removeFirstCat(Milo){
     return cats.slice(1);;
}

