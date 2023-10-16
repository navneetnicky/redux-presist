import { ADD_TODO, REMOVE_TODO } from './types';
export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: {
    id: new Date().getTime(),
    text,
  },
});
export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: id,
});