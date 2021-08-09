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

/*v2.1 DEFAULT PARAMETERS */
// function welcome(user = "Mystery Person", message = "Good Day") {
//     alert(`Hello ${user} !! ${message}`)
// }

// welcome('Saroj', 'Good Morning');
// welcome();

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

let nepal = {
    //add property
    mountains: ['Everest', 'Fish Tail', 'Annapurna'],

    //add method
    printWithDash: function() {
        // console.log('inside printWithDash', this);
        setTimeout(() =>  
            // console.log('inside setTimeout', this);
            console.log(this.mountains.join(" - "))
        , 3000)
    }
}

// alert(nepal.mountains);
nepal.printWithDash();