// function addNumber(){
//     let number = 0;
//     while (number <= 12){
//         console.log(number);
//         number += 2;
//     }
// }

// addNumber(); 

// for (number = 0; number <= 12; number +=2){
//     console.log(number);
// }
// for (current = 20; current += 1;){
//     if (current % 7 == 0){
//         console.log(current);
//         break;
//     }
// }
// switch (prompt("what is the weather like?")){
//     case "rainy":
//         console.log("Remember to bring umbrella");
//         break;
//     case "sunny":
//         console.log("dress lightly");
//         break;
//     case "cloudy":
//         console.log("go outside");
//         break;
//     default:
//         console.log("unknow weather type!");
//         break;   
// }

//make a start
// let b = "";
// for (a = 1; a <=7; a += 1){
//         b += "#";
//         console.log(b);
// }

//make devide 3 or 5
for (i=1; i<=100; i+=1){
    if (i%3 === 0 && i%5 === 0){
      console.log("FizzBuzz");
    } else if (i%5 === 0){
      console.log("Buzz");
    } else if (i%3 === 0){
      console.log("Fizz");
    } else {
      console.log(i);
    }
  }
