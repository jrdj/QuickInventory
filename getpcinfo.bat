@ECHO OFF

TITLE Quickie Inventory
ECHO ============================
ECHO System information saved...
ECHO ============================
echo opening data.csv

set exzel=data.csv
echo ---------------------- >> %exzel%
echo Start of %computername% Quick Specs >> %exzel%
echo ---------------------- >> %exzel%
wmic baseboard list brief >> %exzel%
wmic cpu get name >> %exzel%
wmic diskdrive get name, model, size >> %exzel%
wmic MEMORYCHIP get BankLabel, DeviceLocator, Capacity >> %exzel%
wmic path win32_videocontroller get name >> %exzel%
echo ---------------------- >> %exzel%
echo End of %computername% Quick Specs >> %exzel%
echo ---------------------- >> %exzel%

set params=%*
start excel "data.csv" /e/%params%

PAUSE
#del data.csv

