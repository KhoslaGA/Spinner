let delay = 200;
const animframe = ['|', '/', '-', '\\'];
const timeOut = delay * animframe.length;

const animloopId = setInterval(() => {
    for (let i = 0; i < animframe.length; i++) {
        setTimeout(() => {
            process.stdout.write(`\r ${animframe[i]}  `);

        }, delay * 1)
    }

}, timeOut);

setTimeout(() => {

    clearInterval(animloopId);
    process.stdout.write('\n');
}, 4000)