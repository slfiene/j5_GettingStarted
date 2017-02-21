const Raspi = require('raspi-io');
const five = require('johnny-five');
const board = new five.Board({
    io: new Raspi()
});

board.on('ready', () => {
    (new five.Led('GPIO18')).strobe();
  //  (new five.Led('GPIO14')).strobe();
});
  