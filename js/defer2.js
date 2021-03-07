
function sleep(duration) {
    let start = Date.now();

    while (duration + start > Date.now()) {

    }
}
sleep(0)
console.log('defer2');