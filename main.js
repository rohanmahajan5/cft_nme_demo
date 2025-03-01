//console.log("Hello");

let name = "Eddie"

var name1 = "Eddie1"

//console.log(name)

const name2 = "Michael"

//console.log(name2

let nums = [1,2,3,4,5]
let found = false
for(let i = 0; i < nums.length; i++) {
    if (nums[i] == 6) {
        found = true
        console.log("we have found 6 at index " + i)
        break
    }
}
if (!found) {
    //console.log("We didn't have a 6")
}

function score(points, name) {
    return name + "scored " + points + " today."
}

//console.log(score(56,"Curry"))


