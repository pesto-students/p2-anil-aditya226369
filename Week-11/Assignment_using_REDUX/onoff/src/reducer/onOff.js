const onOff = (currentState = true, action) => {
  switch (action.type) {
    case "TOGGLE":
      return !currentState;
    default:
      return currentState;
  }
};
export default onOff;
