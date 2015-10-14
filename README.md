## appium-ios-log

[![NPM version](http://img.shields.io/npm/v/appium-ios-log.svg)](https://npmjs.org/package/appium-ios-log)
[![Downloads](http://img.shields.io/npm/dm/appium-ios-log.svg)](https://npmjs.org/package/appium-ios-log)
[![Dependency Status](https://david-dm.org/appium/appium-ios-log/master.svg)](https://david-dm.org/appium/appium-ios-log)
[![devDependency Status](https://david-dm.org/appium/appium-ios-log/master/dev-status.svg)](https://david-dm.org/appium/appium-ios-log/master#info=devDependencies)

[![Build Status](https://api.travis-ci.org/appium/appium-ios-log.png?branch=master)](https://travis-ci.org/appium/appium-ios-log)
[![Coverage Status](https://coveralls.io/repos/appium/appium-ios-log/badge.svg?branch=master)](https://coveralls.io/r/appium/appium-ios-log?branch=master)


Access to iOS system, crash, and performance logs.

On real devices, realtime system log capture is through [libimobiledevice](http://www.libimobiledevice.org/)'s `idevicesyslog`. If this is not installed, the system falls back to [deviceconsole](https://github.com/rpetrich/deviceconsole), which is bundled with the Appium server.

### Usage

The `appium-ios-log` package exports three classes, `IOSLog`, `IOSCrashLog`, and `IOSPerformanceLog`.


`IOSLog`

Instantiated with an options hash with the following parameters:

- `sim` - simulator object
- `udid` - unique identifier of real device
- `showLogs` - whether or not to output logs into the log stream. Defaults to `false`

One of `sim` or `udid` is needed. In the case of running against a simulator, `sim`, and against a real device, `udid`.

`IOSCrashLog`

Instantiated with a directory in which the crash logs will be stored. Defaults to `Library/Logs/DiagnosticReports` in the home directory of the user under whom the device process is running.

`IOSPerformanceLog`

Instantiated with an instance of [appium-remote-debugger](https://github.com/appium/appium-remote-debugger) and an optional number, which is the maximum number of performance log events to be saved. Any log events over this limit will cause the oldest event to be dropped. Defaults to `5000`.

#### API

All three classes, `IOSLog`, `IOSCrashLog`, and `IOSPerformanceLog`, provide four `async` methods:

`startCapture()`

Start log capture.

`stopCapture()`

Stop log capture.

`getLogs()`

Retrieve the logs since the last time `getLogs()` was called.

`getAllLogs()`

Retrieve all the logs which have been captured.
