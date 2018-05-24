module.exports = {
  run: function (assertEqual) {

    function fn(arg = 1, other = 3) {
      return arg + other;
    }


    assertEqual(fn(), 4);
    assertEqual(fn(2), 5);
    assertEqual(fn(1, 2), 3);

  }
};
