import * as group from './modules/addGroupName';
import {
  renderTasks, createTasks, getTaskArr, setTaskEdit, completeEdit, sortTasks,
} from './modules/manageTasks';
import {
  groupName, addTask, formTitle, editTask, sortItem, submitGrpForm, deleteGroup, taskBoxEdit,
  groupDupError, groupBox, submitTask, addForm,
} from './modules/domVariables';

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
  const newGrpName = group.todoGroup(Date.now().toString(), groupName.value.toUpperCase(), []);
  const grpName = newGrpName.name;
  if ((group.myTodoArray.length === 0 || group.findItem(group.myTodoArray, grpName) === '') && (groupName.value !== '')) {
    group.createGroupName(newGrpName);
    groupDupError.innerHTML = '';
    groupName.classList.remove('red-border');
  } else {
    groupDupError.innerHTML = 'Duplicate or Empty Group Name not Allowed';
    groupDupError.classList.add('group-duplicate');
    groupName.classList.add('red-border');
  }
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
