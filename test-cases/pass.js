const myConstant = 34
let myVariable = myConstant + 5
const data = { a: 5, b: 1 }
if (true) {
  const { a } = data
  myVariable += a + data.b
}

const doAsyncStuff = (variable) =>
  new Promise(() => {
    return variable + 12
  }).then((result) => {
    return result * 2
  })

return doAsyncStuff(myVariable)
