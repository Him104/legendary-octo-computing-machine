* Non-Blocking I/O : Nodejs uses an event loop to manage asynchronous operations. This allows other tasks to run while waiting for a task.

* Asynchronous Programming in Node.js

Asynchronous programming allows you to perform long running tasks, for instance : file I/O, network requests without blocking execution of other programs. This is a core concept of Node.js, enabling it to handle multiple requests simulataneously.


1. Callbacks

A callback is a function that is passed as an argument to another function and executed after the completion of the asynchronous operation. while useful, callbacks can sometimes lead to "callback hell" when nested deeply.