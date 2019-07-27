let svg = Snap("#svg");
let data1 = svg.select("#data1");
let path1 = svg.select("#path1");
let data2 = svg.select("#data2");
let path2 = svg.select("#path2");
let data3 = svg.select("#data3");
let path3 = svg.select("#path3");
let data4 = svg.select("#data4");
let path4 = svg.select("#path4");
let data5 = svg.select("#data5");
let path5 = svg.select("#path5");
let data6 = svg.select("#data6");
let path6 = svg.select("#path6");
//function to animate along the path

animateAlongPath = function (path, element, start, dur, callback) {
  // Get the path length, so we know how many frames we will animate over
  var len = Snap.path.getTotalLength(path);
  Snap.animate(start, len, function (value) {
    // movePoint gets the path attributes at a certain frame
    var movePoint = Snap.path.getPointAtLength(path, value);

    // applies the attributes to our element
    element.attr({ cx: movePoint.x, cy: movePoint.y });
  }, dur, mina.linear, function () {
    animateAlongPath(path, element, start, dur, callback);
  });
};

animateAlongPath(path1, data1, 0, 2600, () => {
  console.log("over");
})

animateAlongPath(path2, data2, 0, 2400, () => {
  console.log("over");
})

animateAlongPath(path3, data3, 0, 2600, () => {
  console.log("over");
})

animateAlongPath(path4, data4, 0, 2200, () => {
  console.log("over");
})

animateAlongPath(path5, data5, 0, 1800, () => {
  console.log("over");
})
animateAlongPath(path6, data6, 0, 1900, () => {
  console.log("over");
})
