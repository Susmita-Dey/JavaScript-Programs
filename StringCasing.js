// Change the first character of your name to Uppercase and print Hello {your_name}.

var name = prompt("What is your name?")
name = (name.slice(0,1)).toUpperCase() + name.slice(1,name.length);
alert("Hello "+ name);
