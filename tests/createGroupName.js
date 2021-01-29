const todoGroup = (id, groupName, tasks) => ({
  id, groupName, tasks,
});

const groupForm = {
  id: {
    value: '3456',
  },

  groupName: {
    value: 'Travelling',
  },

  tasks: {
    value: [],
  },
}

const createGroupName = () => {
  const id = groupForm.id.value;
  const groupName = groupForm.groupName.value;
  const tasks = groupForm.tasks.value;
  return todoGroup(id, groupName, tasks);
};

const findItem = (arr, inputItem) => {
  let index = '';
  if (arr.length === 0 || arr === null) {
    return;
  }
  arr.forEach((item) => {
    if (item.name == inputItem) {
      index = arr.indexOf(item.name);
    }
  });
  return index;
};

module.exports = {
  createGroupName,
  findItem
}