# Example Settings Tab

## Introduction

This example show how can you use settings tab in CloudUx.

## Settings Tab
To add settings tab follow [guide](http://developer.avid.com/mcux_ui_plugin/clux-api/settings/system-settings-api.html "Avid Developers").
Settings tab allow you to put your application in **User Settings**.
To see it just click on your avatar and select **User Settings**

![Alt text](screenshots/menu-entry.png "package.json")

In this example in your User Settings window you can see test **Test Tab**.

![Alt text](screenshots/SettingsTab.png "package.json")

##### Change Tab
If you want to change tab you can do it in
[settingsTabEntry](src/avid_api/settings-tab/settingsTabEntry.js "Settings Tab").
**index** will change positions of your tab, **displayName** will change
displayed name of your tab.

![Alt text](screenshots/settingsTabEntry.png "package.json")

If you want to change tab content you can do it in
[UserTabSettings](src/avid_api/settings-tab/UserTabSettings.js "User Tab Settings").
And add more html to **domElement**

![Alt text](screenshots/UserTabSettings.png "package.json")

## Running the example

To run example you will need running MediaCentral CloudUX server. properties
can we changed in [src/project.act](src/project.act "Project act").
After you change hostIp in `project.act` you can run application.
cli type:
1. `npm install`
2. `npm start`
3. Go to your [localhost](https://127.0.0.1:8080/ "Localhost").

