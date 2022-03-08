let btn1 = document.getElementById("generateBtn");
let btn2 = document.getElementById("rollBtn")

let sumDice = document.getElementById("sumDice");

const container = document.createElement('div');
container.className = "container";
document.body.appendChild(container);

let diceArr = [];

class Die {
    constructor() {
        // Create the die and append to the document
        this.div = document.createElement('div');
        this.div.className = "dieBox"
        this.roll();
        this.div.innerHTML = this.value;
        container.appendChild(this.div);

        console.log(this);

        //when the roll dice button is clicked changes all the values of each die in the document to another random number
        btn2.addEventListener('click', () => {
            console.log("clicked");
            diceArr.forEach(() => {
                this.roll();
                this.div.innerHTML = this.value;
            })
        })

        // when a die is clicked changes the value to another random value
        this.div.addEventListener('click', () => {
            this.roll();
            this.div.innerHTML = this.value;

        })
        // deletes the div that is double clicked from the html document and removes it from the array
        this.div.addEventListener('dblclick', () => {
            this.div.remove();
            let index = diceArr.indexOf(this);
            if (index !== -1) {
                diceArr.splice(index, 1);
            }
        })


    }

    // assigns a random value to each die
    roll() {
        this.value = Math.floor(Math.random() * 6) + 1;
    }


}

// adds a new die to the html document and stores each class die created into the empty array named diceArr
btn1.addEventListener('click', function () {
    diceArr.push(new Die);
    console.log(diceArr);
    console.log("clicked");
})

// add sums the values in the array
function sum(arr) {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i].value
    }
    return sum;
}

// passes diceArr into the sum function and alerts the reuslt
sumDice.addEventListener('click', () => {
    let result = sum(diceArr);
    alert(`The sum of the dice is ${result}.`);
})