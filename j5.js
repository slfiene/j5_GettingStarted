const Raspi = require('raspi-io');
const five = require('johnny-five');
const board = new five.Board({
    io: new Raspi()
});

board.on('ready', () => {
    (new five.Led('P1-7')).strobe();
});
