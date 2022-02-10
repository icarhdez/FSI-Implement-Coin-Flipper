// TODO: Declare any global variables we need
let headCount= 0
let tailCount= 0

//TODO: refactor to use functions

document.addEventListener('DOMContentLoaded', function () {
    // TODO: Add event listener and handler for flip and clear buttons
    document.querySelector('#flip').addEventListener('click',function(e){
        if (Math.random()> 0.5){
            console.log('heads')
            //update image
            let pennyFace = document.querySelector('#pennyFace')
            pennyFace.src = 'assets/images/penny-heads.jpg'
            pennyFace.alt = '2005 Penny, heads side'

            //Log outcome
            document.querySelector('#message').textContent= 'You flipped heads!'

            // update JS global vars
            headCount++

            // update Dom table
            document.querySelector('#heads').textContent= headCount
            document.querySelector('#heads-percent').textContent= Math.round(headCount/(headCount+tailCount)*100)+ '%'
            document.querySelector('#tails-percent').textContent= Math.round(tailsCount/(headCount+tailCount)*100)+ '%'

            //update head count and head percent
            //update tails percent

        } else {
            console.log('tails')
        }
    })

    document.querySelector('#clear').addEventListener('click',function(e){
        console.log(Math.random())
    })

})
   // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)