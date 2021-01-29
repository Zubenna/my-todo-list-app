const myFunctions = require('./createGroupName');

const createGroupName = myFunctions.createGroupName;
const findItem = myFunctions.findItem;

const groupNameArray = [
    {
      id: 3456,
      name: 'Travelling',
      tasks: [],
    },
    {
      id: 7865,
      name: 'Study',
      tasks: [],
    },
    {
      id: 7977,
      name: 'Shopping',
      tasks: [],
    },
  ];

describe('group name', () => {
  test('returns undefined if groupname is not supplied', () => {
    expect(createGroupName.groupName).toBe(undefined);
  });

  test('returns createGroupName.groupName.value if groupname is supplied', () => {
    const newGroupName = createGroupName();
    expect(newGroupName.groupName).toBe('Travelling');
  });

  test('returns undefined if id is not supplied', () => {
    expect(createGroupName.id).toBe(undefined);
  });

  test('returns createGroupName.id.value if id is supplied', () => {
    const newGroupName = createGroupName();
    expect(newGroupName.id).toBe(3456);
  });

  test('returns an array of length 0 if new task array is created', () => {
    const newGroupName = createGroupName();
    expect(newGroupName.tasks.length).toEqual(0);
  });
});

describe('Find groupName', () => {
  test('returns empty string if groupName is not found in array', () => {
    expect(findItem(groupNameArray, 'School')).toBe('');
  });

  test('returns value other than empty string if groupName is found in array', () => {
    expect(findItem(groupNameArray, groupNameArray[1].name)).not.toBe('');
  });

});