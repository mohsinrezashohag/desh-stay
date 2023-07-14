// closure
const myBuisness = (capital) => {
    return function (interest) {
        return capital * interest
    }
}
const buisness = myBuisness(25000)
const result = buisness(5)
console.log(result);