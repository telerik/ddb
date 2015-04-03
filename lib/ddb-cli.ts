///<reference path=".d.ts"/>
"use strict";

require("./bootstrap");
import staticConfigBaseLib = require("./common/static-config-base");
import Fiber = require("fibers");
import Future = require("fibers/future");
import errors = require("./common/errors");
errors.installUncaughtExceptionListener();

$injector.register("config", {
	CI_LOGGER: false
});

class StaticConfig  extends staticConfigBaseLib.StaticConfigBase {
	public get disableAnalytics():boolean {
		return true;
	}

	public get disableHooks():boolean {
		return true;
	}
}

$injector.register("staticConfig", StaticConfig);
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
	},
	getPlatformNames: (): string[] => {
		return ["iOS"];
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

