#Device Debug Bridge

Usage | Syntax
------|-------
General | `$ ddb <command> [parameters] [--options <values>]`
    help                            |Shows additional information about the commands in this list.
    device                          |Lists all recognized connected devices.
    device list-applications        |Lists the installed applications on all connected devices.
    device log                      |Opens the log stream for the selected device.
    device run                      |Runs the selected application on a connected device.
    device uninstall                |Uninstalls the selected application from a connected device.
    device list-files               |Recursively lists all files and directories, starting at the root or given path.
    device get-file                 |Reads the selected file from a connected device.
    device put-file                 |Writes the selected file to a connected device.
## Global Options:
Option | Description
-------|---------
    --help, -h, /?        |Prints help about the selected command.
    --version             |Prints the client version.
    --log trace           |Prints a detailed diagnostic log for the execution of the current command.
