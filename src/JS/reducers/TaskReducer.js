import { TaskData } from "../../TaskData";
import {
  ADD_TASK,
  CHANGE_ISDONE,
  FILTER_NOT_DONE,
  DELETE_TASKS,
  FILTER_DONE,
  EDIT_TASK,
} from "../actionsType/actionsType";

const initialState = {
  TaskData: TaskData,
};

export const TaskReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TASK:
      return { ...state, TaskData: [...state.TaskData, payload] };
    case CHANGE_ISDONE:
      return {
        ...state,
        // TaskData: !state.TaskData.find((task) => task.id === payload).isDone,
        TaskData: state.TaskData.map((el) =>
          el.id === payload ? { ...el, isDone: !el.isDone } : (el = el)
        ),
      };
    case DELETE_TASKS:
      return {
        ...state,
        TaskData: state.TaskData.filter((task) => task.id !== payload),
      };
    case EDIT_TASK:
      return {
        ...state,
        TaskData: state.TaskData.map((el) =>
          el.id === payload.id
            ? {
                ...el,
                title: payload.newEdit.titleT,
                description: payload.newEdit.descriptionT,
              }
            : (el = el)
        ),
      };
    default:
      return state;
  }
};
