# comprehensiveJS
## Deeper level concepts dealing with JavaScript
BIG WORDS:

#### Syntax Parser: This is simply a program that reads your code and determines if it is valid syntacticly and what it does. 

#### Lexical Environment: Where something physically sits in the code you write.
 
#### Execution Context (SCOPE): A wrapper to help manage the code that is running.
There are many different lexical environments. Which one is running is managed by execution context. It can contain things beyond what you have written in your code.
    
#### Objects in JavaScript are just name: value pairs

#### Execution context (scope) has 2 phases when being created. The first one is called creation phase or setup phasethis is where the global (window) object is created, 'this', and Outer Environment. It is where Hoisting takes place. Variable are setup and assigned to undefined, functions are also setup at this time.

#### The Second phase in Execution Context is the Execution phase, this is where it executes the code you have written line by line.

#### JS behaves in a single threaded manner, meaning one command is run at a time.

#### JS is also synchronous means the code is executed one at a time and in order

#### In JS there is a difference between `func()` and just `func`. `func()` invokes the function (it gets ran) and `func` just references the function

#### Each time a function is called a new execution context (scope) is created and push to the stack, when it is done running that function it is then popped off the stack

#### Variable Environment: This is simply where the variables live. Globally, function scope, or even block level scope with ES6 `let`

#### Scope Chain: This deals with where function calls sit lexically and how they have references to out execution contexts.

The following code's myVar will be 2.

```javascript
	function a() {
	    function b() {
		console.log(myVar);
		//no myVar here...
	    }
	    myVar = 2;
	    b();
	}

	var myVar = 1;
	a(); 
```
In this snippet of code myVar will be 1.
```javascript
	function b() {
		console.log(myVar);
	}

	function a() {
		var myVar = 2;
		b();
	}

	var myVar = 1;
	a();
```
These two functions return different values due to where the code sits lexically. In the first snippet `b` is defined inside of `a` so when `b` is unable to find `myVar` it steps out one execution context to `a` where it is defined and logs 2 to the console. The second snippet of code logs 1 becaue both `a` and `b` are defined lexically in the global execution context so when `b` cant find `myVar` it steps out to the global execution context looking for `myVar` and finds it and the value it holds is 1.
