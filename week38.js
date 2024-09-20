/*
    Hello.
    This is a problem set for you to work on
    The idea is to practice a few things at a time.
    You do this by writing your answer after a task is given (see the example).

    DO NOT change the provided code unless the task specifically says you should.
*/

/*
    Task: Example
    Write the code to print all the names in the list, one name per line.
*/
console.log("Task: Example");
const people = ["Tony", "Christian", "Håkon"];

for (let index = 0; index < people.length; index++) {
    let person = people[index];
    console.log(person);
}

/*
    Task: A
    Create variables for:
    * Hours in a day 
    * Minutes in an hour
    * Seconds in a minute
    * The ratio between water and juice when mixing juice
    * Days until your birthday
    * Millimeters of rain that falls
*/
console.log("Task: A");
const hoursInDay = 24;
const minutesInHour = 60;
const secondsInMinute = 60;
let waterToJuiceRatio = 3;
let daysUntilMyBirthday = 297;
let mmRainFall = 3.2;
console.log("Hours in a Day:" + hoursInDay);
console.log("Minutes in an hour:" + minutesInHour);
console.log("Seconds in a minute:" + secondsInMinute);
console.log("A juice to water ratio could be:" + waterToJuiceRatio);
console.log("Days until may birthday:" + hoursInDay);
console.log("Mm of rain that could fall:" + hoursInDay);

/*
    Task: B
    Use your variables (do not redefine them) from task A and calculate:
    * How many seconds are in 2.5 hours?
    * How many minutes are in 123 days?
    Remember to assign the answers to their own variables.
    Example:
    // How many deciliters are in 4.5 cups?
    const dlInCups = 2.36588;
    const amountOfDL = dlInCups * 4.5;
*/
console.log("Task: B");
// Seconds in 2.5 hours
const secondsInHour = secondsInMinute * minutesInHour;
let amountOfSeconds = secondsInHour * 2.5;
console.log("Amount of seconds in 2.5 hours are:" + amountOfSeconds);
// Minutes in 123 days
const minutesInDay = minutesInHour * hoursInDay;
let amountOfMinutes = minutesInDay * 123
console.log("Amount of minutes in 123 days are:" + amountOfMinutes);

/*
    Task: C
    Use a loop (for) to print the numbers from 1 to 10.
*/
console.log("Task: C");
for(i = 0; i < 10; i++)
{
    console.log(i+1);
}

/*
    Task: D
    Use a loop (for) to print the numbers from 10 to 1.
*/
console.log("Task: D");
for(let i = 0; i < 10; i++)
    {
        console.log(10-i);
    }

/*
    Task: E
    This one is a bit more difficult, but you can do it ;)
    Use a loop (for) to print the even numbers between 1 and 100.
*/
console.log("Task: E");
for(let i = 0; i <= 100; i+= 2)
    {
        console.log(i);
    }

/*
    Task: F
    Use a while loop to print all the numbers from 0 to 100;
*/
console.log("Task: F");
let underHundred = true;
let currentNumber = 0;
while(underHundred)
{
    console.log(currentNumber);
    if (currentNumber == 100)
    {
        underHundred = false;
    }
    else
    {
        currentNumber++;
    }
}


/*
    Task: G
    Fill in the code needed to make the following code print the expected result.
*/
console.log("Task: G");

const DICTIONARY_ML = {
    no: {
        hello: "Hello there",
        howAreYou: "How are you doing?"
    },
    en: {
        hello: "Hi",
        howAreYou: ", how are you?",
        goodQuestionsLatly: "Gotten any good questions lately?"
    }
};

console.log(`${DICTIONARY_ML.en.hello} Christian${DICTIONARY_ML.en.howAreYou}`); //-> Hi Christian, how are you?
console.log(`${DICTIONARY_ML.en.goodQuestionsLatly}`); //-> Gotten any good questions lately?
