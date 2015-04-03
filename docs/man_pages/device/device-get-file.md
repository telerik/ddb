device run
==========

Usage | Syntax
------|-------
General | `$ ddb device get-file [--app <Application ID>] [--device <Device ID>]`
Runs the selected application on a connected iOS device.


Options:
   * `--device` - If multiple devices are connected, sets the device on which you want to run the app.
        You can run this command on one connected device at a time.
   * `--app` - is the application identifier as listed by `$ ddb device list-applications` 
<% if(isHtml) { %> 

#### Related Commands

Command | Description
----------|----------
[device ios](device-ios.html) | Lists all recognized connected iOS devices with serial number and index.
[device list-applications](device-list-applications.html) | Lists the installed applications on all connected iOS devices.
[device log](device-log.html) | Opens the device log stream for a selected connected device.
[device run](device-run.html) | Runs the selected application on a connected iOS device.
[device](device.html) | Lists all recognized connected devices with serial number and index, grouped by platform.
<% } %>