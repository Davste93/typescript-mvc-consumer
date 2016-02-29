"use strict";
var config_1 = require("./implementation/config/config");
var user = config_1.Services.userService.getCompleteUser('1').then(function (user) {
    console.log(user.addresses);
});
//# sourceMappingURL=app.js.map