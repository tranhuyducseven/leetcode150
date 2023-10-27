import { Clock } from "./clock";

const testClock = () => {
  const testCases = [
    {
      description: "on the hour",
      input: {
        hour: 8,
        minute: undefined, // You can set it to undefined to indicate 'on the hour'
      },
      expected: "08:00",
    },
    {
      description: "past the hour",
      input: {
        hour: 11,
        minute: 9,
      },
      expected: "11:09",
    },
    {
      description: "midnight is zero hours",
      input: {
        hour: 24,
        minute: 0,
      },
      expected: "00:00",
    },
    {
      description: "hour rolls over",
      input: {
        hour: 25,
        minute: 0,
      },
      expected: "01:00",
    },
    {
      description: "hour rolls over continuously",
      input: {
        hour: 100,
        minute: 0,
      },
      expected: "04:00",
    },
    {
      description: "sixty minutes is next hour",
      input: {
        hour: 1,
        minute: 60,
      },
      expected: "02:00",
    },
    {
      description: "minutes roll over",
      input: {
        hour: 0,
        minute: 160,
      },
      expected: "02:40",
    },
    {
      description: "minutes roll over continuously",
      input: {
        hour: 0,
        minute: 1723,
      },
      expected: "04:43",
    },
    {
      description: "hour and minutes roll over",
      input: {
        hour: 25,
        minute: 160,
      },
      expected: "03:40",
    },
    {
      description: "hour and minutes roll over continuously",
      input: {
        hour: 201,
        minute: 3001,
      },
      expected: "11:01",
    },
    {
      description: "hour and minutes roll over to exactly midnight",
      input: {
        hour: 72,
        minute: 8640,
      },
      expected: "00:00",
    },
    {
      description: "negative hour",
      input: {
        hour: -1,
        minute: 15,
      },
      expected: "23:15",
    },
    {
      description: "negative hour rolls over",
      input: {
        hour: -25,
        minute: 0,
      },
      expected: "23:00",
    },
    {
      description: "negative hour rolls over continuously",
      input: {
        hour: -91,
        minute: 0,
      },
      expected: "05:00",
    },
    {
      description: "negative minutes",
      input: {
        hour: 1,
        minute: -40,
      },
      expected: "00:20",
    },
    {
      description: "negative minutes rolls over",
      input: {
        hour: 1,
        minute: -160,
      },
      expected: "22:20",
    },
    {
      description: "negative minutes rolls over continuously",
      input: {
        hour: 1,
        minute: -4820,
      },
      expected: "16:40",
    },
    {
      description: "negative hour and minutes both roll over",
      input: {
        hour: -25,
        minute: -160,
      },
      expected: "20:20",
    },
    {
      description: "negative hour and minutes both roll over continuously",
      input: {
        hour: -121,
        minute: -5810,
      },
      expected: "22:10",
    },
  ];

  const numOfTestCases = testCases.length;
  const numOfPassedTestCases = testCases.reduce(
    (acc, { expected, input, description }) => {
      console.log(`Test Case: ${description}`);
      const { hour, minute } = input;
      const clock = new Clock(hour, minute);
      const actual = clock.toString();
      console.log(`Time: ${input.hour}:${input.minute} => ${actual}`);
      console.log(`Expected: ${expected}`);
      const flag = expected === actual;

      console.log(`Passed: ${flag ? "✅" : "❌"}`);
      console.log();
      return flag ? acc + 1 : acc;
    },
    0
  );

  console.log(
    `Passed ${numOfPassedTestCases} / ${numOfTestCases} clock test cases`
  );
  return {
    numOfTestCases,
    numOfPassedTestCases,
  };
};

const testPlus = () => {
  const testCases: {
    description: string;
    input: { clock: { hour: number; minute: number }; minutesToAdd: number };
    expected: string;
  }[] = [
    {
      description: "add minutes",
      input: {
        clock: { hour: 10, minute: 0 },
        minutesToAdd: 3,
      },
      expected: "10:03",
    },
    {
      description: "add no minutes",
      input: {
        clock: { hour: 6, minute: 41 },
        minutesToAdd: 0,
      },
      expected: "06:41",
    },
    {
      description: "add to next hour",
      input: {
        clock: { hour: 0, minute: 45 },
        minutesToAdd: 40,
      },
      expected: "01:25",
    },
    {
      description: "add more than one hour",
      input: {
        clock: { hour: 10, minute: 0 },
        minutesToAdd: 61,
      },
      expected: "11:01",
    },
    {
      description: "add more than two hours with carry",
      input: {
        clock: { hour: 0, minute: 45 },
        minutesToAdd: 160,
      },
      expected: "03:25",
    },
    {
      description: "add across midnight",
      input: {
        clock: { hour: 23, minute: 59 },
        minutesToAdd: 2,
      },
      expected: "00:01",
    },
    {
      description: "add more than one day (1500 min = 25 hrs)",
      input: {
        clock: { hour: 5, minute: 32 },
        minutesToAdd: 1500,
      },
      expected: "06:32",
    },
    {
      description: "add more than two days",
      input: {
        clock: { hour: 1, minute: 1 },
        minutesToAdd: 3500,
      },
      expected: "11:21",
    },
  ];

  const numOfTestCases = testCases.length;
  const numOfPassedTestCases = testCases.reduce(
    (acc, { expected, input, description }) => {
      console.log(`Test Case: ${description}`);
      const {
        clock: { hour, minute },
        minutesToAdd,
      } = input;
      const clock = new Clock(hour, minute).plus(minutesToAdd);
      const actual = clock.toString();
      console.log(
        `Time: ${hour}:${minute} plus Minutes: ${minutesToAdd} => ${actual}`
      );
      console.log(`Expected: ${expected}`);
      const flag = expected === actual;
      console.log(`Passed: ${flag ? "✅" : "❌"}`);
      return flag ? acc + 1 : acc;
    },
    0
  );

  console.log(
    `Passed ${numOfPassedTestCases} / ${numOfTestCases} clock test cases`
  );

  return {
    numOfTestCases,
    numOfPassedTestCases,
  };
};

const testMinus = () => {
  const testCase = [
    {
      description: "subtract minutes",
      input: {
        clock: { hour: 10, minute: 3 },
        minutesToSubtract: 3,
      },
      expected: "10:00",
    },
    {
      description: "subtract to previous hour",
      input: {
        clock: { hour: 10, minute: 3 },
        minutesToSubtract: 30,
      },
      expected: "09:33",
    },
    {
      description: "subtract more than an hour",
      input: {
        clock: { hour: 10, minute: 3 },
        minutesToSubtract: 70,
      },
      expected: "08:53",
    },
    {
      description: "subtract across midnight",
      input: {
        clock: { hour: 0, minute: 3 },
        minutesToSubtract: 4,
      },
      expected: "23:59",
    },
    {
      description: "subtract more than two hours",
      input: {
        clock: { hour: 0, minute: 0 },
        minutesToSubtract: 160,
      },
      expected: "21:20",
    },
    {
      description: "subtract more than two hours with borrow",
      input: {
        clock: { hour: 6, minute: 15 },
        minutesToSubtract: 160,
      },
      expected: "03:35",
    },
    {
      description: "subtract more than one day (1500 min = 25 hrs)",
      input: {
        clock: { hour: 5, minute: 32 },
        minutesToSubtract: 1500,
      },
      expected: "04:32",
    },
    {
      description: "subtract more than two days",
      input: {
        clock: { hour: 2, minute: 20 },
        minutesToSubtract: 3000,
      },
      expected: "00:20",
    },
  ];

  const numOfTestCases = testCase.length;
  const numOfPassedTestCases = testCase.reduce(
    (acc, { expected, input, description }) => {
      console.log(`Test Case: ${description}`);
      const {
        clock: { hour, minute },
        minutesToSubtract,
      } = input;
      const clock = new Clock(hour, minute).minus(minutesToSubtract);
      const actual = clock.toString();
      console.log(
        `Time: ${hour}:${minute} minus Minutes: ${minutesToSubtract} => ${actual}`
      );
      console.log(`Expected: ${expected}`);
      const flag = expected === actual;
      console.log(`Passed: ${flag ? "✅" : "❌"}`);
      return flag ? acc + 1 : acc;
    },
    0
  );

  console.log(
    `Passed ${numOfPassedTestCases} / ${numOfTestCases} clock test cases`
  );

  return {
    numOfTestCases,
    numOfPassedTestCases,
  };
};

const testEquals = () => {
  const testCases = [
    {
      description: "Equality test for clocks with the same time",
      input: {
        clock1: new Clock(15, 37),
        clock2: new Clock(15, 37),
      },
      expected: true,
    },
    {
      description: "Equality test for clocks a minute apart",
      input: {
        clock1: new Clock(15, 36),
        clock2: new Clock(15, 37),
      },
      expected: false,
    },
    {
      description: "Equality test for clocks an hour apart",
      input: {
        clock1: new Clock(14, 37),
        clock2: new Clock(15, 37),
      },
      expected: false,
    },
    {
      description: "Equality test for clocks with hour overflow",
      input: {
        clock1: new Clock(10, 37),
        clock2: new Clock(34, 37),
      },
      expected: true,
    },
    {
      description:
        "Equality test for clocks with hour overflow by several days",
      input: {
        clock1: new Clock(3, 11),
        clock2: new Clock(99, 11),
      },
      expected: true,
    },
    {
      description: "Equality test for clocks with negative hour",
      input: {
        clock1: new Clock(22, 40),
        clock2: new Clock(-2, 40),
      },
      expected: true,
    },
    {
      description: "Equality test for clocks with negative hour that wraps",
      input: {
        clock1: new Clock(17, 3),
        clock2: new Clock(-31, 3),
      },
      expected: true,
    },
    {
      description:
        "Equality test for clocks with negative hour that wraps multiple times",
      input: {
        clock1: new Clock(13, 49),
        clock2: new Clock(-83, 49),
      },
      expected: true,
    },
    {
      description: "Equality test for clocks with minute overflow",
      input: {
        clock1: new Clock(0, 1),
        clock2: new Clock(0, 1441),
      },
      expected: true,
    },
    {
      description:
        "Equality test for clocks with minute overflow by several days",
      input: {
        clock1: new Clock(2, 2),
        clock2: new Clock(2, 4322),
      },
      expected: true,
    },
    {
      description: "Equality test for clocks with negative minute",
      input: {
        clock1: new Clock(2, 40),
        clock2: new Clock(3, -20),
      },
      expected: true,
    },
    {
      description: "Equality test for clocks with negative minute that wraps",
      input: {
        clock1: new Clock(4, 10),
        clock2: new Clock(5, -1490),
      },
      expected: true,
    },
    {
      description:
        "Equality test for clocks with negative minute that wraps multiple times",
      input: {
        clock1: new Clock(6, 15),
        clock2: new Clock(6, -4305),
      },
      expected: true,
    },
    {
      description: "Equality test for clocks with negative hours and minutes",
      input: {
        clock1: new Clock(7, 32),
        clock2: new Clock(-12, -268),
      },
      expected: true,
    },
    {
      description:
        "Equality test for clocks with negative hours and minutes that wrap",
      input: {
        clock1: new Clock(18, 7),
        clock2: new Clock(-54, -11513),
      },
      expected: true,
    },
  ];

  const numOfTestCases = testCases.length;
  const numOfPassedTestCases = testCases.reduce(
    (acc, { expected, input, description }) => {
      console.log(`Test Case: ${description}`);
      const { clock1, clock2 } = input;
      const actual = clock1.equals(clock2);
      console.log(`Time: ${clock1.toString()} equals ${clock2.toString()}`);
      console.log(`Expected: ${expected}`);
      const flag = expected === actual;
      console.log(`Passed: ${flag ? "✅" : "❌"}`);
      return flag ? acc + 1 : acc;
    },
    0
  );

  console.log(
    `Passed ${numOfPassedTestCases} / ${numOfTestCases} clock test cases`
  );

  return {
    numOfTestCases,
    numOfPassedTestCases,
  };
};

const numOfTestCases =
  testClock().numOfTestCases +
  testPlus().numOfTestCases +
  testMinus().numOfTestCases +
  testEquals().numOfTestCases;
const numOfPassedTestCases =
  testClock().numOfPassedTestCases +
  testPlus().numOfPassedTestCases +
  testMinus().numOfPassedTestCases +
  testEquals().numOfPassedTestCases;

console.log("=================================");
console.log("Total Test Cases: ", numOfTestCases);
console.log("Total Passed Test Cases: ", numOfPassedTestCases);
