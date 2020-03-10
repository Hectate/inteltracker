# inteltracker

> A live tracker for speedrunners of No One Lives Forever.

# Download
The latest version can be found on the [releases page](https://github.com/Hectate/inteltracker/releases/latest/). View the "assets" attached to each release for the zip archive.

## To use

As noted above, Windows builds are attached to the project as a Github release. Download and extract the contents of the zip file, and then launch ``inteltracker.exe``.

**Note that you need to set the path to the NOLF folder in Settings for the tracker to work.** ``CTRL + S`` can be used as a shortcut to open and close the Settings screen, or you can press the Settings button in the top right corner of the window (it disappears if the mouse is not over the window). Setting the path is required so the tracker can locate and watch for changes in the ``intel.sav`` file.

You may freely delete the ``intel.sav`` file or ``\Save`` folder without effecting the tracker negatively. It will happily clear the list, and later begin updating again if the save file is recreated and populated by the game.

### Building From Source
You may use the ``build`` instructions below to create it yourself on your machine from the source code. Be sure to run ``install`` first to install the dependencies. There may be other prerequisites for building an electron application that are required as well. If you need help building, first check the [official electron website](https://www.electronjs.org/) for documentation.

## Known issues

### Unable to capture window using streaming software
Due to how newer versions of Windows works, you may be unable to capture an image of the window using desktop streaming software. If this happens, try changing compatability settings on the executable. You should set the executable properties to "Run this program in compatibility mode for: Windows 8".

### Reporting issues
You may report issues, feedback, or suggestions to this Github project or directly to me in the NOLF Discord channel.

If you are so inclined, it is possible to get *some* debugging information from the program by launching it in debug mode and then accessing the debug console in a separate Chrome browser window.
* Launch IntelTracker in remote debug mode:
* ``inteltracker.exe --remote-debugging-port=8315``
* Open a Chrome browser window and go to the URL ``http://localhost:8315``
* Click the ``inteltracker`` link, and then the Console tab.

#### Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:9080
npm run dev

# build electron application for production
npm run build


```

---

This project was generated with [electron-vue](https://github.com/SimulatedGREG/electron-vue) using [vue-cli](https://github.com/vuejs/vue-cli). Documentation about the original structure can be found [here](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html).
