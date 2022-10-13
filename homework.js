// Problem 1 //
    // 2 == '2' True.
    // 'he' == 'she' False.
    // 2 === 2 True. 
    // 'true' == true. True. 
    // true === true. True. 
    // 'true' != true. False.
    // 'true' !== true. True.

// Problem 2 //
    // Var, Let and Const. Var has been around for a while and can create issues with being changed. Var must be used for older browsers. Let should be used when you believe the variable could be changed. Const is constant and can never be changed.

//Problem 3 //
    // First-Class Function 

        const Human = (a, b) => {
            return (a + " " + b)
        }

        document.write(Human("Jordan", "Clark"))

    // Higher-Order Function 

        const arr = [1, 2, 3, 4];

        function filterOddNumbers(arr) {
            const filteredArr = [];
            for (let i = 0; i > arr.length; i++) {
                filteredArr.push(arr[i]);
            }
        }
        return filteredArr;
    
        console.log(filterOddNumbers(arr));

    // Callback Function

        function myCalculation(some) {
            document.getElementById("demo").innerHTML = some;
        }
        
        function myCalculator(number1, number2, myCallback) {
            let sum = number1 * number2;
            myCallback(sum);
        }
        
        myCalculator(3, 4, myCalculation);

// Problem 4 // 

    //console.log(a) = hi      
    //console.log(b) = bye
    //console.log(c) = undefined

// Problem 5 //

    const someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // For statement

    for (let i = 0; i < someArray.length; i++) {
        console.log(someArray[i] + ",")
    }

    // For...of statment

    let text = "";
    for (let x of someArray) {
    text += x + ",";
    }

// Problem 6 //

    const someArray = [1, 2, 3, 4, 5];

    // - Use the concat() method to merge the two arrays to return: [1, 2, 3, 4, 5]
    
    const someArray1 = [1, 2, 3]
    const someArray2 = [4, 5];

    const joinedArray = someArray1.concat(someArray2);

    // - Use the length property to return the length of the array 

    console.log(someArray.length)

    // - Use the filter() method to filter out the element “3” and return: [1, 2, 4, 5] 

    const newNumbers = someArray.filter(number => number !== 3)

    // - Use the find() method to find and return the value of 5.  

    const findMeNumber5 = someArray.find(number => number === 5)

    // - Use the slice() method to return back this array: [3, 4] 

    const slicedArray = someArray.slice(2, 3)

    // - Use the splice() method to return back this array: [1, 2, 5] 

    someArray.splice(2, 2)

    // - Use the includes() method to return back TRUE when I pass in “4” into the includes method.
    
    const isFourIncluded = someArray.includes(4)

    // - Use the indexOf() method to return back the index of the element “2” 

    let index = someArray.indexOf(2)

    // - Use the isArray() method to return back TRUE when I pass in the array 

    let result = Array.isArray(someArray)

    // - Use the join() method to return back: “1, 2, 3, 4, 5” 

    let numbers = fruits.join();

    // - Use the map() method to return back a new array: [2, 4, 6, 8, 10] 

    someArray.map(number => number * 2)

    const newArr = someArray.map(multArray)

    function multArray(number) {
    return number * 2;
    }

    // - Use the pop() method to return back a new array: [1, 2, 3, 4] 

    someArray.pop()

    // - Use the push() method to return back a new array: [1, 2, 3, 4, 5, 6] 

    someArray.push(6)

    // - Use the shift() method to return back a new array: [2, 3, 4, 5] 

    someArray.shift()

    // - Use the unshift() method to return back a new array: [0, 1, 2, 3, 4, 5] 

    someArray.unshift(0)

    // - Sort this array to return [9, 1, 3, 5] using the sort() method

    const newerArray = [9, 1, 3, 5];

    newerArray.sort()    
    
    // - Use the reduce() method to return back the sum of all numbers in the array

    const initialValue = 0;
    const sumTotal = someArray.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        0
      );

// Problem 7 //

    const someObject = { 
        color: 'black' 
    }

    // - Use the assign() method to add a new key value pair of:   name: ‘john doe’ 

    const someObject2 = Object.assign({name: 'john doe'}, someObject);

    // - Use the dot notation to add a new key value pair of:    age: 22 

    someObject.age = 22;

    // - Use the bracket notation to add a new key value pair of:    address: ‘123 test address’ 

    someObject['address'] = '123 test address'

    // - Use the keys() method to return a array back of the keys: [“color”, “name”, “age”, “address”] 

    Object.keys(someObject)

    // - Use the values() method to return a array back of the values: [“black”, “john doe”, “22”, “123 test address”] 

    Object.values(someObject)

    // - Use the for...in loop against this object to console.log each of the keys values. Your terminal should return:
        - // black 
        - // john doe 
        - // 22 
        - // 123 test address

    for (const property in someObject) {
        console.log(`${someObject[property]}`);
        }

// Problem 8 //

        // Given the following data structure: 

        const numbersArray = [ 
            { 
                num: 1 
            }, 
            { 
                num: 2 
            }, 
            { 
                num: 3 
            } 
        ]

        // Use either the for statement or for...of loop to console.log each of the keys. Values.  
        // Your terminal should return 
        // 1 
        // 2 
        // 3 

        let textAgain = "";
        for (let x of numbersArray) {
        textAgain += x + "<br>";
        }

// Reduce Problem 1 //

    const data = [ 
        { name: 'Superman', favoriteIceCreams: ['Strawberry', 'Vanilla', 'Chocolate', 
    'Cookies & Cream'] }, 
        { name: 'Batman', favoriteIceCreams: ['Cookies & Cream', 'Mint Chocolate Chip', 
    'Chocolate', 'Vanilla'] }, 
        { name: 'Flash', favoriteIceCreams: ['Chocolate', 'Rocky Road', 'Pistachio', 
    'Banana'] }, 
        { name: 'Aquaman', favoriteIceCreams: ['Vanilla', 'Chocolate', 'Mint Chocolate Chip'] }, 
        { name: 'Green Lantern', favoriteIceCreams: ['Vanilla', 'French Vanilla', 'Vanilla Bean', 'Strawberry'] }, 
        { name: 'Robin', favoriteIceCreams: ['Strawberry', 'Chocolate', 'Mint Chocolate Chip'] } 
    ];

    const iceCreamTotals = data.reduce((allFlavors, flavor) => {
        const currFlavorCount = allFlavors[flavor] ?? 0;
        return {
          ...allFlavors,
          [flavor]: currFlavorCount + 1,
        };
      }, {});

// Reduce Problem 2 //

    //Find the most recent date from this array using reduce(): 
     const dates = [ 
    '2019/06/01', 
    '2018/06/01', 
    '2019/09/01', 
    '2018/09/01' 
    ]

    dates.reduce((a, b) => (a.LowestDate > b.LowestDate ? a : b), {});