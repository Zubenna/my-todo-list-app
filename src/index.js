import * as group from './modules/addGroupName';
import {
  createTasks, getTaskArr, setTaskEdit, completeEdit, sortTasks,
} from './modules/manageTasks';

const addTask = document.querySelector('.add-task');
const formTitle = document.querySelector('.form-title');
const editTask = document.querySelector('#update-task');
const sortItem = document.querySelector('#sort-item');
const submitGrpForm = document.querySelector('.add-group');
const deleteGroup = document.querySelector('#delete-group');
const submitTask = document.querySelector('#submit-task');
const taskBoxEdit = document.querySelector('.task-box');

export const addForm = document.querySelector('#enter-task');
export const groupName = document.querySelector('#group-name');
export const groupBox = document.querySelector('#group-container');
export const groupDupError = document.querySelector('#gErrMsg');
export const taskName = document.querySelector('#task-name');
export const dueDate = document.querySelector('#due-date');
export const selectPriority = document.querySelector('#select-priority');
export const describeTask = document.querySelector('#describe-task');
export const taskEdit = document.querySelector('.fa-edit');
export const taskDelete = document.querySelector('#del-task');
export const taskDiv = document.querySelector('.task-box-div');

let selectedGrpId = '';
let currentGroup = '';
let otherGrpId = '';
let otherGrps = '';
let setDelete = false;

document.addEventListener('DOMContentLoaded', () => {
  addForm.classList.add('no-display');
  group.render();
});

addTask.addEventListener('click', () => {
  addForm.classList.toggle('no-display');
  editTask.style.display = 'none';
});

submitGrpForm.addEventListener('submit', (e) => {
  e.preventDefault();
  group.createGroupName();
  group.render();
});

const selectGroup = (currentTarget) => {
  taskBoxEdit.innerHTML = '';
  group.myTodoArray.forEach((item) => {
    if (currentTarget === item.name) {
      selectedGrpId = item.id;
      const groupTasks = item.tasks;
      currentGroup = document.getElementById(selectedGrpId);
      currentGroup.classList.add('active-group');
      renderTasks(groupTasks);
      setDelete = true;
      const sortArr = getTaskArr(group.myTodoArray, selectedGrpId);
      if (sortArr.length >= 2) {
        sortItem.style.display = 'block';
      } else {
        sortItem.style.display = 'none';
      }
    } else {
      otherGrpId = item.id;
      otherGrps = document.getElementById(otherGrpId);
      otherGrps.classList.remove('active-group');
    }
  });
};

groupBox.addEventListener('click', (e) => {
  e.preventDefault();
  const currentTarget = e.target.innerHTML;
  selectGroup(currentTarget);
});

deleteGroup.addEventListener('click', () => {
  if (setDelete) {
    group.deleteGroup(group.myTodoArray, selectedGrpId);
  }
  setDelete = false;
  group.render();
});

submitTask.addEventListener('click', () => {
  createTasks(group.myTodoArray, selectedGrpId);
});

taskBoxEdit.addEventListener('click', (e) => {
  e.preventDefault();
  const taskTarget = e.target.className;
  const targetID = e.target.id;
  const titleParent = e.target.parentElement.id;
  const expectedId = targetID.slice(0, (targetID.length - 1));
  const currentArr = getTaskArr(group.myTodoArray, selectedGrpId);
  currentArr.forEach((item) => {
    if ((taskTarget === 'fa fa-trash-o') && (expectedId === item.id)) {
      const requiredID = item.id;
      group.deleteGroup(currentArr, requiredID);
      renderTasks(currentArr);
    }
    if ((taskTarget === 'fa fa-edit') && (expectedId === item.id)) {
      formTitle.innerHTML = 'Edit Task';
      submitTask.style.display = 'none';
      const requiredID = item.id;
      setTaskEdit(currentArr, requiredID);

      editTask.addEventListener('click', () => {
        completeEdit(currentArr, requiredID);
        renderTasks(currentArr);
      });
    }
    const divId = document.getElementById(titleParent);
    const rqdTitleiD = targetID.slice(3, (targetID.length));
    if (item.id === rqdTitleiD) {
      divId.classList.toggle('task-div');
    }
  });
});

sortItem.addEventListener('change', (e) => {
  e.preventDefault();
  const sortArr = getTaskArr(group.myTodoArray, selectedGrpId);
  const sortBasis = sortItem.value;
  sortTasks(sortArr, sortBasis);
});

export const renderTasks = (taskArray) => {
  group.checkLocalStorage();
  taskBoxEdit.innerHTML = '';
  taskArray.forEach((task) => {
    const htmlTask = `
      <div class='task-box-div' id='tb-${task.id}'><h5 class='t-title' id='pt-${task.id}'><span>Title:</span> ${task.name}</h5></br>
      <textarea class='t-describe'>${task.describe}</textarea><p class='t-priority'><span>Priority:</span> ${task.priority}</p>
      <div class='edit-box'><p class='due-date'><span>Due Date:</span> ${task.dateDue}</p><div class='task-edit'><i class="fa fa-edit" id='${task.id}e'></i>
      <i class='fa fa-trash-o' id='${task.id}d'></i>
      </div></div></div></br>`;
    taskBoxEdit.insertAdjacentHTML('afterbegin', htmlTask);
  });
};
