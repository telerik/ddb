var util = require("util");

var now = new Date().toISOString();

function shallowCopy(obj) {
	var result = {};
	Object.keys(obj).forEach(function(key) {
		result[key] = obj[key];
	});
	return result;
}

module.exports = function(grunt) {
	grunt.initConfig({
		ts: {
			options: {
				target: 'es5',
				module: 'commonjs',
				sourceMap: true,
				declaration: false,
				removeComments: false,
				noImplicitAny: true
			},

			devlib: {
				src: ["lib/**/*.ts"],
				reference: "lib/.d.ts"
			}
		},
		
		clean: {
			src: ["lib/**/*.js*", "!lib/common/vendor/*.js", "!lib/common/hooks/**/*.js", "*.tgz"]
		}
	});

	grunt.loadNpmTasks("grunt-shell");
	grunt.loadNpmTasks("grunt-ts");

	grunt.registerTask("default", "ts:devlib");
};
