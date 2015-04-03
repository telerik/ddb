device log
==========

Usage | Syntax
------|-------
General | `$ ddb device log --device <Device ID>`
Opens the device log stream for a selected connected device. 

`<Device ID>` is the device index or identifier as listed by `$ ddb device`
Options:
   * `--device` - If multiple devices are connected, sets the device for which you want to stream the log in the console.
<% if(isHtml) { %> 

#### Related Commands

Command | Description
----------|----------
[device](device.html) | Lists all recognized connected devices with serial number and index, grouped by platform.
[device ios](device-ios.html) | Lists all recognized connected iOS devices with serial number and index.
[device list-applications](device-list-applications.html) | Lists the installed applications on all connected iOS devices.
[device log](device-log.html) | Opens the device log stream for a selected connected device.
[device run](device-run.html) | Runs the selected application on a connected iOS device.
[device uninstall](device-uninstall.md) | Uninstalls the selected application from a connected device.
[device list-files](device-list-files.md) | Recursively lists all files and directories, starting at the root or given path.
[device get-file](device-get-file.md) | Reads the selected file from a connected device.
[device put-file](device-put-file.md) | Writes the selected file to a connected device.
<% } %>