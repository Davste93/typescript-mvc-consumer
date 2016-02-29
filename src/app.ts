import {Config, Services} from "./implementation/config/config";

var user = Services.userService.getCompleteUser('1').then((user) => {
  console.log(user.addresses);
});
