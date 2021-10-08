const logger = (store) => (next) => (action) => {
  let returnValue;

  console.group(action.type)
    console.log('The action: ', action)
    returnValue = next(action)
    console.log('State after action: ', store.getState())
  console.groupEnd()
  
  return returnValue;
}

export default logger
