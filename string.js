//at()

const sentence = 'The mad dog jumps over the lazy cat.';

let index = 5;

console.log(`Using an index of ${index} the character returned is ${sentence.at(index)}`);
// Expected output: "Using an index of 5 the character returned is u"

index = -4;

console.log(`Using an index of ${index} the character returned is ${sentence.at(index)}`);
// Expected output: "Using an index of -4 the character returned is d"



//chartAt()
const Sentences = 'The brown fox jumps over the lazy dog.';

const Indexs = 4;

console.log(`The character at index ${index} is ${sentence.charAt(index)}`);
// Expected output: "The character at index 4 is b"


//charCodeAt()
const sentences = 'The quick brown fox jumps over the lazy dog.';

const Index = 4;

console.log(`The character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(index)}`);
// Expected output: "The character code 113 is equal to q"


//codePointAt()
const Icons = '☃★♲';

console.log(Icons.codePointAt(1));
// Expected output: "9733"


//constructor
class Car{

    constructor(make, model, year, color){
      this.make = make;
      this.model = model;
      this.year = year;
      this.color = color;
    }

    drive(){
          console.log("You drive the car!");
        }
    brake(){
          console.log("You step on the brakes!");
        }
      }

  let car1 = new Car("Ford", "Mustang", 2022, "red");
  let car2 = new Car("Chevy", "Corvette", 2021, "blue");

  console.log(car1.make);
  console.log(car1.model);
  console.log(car1.year);
  console.log(car1.color);

  console.log(car2.make);
  console.log(car2.model);
  console.log(car2.year);
  console.log(car2.color);

//concat()
const str11 = 'Hello';
					     const str22 = 'World';

					     console.log(str11.concat(' ', str22));
// Expected output: "Hello World"

					     console.log(str22.concat(', ', str11));
// Expected output: "World, Hello"


//endsWith()

const str3 = 'Cats are the best!';

console.log(str3.endsWith('best!'));
// Expected output: true

console.log(str3.endsWith('best', 17));
// Expected output: true

const str4 = 'Is this a question?';

console.log(str4.endsWith('question'));
// Expected output: false



//fromCharCode()
console.log(String.fromCharCode(189, 43, 190, 61));
// Expected output: "½+¾="


//includes()
const Sentence = 'The mad dog jumps over the lazy cat.';

const word = 'dog';

console.log(`The word "${word}" ${Sentence.includes(word) ? 'is' : 'is not'} in the Sentence`);
// Expected output: "The word "dog" is in the Sentence"



//indexOf()
const paragraph = 'The mad dog jumps over the lazy cat. If the cat barked, was it really lazy?';

const searchTerm = 'cat';
const indexOfFirst = paragraph.indexOf(searchTerm);

console.log(`The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`);
// Expected output: "The index of the first "cat" from the beginning is 32"

console.log(`The index of the 2nd "${searchTerm}" is ${paragraph.indexOf(searchTerm, (indexOfFirst + 1))}`);
// Expected output: "The index of the 2nd "cat" is 44"



