const generateSteps = (maxSteps) => {
  let stepsArray = []
  for (let i = 1; i <= maxSteps; i++) {
    stepsArray.push(i)
  }
  return stepsArray
}
export default generateSteps