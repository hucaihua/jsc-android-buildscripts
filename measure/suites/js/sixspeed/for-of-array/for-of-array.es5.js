module.exports = {
  run: function (assertEqual) {

    var data = [1, 2, 3];

    function fn() {
      var ret = '';
      for (var i = 0; i < data.length; i++) {
        ret += data[i];
      }
      return ret;
    }

    assertEqual(fn(), '123');

  }
};
