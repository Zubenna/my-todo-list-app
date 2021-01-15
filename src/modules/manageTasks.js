import * as task from './addGroupName';
import {
  renderTasks, taskName, dueDate, selectPriority, describeTask, taskBoxEdit, addForm,
} from '../index';

const todoTask = () => ({
  id: Date.now().toString(),
  name: taskName.value,
  dateDue: dueDate.value,
  priority: selectPriority.value,
  describe: describeTask.value,
});

export const createTasks = (arr, selectID) => {
  const currentIndex = task.findArrIndex(arr, selectID);
  const currentArray = arr[currentIndex];
  if ((taskName.value !== '') && (dueDate.value !== '') && (describeTask.value !== '')) {
    const newTask = todoTask();
    currentArray.tasks.push(newTask);
    task.updateLocalStorage();
  }
  renderTasks(currentArray.tasks);
};

export const getTaskArr = (arr, grpId) => {
  const taskIndex = task.findArrIndex(arr, grpId);
  const taskArr = arr[taskIndex];
  const currentTaskArr = taskArr.tasks;
  return currentTaskArr;
};

export const setTaskEdit = (arr, selectedId) => {
  const rqdIndex = task.findArrIndex(arr, selectedId);
  const editArr = arr[rqdIndex];
  taskName.value = editArr.name;
  dueDate.value = editArr.dateDue;
  selectPriority.value = editArr.priority;
  describeTask.value = editArr.describe;
  addForm.style.display = 'block';
};

export const completeEdit = (arr, editId) => {
  const rqdIndex = task.findArrIndex(arr, editId);
  const newEdit = todoTask();
  arr.splice(rqdIndex, 1, newEdit);
  task.updateLocalStorage();
};

const sortWithPriority = (b, a) => {
  const bandA = a.priority;
  const bandB = b.priority;
  let sortWithPriority = 0;
  if (bandA > bandB) {
    sortWithPriority = 1;
  } else if (bandA < bandB) {
    sortWithPriority = -1;
  }
  return sortWithPriority;
};

const sortWithDate = (b, a) => {
  const bandA = a.dateDue;
  const bandB = b.dateDue;
  let sortWithDate = 0;
  if (bandA > bandB) {
    sortWithDate = 1;
  } else if (bandA < bandB) {
    sortWithDate = -1;
  }
  return sortWithDate;
};

export const sortTasks = (sortArr, sortBasis) => {
  if (sortBasis === 'priority') {
    renderTasks(sortArr.sort(sortWithPriority));
  }
  if (sortBasis === 'dateDue') {
    renderTasks(sortArr.sort(sortWithDate));
  }
};
