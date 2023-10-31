/// understanding the closure concepts

let counter = (function () {
    var _count = 0;
    return function () {return _count += 1;}
})();

counter();
counter();
counter();