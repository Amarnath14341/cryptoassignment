export const updatePageNameReducer = (state, payload) => {
    if (!payload) {
      return state;
    }

    return {
      ...state,
      pageName: payload,
    };
  };