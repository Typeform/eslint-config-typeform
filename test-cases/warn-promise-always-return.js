const log = () => null

const doAsyncStuff = () =>
  new Promise(() => {
    return 12
  })
    .then((result) => {
      log(result)
    })
    .catch((err) => {
      throw err
    })

return doAsyncStuff
