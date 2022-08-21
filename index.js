// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Pc animation from grasshopper</h1>`;

let svg = d3.select('.grasshopper');

function makeRectangle(height, width, x, y, color) {
  svg
    .append('rect')
    .attr('height', height)
    .attr('width', width)
    .attr('x', x)
    .attr('y', y)
    .attr('fill', color);
}

let computerBase = [
  makeRectangle(51, 198, 25, 145, 'black'),
  makeRectangle(51, 200, 30, 150, 'black'),
  makeRectangle(51, 210, 20, 160, 'black'),
  makeRectangle(51, 215, 15, 165, 'black'),
  makeRectangle(45, 198, 20, 165, 'darkGrey'),
  makeRectangle(39, 192, 24, 169, 'grey'),
  makeRectangle(12, 60, 140, 175, 'black'),
];

let computerMonitor = [
  makeRectangle(147, 155, 40, 9, 'black'),
  makeRectangle(142, 174, 33, 13, 'black'),
  makeRectangle(125, 146, 25, 25, 'black'),
  makeRectangle(117, 146, 29, 20, 'black'),
  makeRectangle(6, 150, 39, 13, 'grey'),
  makeRectangle(123, 131, 29, 25, 'darkGrey'),
  makeRectangle(108, 150, 35, 19, 'darkGrey'),
  makeRectangle(123, 150, 35, 25, 'grey'),
  makeRectangle(112, 135, 40, 30, 'darkGrey'),
  makeRectangle(106, 126, 40, 30, 'black'),
];

let computerScreen = svg
  .append('rect')
  .attr('fill', 'black')
  .attr('height', 106)
  .attr('width', 126)
  .attr('x', 40)
  .attr('y', 30);

let powerButton = svg
  .append('rect')
  .attr('fill', 'black')
  .attr('height', 15)
  .attr('width', 15)
  .attr('x', 43)
  .attr('y', 182)
  .attr('opacity', 0.4);

// Create the animations
function turnOn() {
  let loading = svg.append('rect');
  powerButton
    .transition()
    .duration(1000)
    .attr('opacity', 1)
    .attr('fill', 'yellow');
  loading
    .transition()
    .delay(1000)
    .attr('height', 8)
    .attr('width', 8)
    .attr('x', 65)
    .attr('y', 80)
    .attr('fill', 'white')
    .attr('opacity', 0.4)
    .transition(5000)
    .delay(1000)
    .attr('opacity', 1)
    .attr('width', 70);
  computerScreen
    .transition()
    .delay(2500)
    .duration(1500)
    .attr('fill', 'powderblue');
  loading.transition().delay(2500).remove();
}

function turnOff() {
  computerScreen.transition().duration(2000).attr('fill', 'black');
  powerButton
    .transition()
    .duration(500)
    .attr('fill', 'black')
    .attr('opacity', 0.4);
}

let powerOn = false;

function animate() {
  if (powerOn) {
    turnOff();
    powerOn = false;
  } else {
    turnOn();
    powerOn = true;
  }
}

// Animate the SVG on load, then animate in reponse to a click event
animate();
svg.on('click', animate);
