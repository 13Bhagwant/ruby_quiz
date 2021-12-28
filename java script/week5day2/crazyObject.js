var myCrazyObject = {
    name : 'A ridiculous object',
    'some': [7, 9, { purpose: 'confusion', number: 123 }, 3.3],
    'random animal': 'Banana Shark'
    };
    console.log(myCrazyObject.some[2].number);
    console.log(Object.keys(myCrazyObject.some[2])[1]);
    console.log(Object.entries(myCrazyObject.some[2])[1]);

    