let svg = Snap("#svg");
let data1 = svg.select("#data1");
let tiles = svg.select("#tiles");
let logos = svg.select("#logos");
let mainTile = svg.select("#main-tile");
let mainLogo = svg.select("#main-logo");
let dataPoints = svg.selectAll(".data");
let paths = svg.selectAll(".line");
let durations = [1400, 1800, 1200, 1400, 900, 1300];

//function to animate along the path

animateAlongPath = function (path, element, start, dur, callback) {
  var len = Snap.path.getTotalLength(path);
  Snap.animate(start, len, function (value) {
    var movePoint = Snap.path.getPointAtLength(path, value);
    element.attr({ cx: movePoint.x, cy: movePoint.y });
  }, dur, mina.linear, function () {
    animateAlongPath(path, element, start, dur, callback);
  });
};

window.onload = function(){
  //tiles opacity
  tiles.animate({ opacity: 1 }, 500, mina.easeinout);
  //logos opacity
  setTimeout(()=>{
    logos.animate({ opacity: 1 }, 500, mina.easeinout)
  },250)
  //main tile opacity
  setTimeout(() => {
    mainTile.animate({ opacity: 1 }, 500, mina.easeinout)
  }, 500);
  //main logo opacity
  setTimeout(() => {
    mainLogo.animate({ opacity: 1 }, 500, mina.easeinout)
  },750);
  //paths and points opacity
  setTimeout(()=>{
    paths.animate({ opacity: 1 }, 500, mina.easeinout);
    dataPoints.animate({opacity: 1}, 500, mina.easeinout, ()=>{
    });
  }, 1000)
  setTimeout(()=>{
    //main animation(data flow)
    dataPoints.forEach((data, i) => {
      animateAlongPath(paths[i], data, 0, durations[i], animateAlongPath);
    })
  }, 1250);
}