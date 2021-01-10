import {  submitGrpForm, addTask, addForm, groupBox, deleteGroup } from './modules/documentObjects';
import * as  group from './modules/addGroupName';

let selectedGrpId = '';
let currentGroup = '';
let otherGrpId = '';
let otherGrps = '';
// const selectedIndex = '';

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
       currentGroup = document.getElementById(selectedGrpId);
       currentGroup.classList.toggle('active-group');
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
  let setDelete = false;
  if (currentGroup.classList.contains('active-group')) {
    // console.log(currentGroup.classList.contains('active-group'))
    group.deleteGroup(group.myTodoArray, selectedGrpId);
    setDelete = true;
  }
  setDelete = false;
  group.render();
});

