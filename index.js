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
let fname = 'Saroj';
let lname = 'Shrestha';
let age = prompt("Guess Ryan's age... ");

//old way
// let result = fname + ' ' + lname + ' is ' + age + ' years old.';
// alert(result)

//using tempalte string;

let result = `${fname} ${lname} is ${age} years old.`;
alert(result);