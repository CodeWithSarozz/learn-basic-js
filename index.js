/* v0.1 CREATING VARAIBLE WITH VAR (value can be changed overtime) */
// var var_name = "Ryan";
// var_name = 'Zen'; //overrides to previous same variable
// alert(name);

/* v0.1 CREATING VARIABLE WITH CONST (whose  value cannot be changed) */
// const const_name = 'Ryan';
// it will show error since u can't override const variable 
// const_name = 'Zen'; 
// alert(const_name);

/* v0.2 CREATING VARIABLE WITH LET */
// if (true) {
//     let let_name = 'Ryan';
//     let_name = 'Zen'; //let variable can be override
//     // alert(let_name); //alerts let_name
// }
// alert(let_name); //doesn't alert (*Uncaught ReferenceError: let_name is not defined)

/* v1.1 TEMPLATE STRING (added in ES) */
// let fname = 'Saroj';
// let lname = 'Shrestha';
// let age = prompt("Guess Ryan's age... ");

//old way
// let result = fname + ' ' + lname + ' is ' + age + ' years old.';
// alert(result)

//using tempalte string;

// let result = `${fname} ${lname} is ${age} years old.`;
// alert(result);

//--------------------------------------------------------------------

/*v2.1 DEFAULT PARAMETERS */
// function welcome(user = "Mystery Person", message = "Good Day") {
//     alert(`Hello ${user} !! ${message}`)
// }

// welcome('Saroj', 'Good Morning');
// welcome();

//--------------------------------------------------------------------

/* v3.1 ARROW FUNCTIONS */
//normal function

// function greeting(message) {
//     return alert(`${message} everyone!`);
// }

//arrow function
// let greeting = message => alert(`${message} everyone!`);

// greeting("Good");

//arrow function with multiple code
// let createBlog = (title, body) => {
//     if (!title) {
//         throw new Error("A title is required");
//     }

//     if (!body) {
//         throw new Error("A Body can't be empty");
//     }

//     return alert(`${title} - ${body}`);
// };

// createBlog('Blog Title', 'This is blog body');

//v3.2 THIS KEYWORD
// function sayHi() {

// }

// console.log(this);

// let nepal = {
//     //add property
//     mountains: ['Everest', 'Fish Tail', 'Annapurna'],

//     //add method
//     printWithDash: function() {
//         // console.log('inside printWithDash', this);
//         setTimeout(() =>  
//             // console.log('inside setTimeout', this);
//             console.log(this.mountains.join(" - "))
//         , 3000)
//     }
// }

// alert(nepal.mountains);
// nepal.printWithDash();

//--------------------------------------------------------------------

/* v4.0 DESTRUCTURING OBJECTS */
// let thingsToDo = {
//     morning: "Exercise",
//     afternoon: "Work",
//     evening: "Code",
//     night: ["Sleep", "Dream"]
// };

// let {morning, afternoon} = thingsToDo;
// morning = "Run";
// console.log(`${morning} - ${afternoon}`);

//function argument

// let uniStudent = (student) => {
//     let {name, university} = student;
//     console.log(`${name} from ${university}`);
// }

// let uniStudent = (name, university) => {
//     console.log(`${name} from ${university}`);
// }

// uniStudent({
//     name: 'Saroj Shrestha',
//     university: 'British College'
// });

//v4.2 DESTRUCTING ARRAY
// let [firstMountain] = ['Everest', 'Fishtail', 'Annapurna'];

// console.log(firstMountain);

//v4.3 RESTURING OBJECT
// var name = 'Everest';
// var height = 8848;
// var output = () => {
//     console.log(`Mt.${this.name} is ${this.height}m tall`);
// }

// var adventureClimbing = {name, height, output};
// var adventureClimbing = {
//     name: 'Everest',
//     height: 8848,
//     output() {
//         console.log(`Mt.${this.name} is ${this.height}m tall`);
//     }
// };
// adventureClimbing.output();

//--------------------------------------------------------------------

/* v5.0 SPREAD OPERATORS */
// var mountains = ['Everest', 'Fishtail', 'Annapurna'];
// var mountainsFromJapan = ['Fuji'];

// var allMountains = [...mountains,...mountainsFromJapan];
// console.log(allMountains);

//OBJECT
// var day = {
//     breakfast: 'toast with milk',
//     launch: 'rice with chicken curry'
// };

// var night = {
//     dinner: 'noodle soup'
// };

// var picnic = {...day, ...night}
// console.log(picnic);

//rest
// var rivers = ['Sunkoshi', 'Tamakoshi', 'Saptakoshi'];
// var [first, ...rest] = rivers;

// console.log(rest);

/* v6.0 Class constructor and super */

// function holiday(destination, days) {
//     this.destination = destination
//     this.days = days
// }

// holiday.prototype.info = function() {
//     console.log(this.destination + " | " + this.days + " days");
// }

// var nepal = new holiday("Nepal", 30)

// nepal.info();

//SUPER OR PARENT CLASS
class Holiday {
    constructor(destination, days) {
        this.destination = destination
        this.days = days
    }

    info() {
        console.log(`${this.destination} will take ${this.days} days.`);
    }
}

// console.log(Holiday.prototype);

// const trip = new Holiday('Nepal', 30);
// trip.info();

//v6.1 extend class

//CHILD OR SUB CLASS
class Expedition extends Holiday {
    constructor(destination, days, gear) {
        super(destination, days);
        this.gear = gear;
    }

    info() {
        super.info();
        console.log(`Bring your ${this.gear.join(" and your ")}`);
    }
}

const tripWithGear = new Expedition("Everest", 30, ["Sunglasses", "Flags", "Camera"]);

tripWithGear.info();