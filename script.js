// // 10. Values and variables

// let firstName = "Anshu";
// let lastName = "Sinha";

// console.log(`${firstName} ${lastName}`);

// // Assignment

// // 1. Declarevariablescalled'country','continent'and'population'and assign their values according to your own country (population in millions)

// let country = "India";
// let continent = "Asia";
// let population = 1407600000;

// // 2. Logtheirvaluestotheconsole

// console.log(`Country: ${country}, Continent: ${continent}, Population: ${population}`);

/////

// // 12. Data types

// console.log(typeof(true));
// console.log(typeof(123.321));
// console.log(typeof("Anshu Sinha"));

// let year;
// year = 2023;
// console.log(typeof(year));

// console.log(typeof(null));

// // Assignment

// // 1. Declareavariablecalled'isIsland'andsetitsvalueaccordingtoyour country. The variable should hold a Boolean value. Also declare a variable 'language', but don't assign it any value yet

// let isIsland = "India";
// isIsland = true;

// let language;

// // 2. Logthetypesof'isIsland','population','country'and'language' to the console

// console.log(typeof(isIsland));
// console.log(typeof(language));

/////

// // 13. let, const and var

// let age = 21;
// age = 22;

// console.log(age);

// const yearOfBirth = 2001;

// console.log(yearOfBirth);

// const job = "Creative Developer";
// console.log(job);

// firstName = "Anshu";
// console.log(firstName);

// // Assignment

// // 1. Setthevalueof'language'tothelanguagespokenwhereyoulive(some countries have multiple languages, but just choose one)

// let nativeLanguage = "Hindi";

// // 2. Thinkaboutwhichvariablesshouldbeconstvariables(whichvalueswillnever change, and which might change?). Then, change these variables to const.

// const language = "English";

// // 3. Trytochangeoneofthechangedvariablesnow,andobservewhathappens

// language = "Spanish";
// console.log(language);

/////

// // 14. Basic operators

// let nowYear = 2023
// const ageAnshu = nowYear - 2001;
// const ageSahil = nowYear - 2003;
// console.log(ageAnshu, ageSahil);

// const firstName = "Anshu ";
// const lastName = "Sinha";
// console.log(firstName + lastName);

// let x = 10 + 5;  // Assignment operator
// x += 10;
// console.log(x);

// console.log(ageAnshu > ageSahil);

// // Assignment

// // 1. Ifyourcountrysplitinhalf,andeachhalfwouldcontainhalfthepopulation, then how many people would live in each half?

// let population = 1460000000;
// let halfPopulation = population / 2;
// console.log(halfPopulation);

// // 2. Increasethepopulationofyourcountryby1andlogtheresulttotheconsole

// population += 1;
// console.log(population);

// // 3. Finlandhasapopulationof6million.Doesyourcountryhavemorepeoplethan
// // Finland?

// let finlandPopulation = 6000000;
// console.log(finlandPopulation > population);

// // 4. Theaveragepopulationofacountryis33millionpeople.Doesyourcountry
// // have less people than the average country?

// let avgPopulation = 33000000;
// console.log(avgPopulation < population);

// // 5. Basedonthevariablesyoucreated,createanewvariable'description'
// // which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'

// let description = "Portugal is in Europe, and its 11 million people speak portuguese";
// console.log(description);

/////

// // 16. Coding challenge #1

// // Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
// // BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
// // Your tasks:
// // 1. StoreMark'sandJohn'smassandheightinvariables

// let markHeight = prompt("Enter Mark's height in meters: ");
// let markWeight = prompt("Enter Mark's weight in kilograms: ");

// let johnHeight = prompt("Enter John's height in meters: ");
// let johnWeight = prompt("Enter John's weight in kilograms: ");

// // 2. CalculateboththeirBMIsusingtheformula(youcanevenimplementboth
// // versions)

// let markBmi = markWeight / (markHeight ** 2);
// let johnBmi = johnWeight / (johnHeight ** 2);

// console.log(`Marks BMI: ${markBmi} and John's BMI: ${johnBmi}`);

// // 3. CreateaBooleanvariable'markHigherBMI'containinginformationabout

// let markHigherBmi = markBmi > johnBmi;
// console.log(markHigherBmi);

// // whether Mark has a higher BMI than John.
// // Test data:
// // § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
// // § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
// // GOOD LUCK 😀

/////

// // 17. Strings and template literals

// const firstName = "Anshu";
// const job = "student";
// const yearOfBirth = 2003;
// let currentYear = 2023;

// console.log(`I am ${firstName}, a ${currentYear - yearOfBirth} year old ${job}.`);

// console.log(`String with
// multiple
// lines of 
// strings`);

/////

// // 18. Taking decisions: if / else statements

// const age = 18;

// let yourAge = prompt(`Enter your age: `);

// if (yourAge >= age) {
//     console.log(`You can drive a car.`);
// }
// else {
//     console.log(`You are under age.`);
// }

// // Assignment 

// // 1. Ifyourcountry'spopulationisgreaterthat33million,logastringlikethistothe console: 'Portugal's population is above average'. Otherwise, log a string like 'Portugal's population is 22 million below average' (the 22 is the average of 33 minus the country's population)

// let myCountryPopulation = 1460000000;
// let avgPopulation = myCountryPopulation - 33000000;

// if (myCountryPopulation > 33000000) {
//     console.log(`Potugal's population is above average.`);
// }
// else {
//     console.log(`Portugal's population is ${avgPopulation / 1000000} million below average.`);
// }

/////

// // 19. Coding challenge #2

// // Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
// // Your tasks:
// // 1. Printaniceoutputtotheconsole,sayingwhohasthehigherBMI.Themessage is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"

// let markHeight = prompt(`Enter Mark's height in meters: `);
// let markWeight = prompt(`Enter Mark's weight in kilograms: `);
// let markBmi = markWeight / (markHeight ** 2);

// let johnHeight = prompt(`Enter John's height in meters: `);
// let johnWeight = prompt(`Enter John's weight in kilograms: `);
// let johnBmi = johnWeight / (johnHeight ** 2);
// // 2. UseatemplateliteraltoincludetheBMIvaluesintheoutputs.Example:"Mark's BMI (28.3) is higher than John's (23.9)!"
// // Hint: Use an if/else statement 😉 GOOD LUCK 😀

// if (markBmi > johnBmi) {
//     console.log(`Mark's BMI (${markBmi}) is higher than that of John's BMI (${johnBmi}).`);
// }
// else {
//     console.log(`John's BMI (${johnBmi}) is higher than that of Mark's BMI (${markBmi}).`);
// }

/////

// // 20. Type conversion and coercion

// const inputYear = Number(prompt("Enter a year: "));
// console.log(inputYear + 10);

// console.log(Number("Anshu Sinha"));
// console.log(typeof ("Number"));

// console.log("I am " + 21 + " years old."); // here 21 will be converted to string due to type coercion
// console.log("21" + 10); // here 21 will be converted to string due to type coercion
// console.log("21" - 10); // here 21 will be converted to number due to type coercion (- triggers opposite conversion)
// console.log("21" * 2);
// console.log("21" / 2);

// // Assignment

// // 1. Predicttheresultofthese5operationswithoutexecutingthem:
// //      '9' - '5'; 4
// //      '19' - '13' + '17'; 617
// //      '19' - '13' + 17; 23
// //      '123' < 57; false
// //      5 + 6 + '4' + 9 - 4 - 2; 1143
// // 2. Executetheoperationstocheckifyouwereright

// console.log("123" < 57);
// console.log(5 + 6 + '4' + 9 - 4 - 2);

/////

// // 21. Truthy and falsy values

// // There are six falsy values: 0, "", undefined, null, NaN, and false.

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Anshu Sinha"));
// console.log(Boolean({}));
// console.log(Boolean(""));

/////

// // 22. Equality operators: == vs ===

// const age = 18;
// if (age === 18) {
//     console.log("You became an adult");
// }

// // Assignment

// // 1. Declareavariable'numNeighbours'basedonapromptinputlikethis: prompt('How many neighbour countries does your country have?');
// const numNeighbours = prompt("How many neighbour countries does you country have? ");
// // 2. Ifthereisonly1neighbour,logtotheconsole'Only1border!'(uselooseequality == for now)
// if (numNeighbours === 1) {
//     console.log("Only 1 border");
// }
// // 3. Useanelse-ifblocktolog'Morethan1border'incase'numNeighbours' is greater than 1
// else if (numNeighbours > 1) {
//     console.log("More than 1 border");
// }
// // 4. Useanelseblocktolog'Noborders'(thisblockwillbeexecutedwhen 'numNeighbours' is 0 or any other value)
// else {
//     console.log("No borders")
// }
// // 5. Testthecodewithdifferentvaluesof'numNeighbours',including1and0.
// // 6. Change==to===,andtestthecodeagain,withthesamevaluesof
// // 'numNeighbours'. Notice what happens when there is exactly 1 border! Why
// // is this happening?
// // 7. Finally,convert'numNeighbours'toanumber,andwatchwhathappensnow
// // when you input 1
// // 8. Reflectonwhyweshouldusethe===operatorandtypeconversioninthis
// // situation

/////

// // 24. Logic operators

// const hasDriverLicense = true;
// const hasGoodVision = true;

// console.log(hasDriverLicense && !hasGoodVision);

// //  Assignment

// // 1. Commentoutthepreviouscodesothepromptdoesn'tgetintheway
// // 2. Let'ssaySarahislookingforanewcountrytolivein.Shewantstoliveina
// // country that speaks english, has less than 50 million people and is not an
// // island.
// // 3. WriteanifstatementtohelpSarahfigureoutifyourcountryisrightforher.
// // You will need to write a condition that accounts for all of Sarah's criteria. Take
// // your time with this, and check part of the solution if necessary.
// // 4. Ifyoursistherightcountry,logastringlikethis:'YoushouldliveinPortugal:)'.If
// // not, log 'Portugal does not meet your criteria :('
// // 5. Probablyyourcountrydoesnotmeetallthecriteria.Sogobackandtemporarily
// // change some variables in order to make the condition true (unless you live in Canada :D)

// let population = 1460000000;
// const language1 = "Hindi";
// const language2 = "English";
// const typeCountry = "Peninsula";

// if (population <= 50000000 && language2 === "English" && typeCountry == ! "Island") {
//     console.log("Sarah can comfortably live in my country :)");
// }
// else {
//     console.log("Sarah must go back to Portugal :(");
// }

// // Coding challenge #3

// // There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
// // Your tasks:
// // 1. Calculatetheaveragescoreforeachteam,usingthetestdatabelow
// // 2. Comparetheteam'saveragescorestodeterminethewinnerofthecompetition,
// // and print it to the console. Don't forget that there can be a draw, so test for that
// // as well (draw means they have the same average score)
// // 3. Bonus1:Includearequirementforaminimumscoreof100.Withthisrule,a
// // team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
// // 4. Bonus2:Minimumscorealsoappliestoadraw!Soadrawonlyhappenswhen both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy
// // Test data:
// // § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// // § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123 
// // § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
// // GOOD LUCK 😀

// let d1 = Number(prompt("Enter dolphin's score 1: "));
// let d2 = Number(prompt("Enter dolphin's score 2: "));
// let d3 = Number(prompt("Enter dolphin's score 3: "));

// let k1 = Number(prompt("Enter koala's score 1: "));
// let k2 = Number(prompt("Enter koala's score 2: "));
// let k3 = Number(prompt("Enter koala's score 3: "));

// const dolphinAvgScore = (d1 + d2 + d3) / 3;
// const koalaAvgScore = (k1 + k2 + k3) / 3;

// if (dolphinAvgScore === koalaAvgScore && dolphinAvgScore > 100 && koalaAvgScore > 100) {
//     console.log("It's a draw!");
// }
// else if (dolphinAvgScore > 100 && dolphinAvgScore > koalaAvgScore) {
//     console.log("Dolphins have won!");
// }

// else if (koalaAvgScore > 100 && dolphinAvgScore < koalaAvgScore) {
//     console.log("Koalas have won!");
// }

// else {
//     console.log("No team wins the trophy!");
// }

///// 

// // 26. The switch statement

// const day = Number(prompt("Enter 1 for monday, 2 for tuesday, 3 for wednesday, 4 for thursday, 5 for friday, 6 for saturday or 7 for sunday"));

// switch (day) {
//     case (1):
//         console.log("It's monday.");
//         console.log("Plan course structure.");
//         break;
//     case (2):
//         console.log("It's tuesday.");
//         console.log("Prepare theory videos.");
//         break;
//     case (3):
//     case (4):
//         console.log("It's either wednesday or thursday")
//         console.log("Write code examples.");
//         break;
//     case (5):
//         console.log("It's friday.");
//         console.log("Record videos.");
//         break;
//     case (6):
//     case (7):
//         console.log("It's either saturday or sunday.");
//         console.log("Enjoy the weekend :D");
//         break;
//     default:
//         console.log("Not a valid day!");
//         break;
// }

// // Assignment

// // 1. Useaswitchstatementtologthefollowingstringforthegiven'language': chinese or mandarin: 'MOST number of native speakers!'
// // spanish: '2nd place in number of native speakers'
// // english: '3rd place'
// // hindi: 'Number 4'
// // arabic: '5th most spoken language'
// // for all other simply log 'Great language too :D'

// const language = prompt("Enter a valid language: ").toLowerCase();

// switch (language) {
//     case ("chinese"):
//     case ("mandarin"):
//         console.log("Most number of native speakers!");
//         break;
//     case ("spanish"):
//         console.log("2nd place in number of native speakers.");
//         break;
//     case ("english"):
//         console.log("3rd place.");
//         break;
//     case ("hindi"):
//         console.log("Number 4");
//         break;
//     case ("arabic"):
//         console.log("5th most spoken language");
//         break;
//     default:
//         console.log("Great language too :D");
//         break;
// }

/////

// // 28. The conditional (ternary operator)

// const age = Number(prompt("Enter your age: "));

// age >= 18 ? console.log("You can go for a driving license.") : console.log("You are under age :(");

// Assignment 


// 1. Ifyourcountry'spopulationisgreaterthan33million,
// usetheternaryoperator to log a string like this to the
//  console: 'Portugal's population is above average'. 
//  Otherwise, simply log 'Portugal's population is below 
//  average'. Notice how only one word changes between these 
//  two sentences!
// 2. Aftercheckingtheresult,changethepopulation
// temporarilyto13andthento 130. See the different 
// results, and set the population back to original

// const population = 1460000000;

// population > 33000000 ? console.log("India's population is more than average.") : console.log("India's population is below average.");

// // Coding challenge #4


// // Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.
// // Your tasks:
// // 1. Calculatethetip,dependingonthebillvalue.Createavariablecalled'tip'for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
// // 2. Printastringtotheconsolecontainingthebillvalue,thetip,andthefinalvalue (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25”
// // Test data:
// // § Data 1: Test for bill values 275, 40 and 430 Hints:
// // § To calculate 20% of a value, simply multiply it by 20/100 = 0.2 § Value X is between 50 and 300, if it's>= 50 && <= 300😉
// // GOOD LUCK 😀

// const initialBill = Number(prompt("Enter the bill: ₹"));
// let tip = 0;

// 50 < initialBill < 300 ? tip = 15 : tip = 20;

// const tipAmount = (tip / 100) * initialBill;

// console.log(`The bill was ${initialBill}, 
// the tip was ${tipAmount} 
// and the total value is ${initialBill + tipAmount}.`);