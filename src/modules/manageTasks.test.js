import {
    createTasks, todoTask, setTasks, getTaskArr,
} from './manageTasks';

const todoTasksArr = [
    {
      id: '3456',
      name: 'Travelling',
      tasks: [{
        id: 7893455,
        name: 'Travel to Lagos',
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
  const newTask = todoTask(todoTasksArr[0].tasks[0].id, todoTasksArr[0].tasks[0].name, todoTasksArr[0].tasks[0].dateDue,
                           todoTasksArr[0].tasks[0].priority, todoTasksArr[0].tasks[0].describe);
  const expectation = {
    id: 7893455, name: 'Travel to Lagos', dateDue: '2020-01-15', priority: 'High', describe: 'Attend an interview for a big job',
  };
  expect(newTask).toStrictEqual(expectation);
  });
});

describe('Todo task name', () => {
  const newTask = todoTask(todoTasksArr[0].tasks[0].id, todoTasksArr[0].tasks[0].name, todoTasksArr[0].tasks[0].dateDue,
                           todoTasksArr[0].tasks[0].priority, todoTasksArr[0].tasks[0].describe);
  
  test('returns undefined if proper name is not supplied', () => {
  const newTask = todoTask(todoTasksArr[0].tasks[0].id, todoTasksArr[0].tasks[0].gname, todoTasksArr[0].tasks[0].dateDue,
                           todoTasksArr[0].tasks[0].priority, todoTasksArr[0].tasks[0].describe);
  expect(newTask.name).toBeUndefined();
  });

  test('returns name if task name is correct', () => {
    expect(newTask.name).toBe('Travel to Lagos');
  });

  test('Should fail if task name is incorrect', () => {
    const newTask = todoTask(todoTasksArr[0].tasks[0].id, todoTasksArr[1].tasks[0].name, todoTasksArr[0].tasks[0].dateDue,
                             todoTasksArr[0].tasks[0].priority, todoTasksArr[0].tasks[0].describe);
    expect(newTask.name).not.toBe('Travel to Lagos');
  });
});

describe('Todo task due date', () => {
  const newTask = todoTask(todoTasksArr[0].tasks[0].id, todoTasksArr[0].tasks[0].name, todoTasksArr[0].tasks[0].dateDue,
                           todoTasksArr[0].tasks[0].priority, todoTasksArr[0].tasks[0].describe); 
  test('Should pass if duedate is correct', () => {
    expect(newTask.dateDue).toBe('2020-01-15');
  });

  test('Should fail if duedate is incorrect', () => {
    newTask.dateDue = '2021-03-18';
    expect(newTask.dateDue).not.toBe('2021-03-15');
  });
});

describe('Todo task description', () => {
  const newTask = todoTask(todoTasksArr[0].tasks[0].id, todoTasksArr[0].tasks[0].name, todoTasksArr[0].tasks[0].dateDue,
                   todoTasksArr[0].tasks[0].priority, todoTasksArr[0].tasks[0].describe);

  test('Should pass if description is correct', () => {
    expect(newTask.describe).toBe('Attend an interview for a big job');
  });

  test('returns undefined if description is could not be accessed', () => {
    expect(newTask.gdescribe).toBeUndefined();
  });

  test('Should pass if there is a match in description content', () => {
    expect(newTask.describe).toMatch(/interview/);
  });

  test('Should fail if description is incorrect', () => {
    newTask.describe = 'Attend a musical event';
    expect(newTask.describe).not.toBe('Attend an interview for a big job');
  });
});

describe('Todo task priority', () => {
  const newTask = todoTask(todoTasksArr[0].tasks[0].id, todoTasksArr[0].tasks[0].name, todoTasksArr[0].tasks[0].dateDue,
                           todoTasksArr[0].tasks[0].priority, todoTasksArr[0].tasks[0].describe);

  test('should pass if priority is correct', () => {
    expect(newTask.priority).toBe('High');
  });

  test('Should fail if there is not match', () => {
    expect(newTask.priority).not.toMatch(/ow/);
  });

  test('Should fail if priority is incorrect', () => {
    newTask.priority = 'Medium';
    expect(newTask.priority).not.toBe('High');
  });
});

describe('Testing setTasks function', () => {
  test('Returns the element of the main array whose id is given', () => {
    expect(setTasks(todoTasksArr, '7865')).toBe(todoTasksArr[1]);
  });
});

describe('Testing createTasks function', () => {
  test('Returns array of tasks with length increased by 1 if new task is created successfully', () => {
    const currentArr = setTasks(todoTasksArr, '7865');
    const newTask = todoTask('7611', 'Lecture', '2021-03-18', 'Low', 'Attend Java Class by 8AM');
    expect(createTasks(currentArr, newTask).length).toEqual(2);
  });
});

describe('Testing getTaskArr function', () => {
  test('Returns current task array of the main array whose id is given', () => {
    expect(getTaskArr(todoTasksArr, '3456')).toBe(todoTasksArr[0].tasks);
  });
});