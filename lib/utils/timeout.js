// @flow
function timeout(time: number): Promise<void> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

export default timeout
