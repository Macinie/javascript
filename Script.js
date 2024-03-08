  let Name = "Christian Mark";
  let heading = "h1";
let color = "green";
document.write("<" + heading + " style='color:" + color + "'>Welcome, " + Name + "</" + heading + ">");
document.write("<br>");

let num1 = 34;
let num2 = 3;
let sum = num1 + num2;
let dif = num1 - num2;
let pro = num1 * num2;
document.write("The Sum of " +num1+ " and " + num2 + " is " + sum + "<br>");
document.write("The Difference of " +num1+ " and " + num2 + " is " + dif + "<br>");
document.write("The Product of " +num1+ " and " + num2 + " is " + pro + "<br>");
document.write("<br>");

let x1 = 2;
let x2 = 1;
let x3 = 3;
let x4 = 6;
let ave = (x1 + x2 + x3 + x4) / 4;
document.write("The Average of " + x1 + ", " + x2 + ", " + x3+ " and " + x4 + " is " + ave + "<br>");
document.write("<br>");

let num = 200;
if (num > 0) {
    document.write("The given number, " + num+  ", has a  positive value." + "<br>");
} else if (num < 0) {
    document.write("Thegiven number, " +num + ", has a negative value." + "<br>");
} else {
    document.write("The given  number has a value of zero." + "<br>");

}
document.write("<br>");

let str1 = "Hello";
let str2 = "Hi";
if (str1 === str2) {
    document.write("The given strings, which are " +str1+ " and " + str2 + " are the same." + "<br>");
} else {
    document.write("The given strings, whic are " +str1+ " and " + str2 + " are different." + "<br>");
}

document.write("<br>");
let limit = 5;
document.write("<ul>" + "The numer from 1 to " + limit);
for (let i = 1; i <= limit; i++) {
    document.write("<li>" + i + "</li>");
}
document.write("</ul>");


