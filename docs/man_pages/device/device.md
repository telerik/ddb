device
==========

Usage | Syntax
------|-------
General | `$ ddb device [<Command>]`

Lists all recognized connected devices with serial number and index. In this version of the Telerik DDB CLI,
you can connect only iOS devices.

`<Command>` is a related command that extends the device command. You can run the following related commands:
* ios - Lists all recognized connected iOS devices.
* log - Opens the device log stream for a selected connected device.
* list-applications - Lists the installed applications on all connected iOS devices.
* run - Runs the selected application on a connected iOS device.
* uninstall - Uninstalls the selected application from a connected device.
* list-files - Recursively lists all files and directories, starting at the root or given path.
* get-file - Reads the selected file from a connected device.
* put-file - Writes the selected file to a connected device. 
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