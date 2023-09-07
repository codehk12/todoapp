import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const { text, category } = action.payload;
      state.tasks.push({ text, subtasks: [], category });
    },
    deleteTask: (state, action) => {
      console.log(state.tasks);
      // debugger;
      // const taskIndex = state.tasks.findIndex(
      //   (tasks) => tasks.id === action.payload
      // );

      // findIndex(state.tasks, action)
      // console.log(taskIndex);
      if (action.payload !== -1) state.tasks.splice(action.payload, 1);
    },
    addSubtask: (state, action) => {
      const { taskIndex, subtaskText } = action.payload;
      state.tasks[taskIndex].subtasks.push(subtaskText);
      console.log("This is taskIndex",taskIndex)
      console.log("This is subTaskText", subtaskText)
    },
    deleteSubtask: (state, action) => {
      const { taskIndex, subtaskIndex } = action.payload;
      state.tasks[taskIndex].subtasks.splice(subtaskIndex, 1);
      console.log("This is subtaskIndex" , subtaskIndex)
    },
  },
});

export const { addTask, deleteTask, addSubtask, deleteSubtask } =
  todoSlice.actions;
export default todoSlice.reducer;
