module.exports = {
  run: function (assertEqual) {

    function fn() {
      return Math.max(...[1, 2, 3]);
    }

    assertEqual(fn(), 3);

  }
};
