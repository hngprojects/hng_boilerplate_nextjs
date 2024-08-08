const reducers = (state: any, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case "CALLBACK":
      return {
        ...state,
        callback: payload,
      };

    default:
      return state;
  }
};

export default reducers;
