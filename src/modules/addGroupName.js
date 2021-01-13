import { groupName, groupBox, groupDupError, submitGroup, addTask, addForm } from './documentObjects';
export let myTodoArray;

const DEFAULT_DATA = [
  {
     id: Date.now().toString(),
     name: 'Travelling',
     tasks: [{name: 'Travell to Lagos'}, {dueDate: '2020-01-15'}, {description: 'Attend an interview for a big job'}, {priority: 'High'}]
   },
];

const todoGroup = () => ({
  id: Date.now().toString(), name: groupName.value.toUpperCase(), tasks: []
}); 

export const updateLocalStorage = () => {
  localStorage.setItem('myTodoArray', JSON.stringify(myTodoArray));
}

export const checkLocalStorage = () => {
  if (localStorage.getItem('myTodoArray')) {
    myTodoArray = JSON.parse(localStorage.getItem('myTodoArray'));
  } else {
    myTodoArray = DEFAULT_DATA;
  }
}

export const render = () => {
  checkLocalStorage();
  groupBox.innerHTML = '';
  myTodoArray.forEach((group) => {
    const htmlGroup = `
    <p id=${group.id}>${group.name}</p>`
    groupBox.insertAdjacentHTML('afterbegin', htmlGroup);
  });
}

export const findItem = (arr, inputItem) => {
  let index = '';
  if (arr.length === 0 || arr === null) {
    return;
  }
  arr.forEach((item) => {
    if (item.name === inputItem) {
      index = arr.indexOf(inputItem);
    }
  });
  return index;
}

export const createGroupName = () => {
  const newGroup = todoGroup();
  const grpName = newGroup.name;
  if (myTodoArray.length === 0 || (findItem(myTodoArray, grpName) === '') && (groupName.value !== '')){
    checkLocalStorage();
    myTodoArray.push(newGroup);
    updateLocalStorage();
    groupDupError.innerHTML = '';
    groupName.classList.remove('red-border');
  } else {
    groupDupError.innerHTML = 'Duplicate or Empty Group Name not Allowed';
    groupDupError.classList.add('group-duplicate');
    groupName.classList.add('red-border');
  }
};

export const findArrIndex = (arr, itemID) => {
  const result = arr.findIndex(x => x.id === itemID);
  return result;
}

export const deleteGroup = (theArray, grpID) => {
  const index = findArrIndex(theArray, grpID);
  theArray.splice(index, 1);
  updateLocalStorage();
}
