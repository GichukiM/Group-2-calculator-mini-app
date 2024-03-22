# CALCULATOR MINI APP

## INSTALL PROMPT-SYNC IN YOUR TERMINAL 

Click on the links below to read and understand the Documentation on "Prompt is not Defined" error and to check on some of the solutions given.

##### geeksforgeeks
https://www.geeksforgeeks.org/javascript-is-showing-reference-error-prompt-is-not-defined/

##### codecademy
https://www.codecademy.com/article/getting-user-input-in-node-js

### INSTALL PROMPT-SYNC PACKAGE 

Confirm that you have node and npm and then run the code below:

```
 npm install prompt-sync

```

We will then have to assign the prompt to a variable as shown below:

```

const prompt = require("prompt-sync")({ sigint: true });

```

The prompt-sync module is a function that creates prompting functions, so you need to call prompt-sync in order to get your actual prompting function.

"sigint" - SIGNAL INTERRUPT - is used to indicate user wants to exit the program

We will then assign the prompt function to variable to return a value to use later in the program  eg:

```

let operator = prompt("Enter Operator: ");


```

The variable above (let operator = ...) and any other code written in this project repository will change depending on the project you are doing.

