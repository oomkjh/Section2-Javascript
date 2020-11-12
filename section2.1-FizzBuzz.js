console.log('FizzBuzz')
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz')
    }
    else if (i % 3 == 0) {
        console.log(`${i} / ${i} = Fizz`)
    }
    else if (i % 5 == 0) {
        console.log(`${i} / ${i} = Buzz`)
    }
    else {
        console.log(i)
    }
}