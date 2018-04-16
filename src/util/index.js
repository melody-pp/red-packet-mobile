const aniOnce = (context, key, n, speed = 150) => {
  return new Promise(resolve => {
    for (let i = 0; i <= n; i++) {
      setTimeout(() => {
        context.aniVar[key] = i
        i === n && resolve()
      }, i * speed)
    }
  })
}

const aniLoop = (context, key, n, speed = 150) => {
  context.aniVar[key] = 0
  return setInterval(() => context.aniVar[key] = (context.aniVar[key] + 1) % n, speed)
}

const loop = () => {}

const clearAll = () => {
  let timeoutId = setTimeout(loop)
  while (timeoutId--) {
    clearTimeout(timeoutId)
  }

  let intervalId = setInterval(loop)
  while (intervalId--) {
    clearInterval(intervalId)
  }
}

const throttle = (func, wait, options)=> {
  var context, args, result;
  var timeout = null;
  var previous = 0;
  if (!options) options = {};
  var later = function() {
    previous = options.leading === false ? 0 : _.now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };
  return function() {
    var now = _.now();
    if (!previous && options.leading === false) previous = now;
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
};

export {
  aniOnce, aniLoop, clearAll,throttle
}
