"use strict";
exports.__esModule = true;
var StringManipulations = /** @class */ (function () {
    function StringManipulations() {
    }
    StringManipulations.prototype.print = function (word) {
        console.log("String is = " + word);
        console.log("Uppercase = " + word.toUpperCase());
        console.log("Lower case = " + word.toLowerCase());
        console.log("Char at particular position = " + word.charAt(2));
        console.log("Concate string = " + word.concat(word.toString()));
        console.log("Slice string = " + word.slice(2, 4));
        console.log("Length of string = " + word.length);
    };
    StringManipulations.prototype.printWithSpace = function (sentences) {
        console.log("String with spaces = " + sentences.split("").join(" "));
    };
    StringManipulations.prototype.findVowel = function (str) {
        var vowel_list = "aeiouAEIOU";
        var count = 0;
        for (var i = 0; i < str.length; i++) {
            if (vowel_list.indexOf(str[i]) !== -1) {
                count += 1;
            }
        }
        console.log("Number of vowels = " + count);
    };
    return StringManipulations;
}());
var NumbersManipulations = /** @class */ (function () {
    function NumbersManipulations() {
    }
    NumbersManipulations.prototype.findPrime = function (num) {
        var flag = true;
        for (var i = 2; i < num; i++) {
            if (num % i == 0) {
                flag = false;
                break;
            }
            if (flag == true) {
                console.log(num + " is prime.");
            }
            else {
                console.log(num + " is not prime.");
            }
        }
    };
    NumbersManipulations.prototype.findMagic = function (num) {
        var temp = num;
        var sum = 0;
        while (num > 0 || sum > 9) {
            if (num == 0) {
                num = sum;
                sum = 0;
            }
            sum += num % 10;
            num = num / 10;
        }
        if (sum == 1) {
            console.log("So " + temp + " is a magic number.");
        }
        else {
            console.log("So " + temp + " is not a magic number.");
        }
    };
    return NumbersManipulations;
}());
var str = "hey Prograds";
var num = 99;
var onef = new StringManipulations();
onef.findVowel(str);
onef.print(str);
onef.printWithSpace(str);
var twof = new NumbersManipulations();
twof.findPrime(num);
twof.findMagic(num);
