const doAsyncStuff = () =>
  new Promise(() => {
    return 12
  })
    .then((result) => {
      return new Promise().then(() => {
        return result * 2
      })
    })
    .catch((err) => {
      throw err
    })

return doAsyncStuff
