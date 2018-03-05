module.exports = {
  run: function (assertEqual) {

    var obj = {
      value: 42,
      fn: function () {
        var args = arguments;
        return function () {
          return args[0];
        };
      }
    };

    var fn = obj.fn(1);
    assertEqual(fn(), 1);

  }
};
