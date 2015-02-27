///<reference path=".d.ts"/>
"use strict";

require("./bootstrap");

import Fiber = require("fibers");
import Future = require("fibers/future");
import errors = require("./common/errors");
errors.installUncaughtExceptionListener();

$injector.register("config", {
	CI_LOGGER: false
});

$injector.register("staticConfig", {
	disableAnalytics: true,
	disableHooks: true,
	MAN_PAGES_DIR: "",
	HTML_PAGES_DIR: ""
});
$injector.register("analyticsService", {

});
$injector.register("commandsServiceProvider", {
	registerDynamicSubCommands: () => { },
	getDynamicCommands: (): IFuture<string[]> => {
		return Future.fromResult(<string[]>[]);
	}
});
$injector.register("dynamicHelpProvider",  {
	isProjectType: (args: string[]): IFuture<boolean> => {
		return Future.fromResult(true);
	},
	getLocalVariables: (options: { isHtml: boolean }): IFuture<IDictionary<any>> => {
		return Future.fromResult(<IDictionary<any>>{});
	}
});
$injector.register("mobilePlatformsCapabilities", {
	getAllCapabilities: (): IDictionary<Mobile.IPlatformCapabilities> => {
		return	{
			iOS: {
				cableDeploy: true,
				hostPlatformsForDeploy: ["win32", "darwin"]
			}
		}
	}
});

Fiber(() => {
	var commandDispatcher : ICommandDispatcher = $injector.resolve("commandDispatcher");

	if (process.argv[2] === "completion") {
		commandDispatcher.completeCommand().wait();
	} else {
		commandDispatcher.dispatchCommand().wait();
	}

	$injector.dispose();
	Future.assertNoFutureLeftBehind();
}).run();

