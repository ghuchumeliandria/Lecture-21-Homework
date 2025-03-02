/*
1. 1-დან 15-მდე რიცხვების დაბეჭდვა და თუ რიცხვი 5-ზე მეტია, დაბეჭდვა "დიდია 5-ზე":

2. მასივიდან [3, 6, 9, 12, 15] მხოლოდ ლუწი რიცხვების გამოტანა:

3. სტრიქონის თითოეული ასოს დაბეჭდვა და თუ ასო 'a'-ია, დამატებითი ტექსტის დაბეჭდვა:

4. მასივიდან ["red", "green", "blue", "yellow"] მხოლოდ გრძელი სიტყვების (5 ასოზე მეტი) გამოტანა:

5. 1-დან 50-მდე რიცხვების გამოტანა, რომლებიც 7-ზე იყოფა და დაბეჭდვა "გაყოფადია 7-ზე":

6. მასივის [4, 8, 12, 16, 20] თითოეული ელემენტის გამრავლება 2-ზე და შედეგის დაბეჭდვა:

7. სტრიქონის 'javascript' თითოეული ასოს დაბეჭდვა და თუ ასო 'j'-ია, შეწყვეტა: (for loop-ს შეუძლია სტრინგსაც გადაუაროს let word = 'javascript';
for (let i = 0; i < word.length; i++))

8. მასივიდან [5, 10, 15, 20, 25] მხოლოდ იმ რიცხვების დაბეჭდვა, რომლებიც 5-ზე იყოფა:

9. სტრიქონში 'hello world' თითოეული ასოს დაბეჭდვა, გამოტოვებით ასო 'o':

10. მასივიდან [1, 2, 3, 4, 5, 6] მხოლოდ ლუწი რიცხვების ჯამის გამოთვლა:

11. რიცხვის 10 გამრავლების ტაბულის დაბეჭდვა: (
10 x 1 = 10
10 x 2 = 20
10 x 3 = 30
10 x 4 = 40
10 x 5 = 50
10 x 6 = 60
10 x 7 = 70
10 x 8 = 80
10 x 9 = 90
10 x 10 = 100
)

12. მასივიდან [2, 7, 4, 9, 5] თითოეული ელემენტის გამოთვლა და თუ რიცხვი 4-ზე მეტია, მისი გამრავლება 3-ზე:

13. 1-დან 30-მდე ყველა რიცხვის დაბეჭდვა, ხოლო თუ რიცხვი 10-ზე მეტია, დამატებითი 
ტექსტის დაბეჭდვა:

14. სტრიქონში 'frontend' ასოს 'e' პოვნისას, ტექსტის "ნაპოვნია e" დაბეჭდვა:

15. მასივიდან [100, 200, 300, 400, 500] იმ ელემენტების გამოტანა, რომლებიც 250-ზე ნაკლებია:
*/
console.log("Exam 1");
for (i = 1; i <= 15; i++) {
  if (i > 5) {
    console.log(`${i} მეტია 5 ზე`);
  } else {
    console.log(i);
  }
}
console.log("");
console.log("Exam 2");

let exam2Numbers = [3, 6, 9, 12, 15];

for (i = 0; i < exam2Numbers.length; i++) {
  if (exam2Numbers[i] % 2 === 0) {
    console.log(exam2Numbers[i]);
  } else {
    // console.log("რიცხვი კენტია")
  }
}

console.log("");
console.log("Exam 3");
let wordOne = "sainteresoa";

for (i = 0; i < wordOne.length; i++) {
  if (wordOne.charAt(i) === "a") {
    console.log(`${wordOne.charAt(i)} გამოტანა არ შეიძლება `);
  } else {
    console.log(wordOne.charAt(i));
  }
}

console.log("");
console.log("Exam 4");

let colors = ["red", "green", "blue", "yellow"];

for (i = 0; i < colors.length; i++) {
  if (colors[i].length > 5) {
    console.log(colors[i]);
  } else {
    // console.log("sorry")
  }
}
console.log("");
console.log("Exam 5");
for (i = 1; i < 50; i++) {
  if (i % 7 === 0) {
    console.log(`${i} იყოფა 7 ზე`);
  } else {
    // ravi
  }
}
console.log("");
console.log("Exam 6");
let exam6Nums = [4, 8, 12, 16, 20];

for (i = 0; i < exam6Nums.length; i++) {
  console.log(exam6Nums[i] * 2);
}

console.log("");
console.log("Exam 7");

let strJava = "javascript";

for (i = 0; i < strJava.length; i++) {
  if (strJava[i] === "j") {
    break;
  } else {
    console.log(strJava[i]);
  }
}

console.log("");
console.log("Exam 8");

let exam8Nums = [5, 10, 15, 20, 25];

for (i = 0; i < exam8Nums.length; i++) {
  if (exam8Nums[i] % 5 === 0) {
    console.log(exam8Nums[i]);
  } else {
  }
}
console.log("");
console.log("Exam 9");

let hello = "hello world";
for (i = 0; i < hello.length; i++) {
  if (hello[i] !== "o") {
    console.log(hello[i]);
  } else {
  }
}
console.log("");
console.log("Exam 10");

let exam10Nums = [1, 2, 3, 4, 5, 6];
let evenSum = 0;
for (i = 0; i < exam10Nums.length; i++) {
  if (exam10Nums[i] % 2 == 0) {
    evenSum += exam10Nums[i];
  } else {
  }
}
console.log(evenSum);

console.log("");
console.log("Exam 11");

for (i = 1; i <= 10; i++) {
  console.log(`${10}  *  ${i}  =  ${10 * i}`);
}

console.log("");
console.log("Exam 12");

let num12 = [2, 7, 4, 9, 5];

for (i = 0; i < num12.length; i++) {
  if (num12[i] > 4) {
    console.log(num12[i] * 3);
  } else {
    console.log(num12[i]);
  }
}

console.log("");
console.log("Exam 13");

for (i = 0; i <= 30; i++) {
  if (i === 16) {
    console.log(`${i} ნიკი რამდენი შეყვარებული გყავდა?`);
  } else if(i >=10){
    console.log(`${i} ვნახოთ აბა`)
  }else{
    console.log(i)
  }
}

console.log("")
console.log("Exam 14")

let frontend = "frontend"

for(i = 0; i <frontend.length; i++){
    if(frontend[i] === 'e'){
        console.log("ნაპოვნია e ")
    }
}

console.log("")
console.log("Exam 15")
let bigArray = [100, 200, 300, 400, 500];

for(i = 0; i < bigArray.length; i++){
    if(bigArray[i] < 250){
        console.log(bigArray[i])
    }
    
}