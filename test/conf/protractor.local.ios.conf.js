const { join } = require('path');
let config = require('./protractor.shared.conf').config;

config.specs = [ '../mobile.spec.ts' ];

config.seleniumAddress = 'http://localhost:4726/wd/hub';

config.multiCapabilities = [
	{
		browserName: 'safari',
		deviceName: 'iPad Pro (12.9-inch) (3rd generation)',
		logName: 'iPadPro12.9.3rdGeneration',
		platformName: 'ios',
		platformVersion: '12.1'
	},
	{
		browserName: 'safari',
		deviceName: 'iPad Pro (12.9-inch) (2nd generation)',
		logName: 'iPadPro12.9.2nd',
		platformName: 'ios',
		platformVersion: '12.1'
	},
	{
		browserName: 'safari',
		deviceName: 'iPad Pro (9.7-inch)',
		logName: 'iPadPro9.7',
		platformName: 'ios',
		platformVersion: '12.1'
	},
	{
		browserName: 'safari',
		deviceName: 'iPad Air',
		logName: 'iPad Air',
		platformName: 'ios',
		platformVersion: '12.1'
	},
	{
		browserName: 'safari',
		deviceName: 'iPhone 8',
		logName: 'iPhone8',
		platformName: 'ios',
		platformVersion: '12.1'
	},
	{
		browserName: 'safari',
		deviceName: 'iPhone X',
		logName: 'iPhoneX',
		platformName: 'ios',
		platformVersion: '12.1'
	}
];

config.plugins = [
	{
		path: join(process.cwd(), './build/index.js'),
		options: {
			baselineFolder: join(process.cwd(), './localBaseline'),
			debug: false,
			formatImageName: `{tag}-{logName}-{width}x{height}`,
			screenshotPath: join(process.cwd(), '.tmp/'),
			savePerInstance: true,
			autoSaveBaseline: true,
			blockOutStatusBar: true,
			blockOutToolBar: true,
		},
	},
];

exports.config = config;
