// code your solution here
function superbowlWin(record) {
    const yearOfWin = record.find((element) => element.result === "W") 
            if (yearOfWin){
                return yearOfWin.year
            }
            // else {
            //     return undefined
            // }
        }
    
        
// if the callback function returns a truthy value, we want to return yearOfWin.year
// if the callback function returns undefined, we want to simply return undefined

// right now i can get one test passing or the other, but not both


