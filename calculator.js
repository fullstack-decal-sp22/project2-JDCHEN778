//Check out calculator_hints.js for hints if you're stuck
let total = 0;
let strbuffer = "0";
let operator = "";

/*  FUNC DESCRIPTION: Operator calculations. Create the in +, x, -, and ÷ operator calculations. The plus operator is done for you!
    Uncomment and fill in the blank spaces. */
function calculations() {
    const intBuffer = parseInt(strbuffer); // Hint: Use parseInt to convert string to integer
    if (operator === "+") {
        total += intBuffer;
    }
    //ADD THE OTHER OPERATORS
    else if (operator === "x") {
        total *= intBuffer;
    }
    else if (operator === "-") {
        total -= intBuffer;
    }
    else if (operator === "÷") {
        total /= intBuffer;
    }
}

/*   FUNC DESCRIPTION: If user input is a number, create the function. */
function makesNumber(value) {
    if (strbuffer === "0") {
        strbuffer = value;
    } else {
    /*  If strbuffer is not 0, meaning there is a previous number typed in already, what should we display on the screen?
    Hint: How do we concatenate strings? If you are stuck, imagine typing in a "5" into the calculator, making strbuffer into "5". 
    Then imagine typing "3" into the calculator. Now "3" is value and strbuffer is still at "5", so strbuffer will now be 53.  */
        strbuffer = strbuffer + value;
    }
}

/*  FUNC DESCRIPTION: If user input is not a number, create the function. Create the functionality for "C", "←", "=", and operators. */

function makesSymbol(symbol) {
    //make functionality for symbol C
    //make functionality for symbol ← Hint: .substring might be helpful! 
    //make functionality for symbol = Hint: use operator variable. Also call a function we created already!
    
    if (symbol === 'C') {
        total = 0;
        strbuffer = "0";
        operator = "";
        document.querySelector(".result-screen").innerHTML= strbuffer;
    } else if (symbol === "←") {
        if (strbuffer.length == 1) {
            strbuffer = "0";
        } else {
            strbuffer = strbuffer.substring(0, strbuffer.length-1)
        }
        document.querySelector(".result-screen").innerHTML= strbuffer;
    } else if (symbol === "=") {
        strbuffer = strbuffer.substring(1);
        calculations();
        strbuffer = String(total);
        document.querySelector(".result-screen").innerHTML= strbuffer;
    }

    else { //make functionality if symbol is an operator
    const intBuffer = parseInt(strbuffer);
    if (total === 0) {
        total = intBuffer;
    } else {
        total = intBuffer;
    }
        operator = symbol;
        strbuffer = symbol;
    }
}

/*  FUNC DESCRIPTION: Write the function to set listeners. This is how we will make the HTML interactive with the JS!
    This is where we sense when a user clicks a certain button and send this information to our buttonClicked function. */
function setListeners() {
//Hint: We want to select all buttons from html and make it so that something happens when you click on the buttons! querySelectorAll might be helpful
    let buttons = document.querySelectorAll('button'); 
    for (item of buttons) {
    //Hint: addEventListener might be useful.
    //Hint: event.target.innerText might be helpful. innerText return type is a string
        item.addEventListener('click',(event)=> {
            temp = event.target.innerText;
            buttonClicked(temp);
        })
    }
}

//Make sure to call setListeners!!!
setListeners();

/*  FUNC DESCRIPTION: Now we will write the function that takes care of when a button is clicked. */
function buttonClicked(valueClicked) {
    if (isNaN(parseInt(valueClicked))) { //NaN means "Not a Number"
        //Hint: call a function we just created!
        makesSymbol(valueClicked);
    } else {
        //Hint: call a function we just created!
        makesNumber(valueClicked);
    }
    document.querySelector(".result-screen").innerHTML = strbuffer;
// Hint: we need to change what number appears on the screen! to change html, one listener you could use is querySelector
}

