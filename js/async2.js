
function sleep(duration) {
    let start = Date.now();

    while (duration + start > Date.now()) {

    }
}
sleep(2000)
console.log('async2');