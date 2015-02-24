///<reference path=".d.ts"/>
"use strict";

require("./bootstrap");

import errors = require("./common/errors");
errors.installUncaughtExceptionListener();

$injector.register("config", {
	CI_LOGGER: false
});

$injector.register("staticConfig", { });
$injector.register("analyticsService", {
	checkConsent(commandName: string) => {

	},
	trackFeature(commandName: string) => {

	}
});

var dispatcher = $injector.resolve("dispatcher");
dispatcher.runMainFiber();