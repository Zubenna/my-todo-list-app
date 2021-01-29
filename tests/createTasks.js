const todoTask = (id, taskname, dateDue, priority, describe) => ({
    id, taskname, dateDue, priority, describe,
});
  
    const todoTaskForm = {
    id: {
      value: 3456,
    },
  
    taskname: {
      value: 'Travel to Lagos',
    },
  
    dateDue: {
      value: '2020-01-15',
    },

    priority: {
      value: 'Medium',
    },

    describe: {
      value: 'Attend an interview for a big job',
    },
  }
  
  const createTasks = () => {
    const id = todoTaskForm.id.value;
    const taskname = todoTaskForm.taskname.value;
    const dateDue = todoTaskForm.dateDue.value;
    const priority = todoTaskForm.priority.value;
    const describe = todoTaskForm.describe.value;
    return todoTask(id, taskname, dateDue, priority, describe);
  };

module.exports = createTasks;