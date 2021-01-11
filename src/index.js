import {  submitGrpForm, addTask, addForm, groupBox, deleteGroup, submitTask } from './modules/documentObjects';
import * as  group from './modules/addGroupName';
import { todoTasks, createTasks } from './modules/manageTasks';

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
});

submitGrpForm.addEventListener('submit', (e) => {
  e.preventDefault();
  group.createGroupName();
  group.render();
});

const selectGroup = (currentTarget) => {
  group.myTodoArray.forEach((item) => {
    if (currentTarget === item.name) {
       selectedGrpId = item.id;
       let groupTasks = item.tasks;
       currentGroup = document.getElementById(selectedGrpId);
       currentGroup.classList.add('active-group');
       todoTasks(groupTasks);
       setDelete = true;
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
  createTasks();
  // console.log('submit-one clicked');
});

