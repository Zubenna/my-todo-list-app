import {  taskName, dueDate, selectPriority, describeTask, taskBoxEdit, deleteTask } from './documentObjects';
import * as  task from './addGroupName';

const todoTask = () => ({
  id: Date.now().toString(), name: taskName.value, dateDue: dueDate.value, priority: selectPriority.value, describe: describeTask.value,
});

export const renderTasks = (taskArray) => {
    task.checkLocalStorage();
    taskBoxEdit.innerHTML = '';
    taskArray.forEach((task) => {
       const htmlTask = `
      <div class='task-box-div'><p class='t-title' id='pt-${task.id}'>Title: ${task.name}</p></br>
      <textarea class='t-describe'>Description: ${task.describe}</textarea><p class='t-priority'>Priority: ${task.priority}</p>
      <div class='edit-box'><p class='due-date'>Due Date: ${task.dateDue}</p><div class='task-edit'><i class="fa fa-edit" id='${task.id}e'></i>
      <i class='fa fa-trash-o' id='${task.id}d'></i>
      </div></div></div></br>`
      taskBoxEdit.insertAdjacentHTML('afterbegin', htmlTask);
    });
}

export const createTasks = (arr, selectID) => {
  const currentIndex = task.findArrIndex(arr, selectID);
  const currentArray = arr[currentIndex];
      //  console.log(currentArray.id);
  const newTask = todoTask();
  currentArray.tasks.push(newTask);
  task.updateLocalStorage();
  renderTasks(currentArray.tasks);
};

export const getTaskArr = (arr, grpId) => {
  const taskIndex = task.findArrIndex(arr, grpId);
  const taskArr = arr[taskIndex];
  const currentTaskArr = taskArr.tasks;
  return currentTaskArr;
}
