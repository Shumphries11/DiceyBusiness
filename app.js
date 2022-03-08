let btn1 = document.getElementById("generateBtn");
let btn2 = document.getElementById("rollBtn")

let sumDice = document.getElementById("sumDice");

const container = document.createElement('div');
container.className = "container";
document.body.appendChild(container);

let diceArr = [];

class Die {
    constructor() {
        this.roll();
        this.div = document.createElement('div');
        this.div.className = "dieBox"
        this.div.innerHTML = this.value;
        container.appendChild(this.div);
        console.log(this);

        btn2.addEventListener('click', () => {
            console.log("clicked");
            diceArr.forEach(() => {
                this.roll();
                this.div.innerHTML = this.value;
            })
        })

        this.div.addEventListener('click', () => {
            this.roll();
            this.div.innerHTML = this.value;

        })

        this.div.addEventListener('dblclick', () => {
            this.div.remove();
            let index = diceArr.indexOf(this);
            if (index !== -1) {
                diceArr.splice(index, 1);
            }
        })


    }


    roll() {
        this.value = Math.floor(Math.random() * 6) + 1;
    }


}


btn1.addEventListener('click', function () {
    diceArr.push(new Die);
    console.log(diceArr);
    console.log("clicked");
})

function sum(arr) {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i].value
    }
    return sum;
}

sumDice.addEventListener('click', () => {
    let result = sum(diceArr);
    alert(result);
})