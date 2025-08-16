console.log("Hello World!")

// logical operators
let condition1 = true;
let condition2 = true;
console.log(`condition1 && condition2: ${condition1 && condition2}`);
console.log(`condition1 || condition2: ${condition1 || condition2}`);
console.log(`!condition1: ${!condition1}`);
let condition3 = false;
let condition4 = true;
console.log(`condition3 && condition4: ${condition3 && condition4}`);
console.log(`condition3 || condition4: ${condition3 || condition4}`);
console.log(`!condition3: ${!condition3}`);
let condition5 = true;
let condition6 = false;
console.log(`condition5 && condition6: ${condition5 && condition6}`);
console.log(`condition5 || condition6: ${condition5 || condition6}`);
console.log(`!condition5: ${!condition5}`);
let condition7 = false;
let condition8 = false;
console.log(`condition7 && condition8: ${condition7 && condition8}`);
console.log(`condition7 || condition8: ${condition7 || condition8}`);
console.log(`!condition7: ${!condition7}`);

// string and template litters 
let stu_name = "Manezha";
let lastName = "Ebrahimi";
let quote = "It's a beautiful day!";
let message = 'He said, "Hello"';
let text = "lorem ipsum dolor sit amet, consectetur adipiscing elit. \nThis is a new line.";
let text1 = "lorem ipsum dolor sit amet, consectetur adipiscing elit. \"This is a new line.\"";
console.log(quote);
console.log(message);
console.log(text);
console.log(text1);
console.log(stu_name.length);
let fullName = `${stu_name} ${lastName}`;
fullName = stu_name + "" + lastName;
console.log(`Full Name: ${fullName}`);
let message1 = `He said "Hello" then he said, It's a beautiful day`;
console.log(message1);

// control flow statments
// syntax error example 
// If (condition) {.....}
let temp = 35
if (temp > 30) {
    console.log("It's a hot day.");
}

// If (condition) {.....} else {.....}
let temp1 = 25
if (temp1 > 30) {
    console.log("It's a hot day.");
} else{
    console.log("It's a pleasant day.");
}

// If (condition) {.....} else if (condition) {.....} else {.....}
let score = 90;
let grade;
if (score >= 90) {
    grade = "A";
}
else if (score >= 80) {
    grade = "B";
}
else if (score >= 70) {
    grade = "C";
}
else if (score >= 60) {
    grade = "D";
}
else {
    grade = "F";
}
console.log(`Score: ${score}, Grade: ${grade}`);

// nesteed if statements 
let age1 = 21;
if (age1 >= 18) {
    console.log("You are an adult.");
    if (age1 >= 21) {
        console.log("You can go to resturants with friends.");
        if (age1 >= 25) {
            console.log("You can rent a car.");
        }
    } else {
        console.log("You cannot go to resurants with friends.");
    }
}