module.exports = {
  run: function (assertEqual) {

    var data = [1, 2, 3];
    function tag(strings, value1, value2) {
      return strings[0] + value1 + strings[1] + value2 + strings[2];
    }

    function fn() {
      return tag(['', ' ', ''], data[0], data[1] + data[2]);
    }

    assertEqual(fn(), '1 5');

  }
};
