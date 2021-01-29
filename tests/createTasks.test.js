const  createTasks = require('./createTasks');


describe('Todo task-name', () => {
  test('returns undefined if taskname is not supplied', () => {
    const newTaskName = '';
    expect(newTaskName.taskname).toBeUndefined();;
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

describe('Todo task due-date', () => {
  test('returns undefined if duedate is not supplied', () => {
    const newTaskName = '';
    expect(newTaskName.dateDue).toBeUndefined();;
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

describe('Todo task description', () => {
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

describe('Todo task priority', () => {
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

describe('New Task', () => {
  test('Creating New Todo task for a selected group', () => {
    const newTask = createTasks();
    const expectation = {
      id: 3456, taskname: 'Travel to Lagos', dateDue: '2020-01-15', priority: 'Medium', describe: 'Attend an interview for a big job',
    };
    expect(newTask).toStrictEqual(expectation);
  });
});
