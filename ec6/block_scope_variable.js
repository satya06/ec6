var i, x, y;
var a = [1, 2, 3];
var b = [2, 3, 4];
for (i = 0; i < a.length; i++) {
    x = a[i];
}
for (i = 0; i < b.length; i++) {
    y = b[i];
}

var callbacks = [];
for (var i = 0; i <= 2; i++) {
    //(function (i) {
        callbacks[i] = function() { return i * 2; };
    //})(i);
}
console.log(callbacks[0]());
callbacks[0]() === 0;
callbacks[1]() === 2;
callbacks[2]() === 4;