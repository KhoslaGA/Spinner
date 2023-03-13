let x = 200;

for (let i = 0; i < 100; i++) {
    setTimeout(() => {
        process.stdout.write('\r|   ');
    }, x + (i * 1000));

    setTimeout(() => {
        process.stdout.write('\r /   ');
    }, 2 * x + (i * 1000));

    setTimeout(() => {
        process.stdout.write('\r -  ');
    }, 3 * x + (i * 1000));

    setTimeout(() => {
        // Need to escape the backslash since it's a special character.
        process.stdout.write('\r \   ');
    }, 4 * x + (i * 1000));

    setTimeout(() => {
        process.stdout.write('\r |   ');
    }, 5 * x + (i * 1000));

    setTimeout(() => {
        process.stdout.write('\r /   ');
    }, 6 * x + (i * 1000));

    setTimeout(() => {
        process.stdout.write('\r -   ');
    }, 7 * x + (i * 1000));

    setTimeout(() => {
        process.stdout.write('\r \   ');
    }, 8 * x + (i * 1000));

    setTimeout(() => {
        process.stdout.write('\r |   ');
    }, 9 * x + (i * 1000));

}

