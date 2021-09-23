import { ADD_TASK, SET_REMINDER, REMOVE_TASK } from "../types";

const taskTrackerReducer = (state, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: action.payload,
      };
    case REMOVE_TASK:
      return {
        ...state,
        tasks: action.payload,
      };
    case SET_REMINDER:
      return {
        ...state,
        reminder: action.payload,
      };
    default:
      return state;
  }
};

export default taskTrackerReducer;
