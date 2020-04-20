import { StringManipulationService } from "./main-service";
import { NumberManipulationService } from "./main-service";

class StringManipulations implements StringManipulationService {
  print(word: string): void {
    console.log("String is = " + word);
    console.log("Uppercase = " + word.toUpperCase());
    console.log("Lower case = " + word.toLowerCase());
    console.log("Char at particular position = " + word.charAt(2));
    console.log("Concate string = " + word.concat(word.toString()));
    console.log("Slice string = " + word.slice(2, 4));
    console.log("Length of string = " + word.length);
  }
  printWithSpace(sentences: string): void {
    console.log("String with spaces = " + sentences.split("").join(" "));
  }
  findVowel(str: string): void {
    let vowel_list: string = "aeiouAEIOU";
    let count: number = 0;
    for (let i = 0; i < str.length; i++) {
      if (vowel_list.indexOf(str[i]) !== -1) {
        count += 1;
      }
    }
    console.log("Number of vowels = " + count);
  }
}

class NumbersManipulations implements NumberManipulationService {
  findPrime(num: number): void {
    var flag: boolean = true;
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        flag = false;
        break;
      }
      if (flag == true) {
        console.log(num + " is prime.");
      } else {
        console.log(num + " is not prime.");
      }
    }
  }
  findMagic(num: number): void {
    let temp: number = num;
    var sum: number = 0;
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
    } else {
      console.log("So " + temp + " is not a magic number.");
    }
  }
}

let str: string = "hey Prograds";
let num: number = 99;
var onef = new StringManipulations();
onef.findVowel(str);
onef.print(str);
onef.printWithSpace(str);

var twof = new NumbersManipulations();
twof.findPrime(num);
twof.findMagic(num);
