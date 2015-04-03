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