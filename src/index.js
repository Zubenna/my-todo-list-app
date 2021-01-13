import {  submitGrpForm, addTask, addForm, groupBox, deleteGroup, submitTask, taskBox, taskEdit,
          taskDelete,  taskBoxEdit, formTitle, editTask } from './modules/documentObjects';
import * as  group from './modules/addGroupName';
import { todoTasks, createTasks, renderTasks, getTaskArr, setTaskEdit, completeEdit } from './modules/manageTasks';

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
       let groupTasks = item.tasks;
       currentGroup = document.getElementById(selectedGrpId);
       currentGroup.classList.add('active-group');
       renderTasks(groupTasks);
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
  createTasks(group.myTodoArray, selectedGrpId);
});

taskBoxEdit.addEventListener('click', (e) => {
  e.preventDefault();
  const taskTarget = e.target.className;
  const targetID = e.target.id;
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
   });
});