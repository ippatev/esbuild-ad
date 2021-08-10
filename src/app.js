function App() {}
App.prototype.sayHello = function () {
  console.log("hello");
};

class App2 {
  sayHello() {
    console.log("hello");
  }
}

App.sayHello();
App2.sayHello();
