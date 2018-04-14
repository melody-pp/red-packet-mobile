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

export {
  aniOnce, aniLoop, clearAll
}
