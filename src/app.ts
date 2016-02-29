// import {Config, Services} from "./implementation/config/config";
//
// var user = Services.userService.getCompleteUser('1').then((user) => {
//   console.log(user.addresses);
// });


// import t = require("tsmvc");
import {Dog} from "./example";

export class Cat {
  private name: string;

  constructor() {
    this.name = "minie";
  }
}

let d: Dog = new Dog();
console.log(d.name);
