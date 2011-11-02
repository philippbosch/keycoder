(function() {
  var __indexOf = Array.prototype.indexOf || function(item) {
    for (var i = 0, l = this.length; i < l; i++) {
      if (this[i] === item) return i;
    }
    return -1;
  };
  $(function() {
    var $charcode, $keycode, $keys, modifierKeyCodes, modifierLabels;
    $keys = $('#keys');
    $keycode = $('#keycode');
    $charcode = $('#charcode');
    modifierLabels = {
      'shift': '⇧',
      'ctrl': 'ctrl',
      'alt': '⌥'
    };
    modifierKeyCodes = [16, 17, 18];
    $(window).bind('keypress', function(e) {
      return $charcode.text(e.charCode);
    });
    return $(window).bind('keydown', function(e) {
      var $key, key, modifier, _fn, _i, _len, _ref, _ref2;
      $keycode.text(e.keyCode);
      $keys.html('');
      _ref = ['shift', 'alt', 'ctrl'];
      _fn = function(modifier) {
        var $key;
        if (e["" + modifier + "Key"]) {
          $key = $("<span class=\"key modifier " + modifier + "\">" + modifierLabels[modifier] + "</span>");
          return $keys.append($key);
        }
      };
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        modifier = _ref[_i];
        _fn(modifier);
      }
      if (_ref2 = e.keyCode, __indexOf.call(modifierKeyCodes, _ref2) < 0) {
        key = String.fromCharCode(e.keyCode).toUpperCase();
        $key = $("<span class=\"key\">" + key + "</span>");
        return $keys.append($key);
      }
    });
  });
}).call(this);
