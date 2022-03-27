// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push(name)
}
function destructivelyPrependCat(name1){
    cats.unshift(name1)
}
function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}
function appendCat(name4){
const newArray = [...cats, name4]
return newArray
}
function prependCat(name5){
    const newArray1 = [name5, ...cats]
    return newArray1
}
function removeLastCat(){
    let newArray2 = cats.slice(0,-1)
    return newArray2
}
function removeFirstCat(){
    let newArray3 = cats.slice(1)
    return newArray3
}