import { ADD_TASK, SET_REMINDER, REMOVE_TASK, FETCH_TASK } from "../types";

const taskTrackerReducer = (state, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [action.payload, ...state.tasks],
      };
    case REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case SET_REMINDER:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, reminder: action.newarr.reminder }
            : task,
        ),
      };
    case FETCH_TASK:
      return {
        ...state,
        tasks: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default taskTrackerReducer;
