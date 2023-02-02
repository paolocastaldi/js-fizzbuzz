const fizzbuzzEl = document.getElementById("fizzbuzz")

for (let i = 1; i <= 100; i++){

    let liNum

    if (i % 15 == 0){
        console.log("FizzBuzz");
        liNum = `<li class="box">FizzBuzz</li>`;

    } else if (i % 5 == 0){
        console.log("Buzz");
        liNum = `<li class="box">Buzz</li>`;

    } else if (i % 3 == 0) {
        console.log("Fizz");
        liNum = `<li class="box">Fizz</li>`;

    } else {
        console.log(i);
        liNum = `<li class="box">${i}</li>`;
    }

    fizzbuzzEl.innerHTML += liNum
    
}