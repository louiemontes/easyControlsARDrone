var arDrone = require('ar-drone');
var client = arDrone.createClient();
var keypress = require('keypress');

keypress(process.stdin);

process.stdin.on('keypress', function (ch, key) {
  console.log(key.name);
  if (key && key.ctrl && key.name === 'c') {
    process.stdin.pause();
    process.exit(0);
  } else if (key.name === 'w') {
    client.takeoff();
  } else if (key.name === 's') {
    client.stop();
    client.land();
  } else if (key.name === 'q') {
    client.stop()
    client.down(0.3)
  } else if (key.name === 'e') {
    client.stop()
    client.up(0.7)
  } else if (key.name === 'a') {
    client.stop()
    client.counterClockwise(0.3);
  } else if (key.name === 'd') {
    client.stop()
    client.clockwise(0.3);
  } else if (key.name === 'h') {
    client.stop()
  } else if (key.name === 'up') {
    client.stop()
    client.front(0.3);
  } else if (key.name === 'down') {
    client.stop()
    client.back(0.3);
  } else if (key.name === 'left') {
    client.stop()
    client.left(0.3);
  } else if (key.name === 'right') {
    client.stop()
    client.right(0.3);
  } else if (key.name === 'v') {
    client.animate('flipLeft', 15); // because 15 does one flip
  } else if (key.name === 'b') {
    client.animate('flipRight', 15);
  }
});

process.stdin.setRawMode(true);
process.stdin.resume();
