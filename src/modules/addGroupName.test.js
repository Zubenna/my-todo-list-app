import {
  createGroupName, todoGroup, findItem, findArrIndex, deleteGroup,
} from './addGroupName';

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

describe('Testing creation of new Group Object', () => {
  test('Passes if todoGroup Object is successfully created', () => {
  const newGroupObj = todoGroup(groupNameArray[0].id, groupNameArray[0].name, groupNameArray[0].tasks);
  const expectation = {
    id: 3456, name: 'Travelling', tasks: [],
  };
  expect(newGroupObj).toStrictEqual(expectation);
  });
});

describe('Testing todoGroup valiables', () => {
  const newGroup = todoGroup(groupNameArray[0].id, groupNameArray[0].name, groupNameArray[0].tasks);
  test('Passes if group name is supplied', () => {
    expect(newGroup.name).toBe('Travelling');
  });

  test('Returns undefined if name parameter if undefined', () => {
    const newGroupB = todoGroup(groupNameArray[0].id, groupNameArray[0].gname, groupNameArray[0].tasks);
    expect(newGroupB.name).toBe(undefined);
  });

  test('Passes if id is supplied', () => {
    expect(newGroup.id).toBe(3456);
  });

  test('Fails if supplied name is wrong', () => {
    const newGroupC = todoGroup(groupNameArray[0].id, 'Travel', groupNameArray[0].tasks);
    expect(newGroupC.name).not.toBe('Travelling');
  });

  test('returns an array of length 0 if new task array is created', () => {
    expect(newGroup.tasks.length).toEqual(0);
  });

  test('Passes if createGroupName stores new group object in the array', () => {
    expect(createGroupName(newGroup)).toBe('Travelling');
  });
});

describe('Testing findItem function', () => {
  test('returns empty string if group name is not found in array', () => {
    expect(findItem(groupNameArray, 'Sports')).toBe('');
  });

  test('returns value other than empty string if group name is found in array', () => {
    expect(findItem(groupNameArray, groupNameArray[1].name)).not.toBe('');
  });
});

describe('Testing findArrIndex function', () => {
  test('Returns index of an array element if specified id exist', () => {
    expect(findArrIndex(groupNameArray, 7977)).toEqual(2);
  });
  
  test('Returns -1 if specified id does not exist in array', () => {
    expect(findArrIndex(groupNameArray, 8900)).toEqual(-1);
  });
});

describe('Testing deleteGroup function', () => {
  test('Returns length of original array if no element is deleted', () => {
  const result = deleteGroup(groupNameArray, 8900);
    expect(result.length).toEqual(3);
  });
});

describe('Testing deleteGroup function', () => {
  test('returns array of length 1 less than original array if one element is deleted', () => {
  const result = deleteGroup(groupNameArray, 7977);
  expect(result.length).toEqual(2);
  });
});