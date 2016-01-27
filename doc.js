#!usr/bin/env node

var program = require('program'),
	packageInfo = require('./package.json');

program.version(packageInfo.version)
	   .option('-b, --build', "build components doc")
	   .parse(process.argv);

if (program.build) {
	console.log(process.cwd);
}

