function addg(first) {
  function more(next) {
    if (next === undefined) {
      return first;
    }

    first += next;
    return more;
  }

  return first === undefined ? undefined : more;
}

function liftg(binary) {
  return function(first) {
    function more(next) {
      if (next === undefined) {
        return first;
      }

      first = binary(first, next);
      return more;
    }

    return first === undefined ? undefined : more;
  };
}

function arrayg(first) {
  var array = [];

  function more(next) {
    if (next === undefined) {
      return array;
    }

    array.push(next);
    return more;
  }

  return more(first);
}

function continuize(unary) {
  return function(callback, value) {
    callback(unary(value));
  };
}

exports.addg = addg;
exports.liftg = liftg;
exports.arrayg = arrayg;
exports.continuize = continuize;
