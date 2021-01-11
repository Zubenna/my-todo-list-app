import {  taskBox, taskName, dueDate, selectPriority, describeTask } from './documentObjects';
import * as  task from './addGroupName';

const todoTask = () => ({
  name: taskName.value, dateDue: dueDate.value, priority: selectPriority.value, describe: describeTask.value,
});

export const renderTasks = (taskArray) => {
    task.checkLocalStorage();
    taskBox.innerHTML = '';
    taskArray.forEach((task) => {
       const htmlTask = `
      <div class='task-box-div'><p class='t-title'>Title: ${task.name}</p></br>
      <textarea class='t-describe'>Description: ${task.describe}</textarea><p class='t-priority'>Priority: ${task.priority}</p><p class='due-date'>Due Date: ${task.dateDue}</p></div></br>`
      taskBox.insertAdjacentHTML('afterbegin', htmlTask);
    });
}

export const createTasks = (arr, selectID) => {
  const currentIndex = task.findArrIndex(arr, selectID);
  const currentArray = arr[currentIndex];
  const newTask = todoTask();
  currentArray.tasks.push(newTask);
  task.updateLocalStorage();
  renderTasks(currentArray.tasks);
};

