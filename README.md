# Intro on Javascript:-

- javascript is high level programming language for building web application more efficient way.
- javascript works as both client side as well as server side rendering.
- javascript comes from echma-script, so we see the latest if javascript in form of echma-script.
- Now we use javascript version 6 i.e ES6(echma script 6).
- In another way we called ES6 as the vanilla javascript.
- javascript is mainly used for building logics or functionality of web pages.

# Variable:-

- variable is a container to store some data.
- there are 3 types of variable present over the javascript.

1. let: 
    - let is a type of variable which is used for changing the variable name later.
    - Now these days, most of the cases we used let for creating variable.
    - let is block scope code, so we have been using let for most cases.
2. var:
    - var is a type of variable which is also used for changing the variable later stage.
    - var is used in oldest browser, so nowadays we don't use var most of the cases.
3. const:
    - const is a type of variable where we can't change our data furthur.
    - const means constant to store some data like numbers, integer etc.

# Rules for creating variable name:-

- variable names are case sensative "a" & "A" is different.
- only letter, digit, underscore & "$" is allowed(not even space)
- only letter, underscore & "$" should be the 1st character.
- reserved words can't be variables name(for, switch, break, continue)


# Homework:-

1. diff between let $ var
2. diff between var $ const,
3. what do you mean by hoasting.

# Data-types in JS:-

- datatypes is an attribute associated with a piece of data that tells a computer system how to interpret its value.
- In data types we use "typeof" operator to know what type of data it is.
- There are 2 types of data types in JS:-

1. primitive:-
    - in JS there are 7 types of primitive datatypes.
    1. number: number are the type of datatypes those it contain some numerical values.
    2. boolean: In boolean data types we get boolean value like true, false.
    3. undefined: In undefined data types the data is not defined so that it will show undefined
    4. null: In this data type we get null for the value means nothing
    5. bigint: in bigint we will get big integer value
    6. symbol: In symbol we will get whole symbol as well as the value we get for the data type
    7. string: String is a type of data type that can hold some character like names...

2. reference / non-primitive:-
    - non-primitive datatype are the type of data that can hold multiple items in a single time.
    - non-primitive datatype types are - objects, array, function etc...
    - objects is non-primitive data type which can hold multiple of items in one single entity.
    - mainly objects are working on (key:value) pair.
    - the left side part is our keys of objects & right side parts are the objects of the project.
    ex: object-

    let student = {
        name : akash,
        mob-no : 454658464,
        college : "GIFT"
    }

Operator in JS:-
- operator are the key features to do some task or operate some task.
- ex, A + B
- in this case above example A, B are the operands and "+" is the operator,
- There are 5 typs of operator in JS:
1. arithmetic operator
    (+, -, *)
    modulus - %
    exponentiation - **

2. unary operator
    increment(++)
    decrement(--)

3. assignment operator
    (assign some values to the variables)
    (=, +=, -=, *=, %=. **=)

4. comparison operator
    (compare values)
    (it gives result true, false)
    equal to ==
    not equal !=
    equal to & type ===
    not equal to & type !==

5. logical operator
   (Checks the logic of the operator(true/false))

   * logical AND(&&)  -->> table of logical AND operator is-->>
   cond1   cond2   res(&&)
   T        T       T
   T        F       F
   F        T       F
   F        F       F

   Logical OR(||)-->>

   cond1     cond2     res(||)
   T           T          T
   T           F          T
   F           T          F
   F           F          F

   logical Not (!)

# conditional statment :---

- To implement some condition in the code.
- there are 3 types of conditiomal ststement are there

1. if condition :-

- if condition is true then ststement is true otherwise false.
syntax -
 if(condition){
    statement
 }

 2. if-else condition-->>
    - if condititon is true then if block is executed otherwise its terminate to else condtion.
    Syntax --
    if(condition){
         statment
    
    }else {
        statment
    }

3. else-if condtion-->>
  - its check the condition multiple times where the condtion is true.
  syntax --
  if(Condition){
    statement
  }else if(condition){
    statment
  }else if(condition){
    statement
  }else{
    stamenet
  }









function definition :-

 function functionname(parameter){
    // do some work
 }

 function calling :- functionname(arguments);