import {  taskBox, taskName, dueDate, selectPriority, describeTask } from './documentObjects';
import * as  task from './addGroupName';
let taskArray = [];


export const todoTasks = (groupTasks) => {
  taskArray = groupTasks;
};

const todoTask = () => ({
  name: taskName.value, dateDue: dueDate.value, priority: selectPriority.value, describe: describeTask.value
});

const renderTasks = () => {

}

export const createTasks = () => {
  const newTask = todoTask();
  task.checkLocalStorage();
  taskArray.push(newTask);
  task.updateLocalStorage();
  console.log('Form submitted');
  console.log(taskArray);
};

