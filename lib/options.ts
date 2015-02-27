///<reference path=".d.ts"/>
"use strict";

import path = require("path");
import osenv = require("osenv");
import commonOptions = require("./common/options");
import hostInfo = require("./common/host-info");

declare var exports: any;

var knownOpts: any = {
		"file": String,
		"app": String
	},
	shorthands: IStringDictionary = {
		"f": "file"
	};

_.extend(commonOptions.knownOpts, knownOpts);
_.extend(commonOptions.shorthands, shorthands);

var defaultProfileDir = "";
var blackDragonCacheFolder = "Telerik/BlackDragon";
var appBuilderCacheFolder = ".ddb-cli";
if(hostInfo.isWindows()) {
	defaultProfileDir = path.join(process.env.LocalAppData, blackDragonCacheFolder, appBuilderCacheFolder);
} else {
	defaultProfileDir = path.join(osenv.home(), ".local/share", blackDragonCacheFolder, appBuilderCacheFolder);
}

commonOptions.setProfileDir(defaultProfileDir);
var errors: IErrors = $injector.resolve("errors");
_(errors.validateArgs("ddb", commonOptions.knownOpts, commonOptions.shorthands)).each((val,key) => {
	key = shorthands[key] || key;
	commonOptions[key] = val;
}).value();

exports.knownOpts = knownOpts;
exports.shorthands = shorthands;
export = exports;