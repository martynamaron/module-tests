var exercises = require("./module1");

describe("Answers", function() {
  beforeEach(function() {});

  it("Q1 - Check if a string is Code Your Future", function() {
    const cyf = "Code Your Future";
    let solution = exercises.question1(cyf);
    expect(solution).toEqual(true);
    solution = exercises.question1("Something else");
    expect(solution).toEqual(false);
  });

  it("Q2 - IF/ELSE: Check if two numbers are the same", function() {
    let number1 = 1;
    let number2 = 2;
    solution = exercises.question2(number1, number2);
    expect(solution).toEqual(false);

    number1 = 5;
    number2 = 5;
    solution = exercises.question2(number1, number2);
    expect(solution).toEqual(true);
  });

  it("Q3 - Is the number odd or even?", function() {
    solution = exercises.question3(3);
    expect(solution).toEqual("odd");
    solution = exercises.question3(14);
    expect(solution).toEqual("even");
  });

  it("Q4 - Returns an array containing only every second number from [0 ... 100]", function() {
    const arr = [ 0, 2, 4, 6, 8, 10, 12, 14, 16, 18,
                  20, 22, 24, 26, 28, 30, 32, 34, 36, 38,
                  40, 42, 44, 46, 48, 50, 52, 54, 56, 58,
                  60, 62, 64, 66, 68, 70, 72, 74, 76, 78,
                  80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100
                ];
    solution = exercises.question4();
    expect(solution).toEqual(arr);
  });
});
