import {
    createTasks, todoTask,
} from './manageTasks';

const todoTasksArr = [
    {
      id: '3456',
      name: 'Travelling',
      tasks: [{
        id: 7893455,
        name: 'Travell to Lagos',
        dateDue: '2020-01-15',
        priority: 'High',
        describe: 'Attend an interview for a big job',
      }],
    },
    {
      id: '7865',
      name: 'Study',
      tasks: [{
        id: 5768394,
        name: 'Study JavaScript',
        dateDue: '2020-01-20',
        priority: 'Medium',
        describe: 'Studying this topic is crucial to my next project',
      }],
    },
  ];

describe('New Task Object', () => {
  test('Creating New Todo task for a selected group', () => {
  console.log(todoTasksArr[0].tasks[0].id);
  const newTask = todoTask(todoTasksArr[0].tasks[0], todoTasksArr[0].tasks.name, todoTasksArr[0].tasks.dateDue,
                           todoTasksArr[0].tasks.priority, todoTasksArr[0].tasks.describe);
  const expectation = {
    id: 5768394, name: 'Study JavaScript', dateDue: '2020-01-20', priority: 'Medium', describe: 'Studying this topic is crucial to my next project',
  };
  expect(newTask).toStrictEqual(expectation);
  });
});

xdescribe('Todo task-name', () => {
  test('returns undefined if taskname is not supplied', () => {
    const newTaskName = '';
    expect(newTaskName.taskname).toBeUndefined();
  });

  test('returns createTasks.name.value if task name is correct', () => {
    const newTaskName = createTasks();
    expect(newTaskName.taskname).toBe('Travel to Lagos');
  });

  test('Should fail if task name is incorrect', () => {
    const newTaskName = createTasks();
    expect(newTaskName.taskname).not.toBe('Travel to America');
  });
});

xdescribe('Todo task due-date', () => {
  test('returns undefined if duedate is not supplied', () => {
    const newTaskName = '';
    expect(newTaskName.dateDue).toBeUndefined();
  });

  test('Should pass if duedate is correct', () => {
    const newTaskName = createTasks();
    expect(newTaskName.dateDue).toBe('2020-01-15');
  });

  test('Should fail if duedate is incorrect', () => {
    const newTaskName = createTasks();
    expect(newTaskName.dateDue).not.toBe('2021-03-15');
  });
});

xdescribe('Todo task description', () => {
  test('returns undefined if description is not supplied', () => {
    const newTaskName = '';
    expect(newTaskName.describe).toBeUndefined();
  });

  test('Should pass if there is a match', () => {
    const newTaskName = createTasks();
    expect(newTaskName.describe).toMatch(/interview/);
  });

  test('Should fail if description is incorrect', () => {
    const newTaskName = createTasks();
    expect(newTaskName.describe).not.toBe('Attend a musical event');
  });
});

xdescribe('Todo task priority', () => {
  test('should pass if priority is correct', () => {
    const newTaskName = createTasks();
    expect(newTaskName.priority).toBe('Medium');
  });

  test('Should fail if there is not match', () => {
    const newTaskName = createTasks();
    expect(newTaskName.priority).not.toMatch(/ow/);
  });

  test('Should fail if priority is incorrect', () => {
    const newTaskName = createTasks();
    expect(newTaskName.priority).not.toBe('High');
  });
});

xdescribe('New Task', () => {
  test('Creating New Todo task for a selected group', () => {
    const newTask = createTasks();
    const expectation = {
      id: 3456, taskname: 'Travel to Lagos', dateDue: '2020-01-15', priority: 'Medium', describe: 'Attend an interview for a big job',
    };
    expect(newTask).toStrictEqual(expectation);
  });
});
