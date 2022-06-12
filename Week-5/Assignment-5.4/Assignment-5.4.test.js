const mathOperations = require("./Assignment-5.4");

describe("Math Operations Test: ", ()=>{
    test("Test for addition of 1 + 2 should return 3 ",()=>{
        expect(mathOperations.sum(1,2)).toBe(3);
    }),
    test("Test for difference of 3 - 2 should return 1 ",()=>{
        expect(mathOperations.diff(3,2)).toBe(1);
    }),
    test("Test for product of 3 * 2 should return 6 ",()=>{
        expect(mathOperations.product(3,2)).toBe(6);
    }),
    test("Neagtive Test for add of string '3' + '2' should return '23' which is not correct ",()=>{
        expect(mathOperations.sum('3','2')).toBe("32");
    });
});


// ----------------------------------------------------------------------
// OUTPUT
// ----------------------------------------------------------------------

// PS F:\pesto-submissions\p2-anil-aditya226369\Week-5> cd .\Assignment-5.4\
// PS F:\pesto-submissions\p2-anil-aditya226369\Week-5\Assignment-5.4> npm test

// > week-5@1.0.0 test
// > jest

//  PASS  Assignment-5.4/Assignment-5.4.test.js
//   Math Operations Test:
//     √ Test for addition of 1 + 2 should return 3  (4 ms)
//     √ Test for difference of 3 - 2 should return 1  (1 ms)
//     √ Test for product of 3 * 2 should return 6  (1 ms)
//     √ Neagtive Test for add of string '3' + '2' should return '23' which is not correct  (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       4 passed, 4 total
// Snapshots:   0 total
// Time:        1.104 s
// Ran all test suites.
