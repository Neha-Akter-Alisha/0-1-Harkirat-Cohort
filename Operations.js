//Arithmetic Operation
let c = 10;
let d = 5;
console.log("c =", c);
console.log("d =", d);
console.log("c+d =", c+d);//Plus
console.log("c-d =", c-d);//Minus
console.log("c*d =", c*d);//Multiply
console.log("c/d =", c/d);//Divide
console.log("c % d =", c % d);//Modulus
console.log("c**d =", c**d);//Expentiations
console.log("c =", c);
c++;//Increment
console.log("c++ =", c);
console.log("d =", d);
d--;//Decrement
console.log("d-- =", d);


//Asignment Operations
let e = 5;
let f = 2;
e += 4;//-= , *= , /= etc are also assignment operations
console.log("e = ", e);
console.log("f = ", f);


//Comparison Operations
//Equal to == , not equal to != , Equal to & type === , Not equal to & type !==
console.log("e == f", e==f);//false
console.log("e != f", e!=f);//true
let g = 5;//number
let h = "5";//-->string-->number
console.log("g == h", g==h);//true--> here JS first convert string to number then match that's why it shows true
console.log("g === h", g===h);//false --> this is bcz === is a strict version of == which won't let match strings and numbers
console.log("g !== h", g!==h);//true


// Logcal Operations
// AND(&&)-->
let con5 =f<e;//true(0)
let con6 =f!=e;//true(0)
console.log("con5 && con6 =", con5 && con6);//true(0)
let con1 =f<e;//true(0)
let con2 =f==e;//false(1)
console.log("con1 && con2 =", con1 && con2);//false(1)
let con7 =f>e;//false(1)
let con8 =f!=e;//true(0)
console.log("con7 && con8 =", con7 && con8);//false(1)
let con3 =f>e;//false(1)
let con4 =f==e;//false(1)
console.log("con3 && con4 =", con3 && con4);//false(1)


//OR(||-->
let con9 =f<e;//true(0)
let con10 =f!=e;//true(0)
console.log("con9 || con10 =", con9 || con10);//true(0)
let con11 =f<e;//true(0)
let con12 =f==e;//false(1)
console.log("con11 || con12 =", con11 || con12);//true(0)
let con13 =f>e;//false(1)
let con14 =f!=e;//true(0)
console.log("con13 || con14 =", con13 || con14);//true(0)
let con15 =f>e;//false(1)
let con16 =f==e;//false(1)
console.log("con15 || con16 =", con15 || con16);//false(1)


//NOT of(!)--> This will give us opposite value.E.G
let i = 10;
let j = 8;
console.log("!(i>j) =",!(i>j));//condition is true but it will show false bcz we used not of



