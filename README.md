# Town of Salem Assistant

Town of Salem assistant is an application for Linux, macOS, and Windows that supports Town of
Salem by adding some fun features, as well as some quality of life enhancements.

## Disclaimer

> This application does **_NOT_** allow you to play Town of Salem, nor does it modify the game
> client/web browser used to play Town of Salem in any way. This application is intended for fans
> of Town of Salem who want some quality of life enhancements without modifying the game itself.
>
> WHILE THE CREATOR OF THIS APP DID NOT CREATE IT WITH THE EXPRESS INTENT OF ALLOWING CHEATING,
> BLANK MEDIA GAMES COULD, AT ANY TIME, CONSIDER THIS APP A CHEATING TOOL AND BAN ITS USAGE. IN THE
> EVENT THAT YOUR ACCOUNT GETS BANNED FOR THE USAGE OF THIS TOOL, THE CREATOR AND MAINTAINERS OF THIS
> APPLICATION CANNOT BE HELD RESPONSIBLE.
>
> AS WITH MOST THINGS IN LIFE, PLEASE USE YOUR OWN BEST JUDGEMENT.

## Table of Contents

- [Installation](#installation)
  - [Linux](#linux)
  - [macOS](#macos)
  - [Windows](#windows)
- [Working with the source](#working-with-the-source)
- [Internationalization](#internationalization)

## Installation

If you wish to install Town of Salem Assistant on your computer, you can simply head over to the
[Releases Page][1], and download the correct binary for your system. **PLEASE NOTE**: The
installation packages are _not_ signed. Therefore, on macOS or Windows, you will need to allow the
application through GateKeeper or SmartScreen, respectively.

[Open a Mac app from an unidentified developer (Apple Support)][2]

[How to disable SmartScreen for a trusted app on Windows 10 (Windows Central)][3]

### Linux

#### Supported Distributions/Versions of Linux

- glibc (>= 2.27) [Ubuntu 18.04+]

For Linux, all you need to do is download the AppImage, then either install or run it. To install
the AppImage, you will need something like [AppImageLauncher][4], otherwise simply download the
AppImage to the location, you wish to run it from, open a terminal, and make it executable with
`chmod +x ./[name of AppImage].appimage`. Then you can either launch the AppImage by opening it
with the terminal, or double clicking it.

Alternatively, if you are running a Debian-based distro, you can download the `.deb` package from
the [releases page][1], and install it using:

```sh
sudo apt install ~/Downloads/[name of package].deb
```

This will install the package and all associated dependencies.

### macOS

#### Supported Versions of macOS

- macOS 10.13+ (High Sierra, Mojave, Catalina)
- macOS 11 (Big Sur)
- macOS 12 (Monterey)
- macOS 13 (Ventura)

Do you really need directions? It's an app, just like all other mac apps.

### Windows

#### Supported Versions of Windows

- Windows 7 (<-- you're welcome, I went out of my way for you)
- Windows 8
- Windows 8.1
- Windows 10
- Windows 11

Windows is nice and easy. Just run the installer you downloaded from the [releases page][1], and it
will install the application and all associated dependencies.

## Working with the Source

If you wish to work with the source, the setup is a little more involved and advanced. For the sake
of brevity, I won't go into too much depth here. You can find more information on the
[Tauri Website][7]. Long story short, you need the relevant WebView development environment set up
(including the relevant C/C++ libraries), Rust, and Node.

Once you have completed that, you can clone the source:

```sh
git clone https://github.com/eagerestwolf/tos-assistant.git
```

Once you have the source code downloaded, `cd` into the source directory and install the required
development dependencies with `yarn`.

```sh
cd tos-assistant && yarn
```

Next, I highly recommend you run the application in development mode at least once because the Rust
and C/C++ code required takes quite a bit of time to complete.

```sh
yarn tauri dev
```

When making changes to the code, please follow the relevant coding style guidelines. ESLint is
configured to check the code, along with Prettier to ensure the code is nice and neat. To check if
your code is okay, run the following command:

```sh
yarn lint
```

If you use Visual Studio Code, you will be prompted a list of suggested extensions to install to
make this process a little more streamlined. There are also workspace settings setup for this
project.

When it comes time to commit your changes, we use conventional commits.

## Internationalization

Town of Salem assistant supports and provides internationalization, using [i18next][8] and
[react-i18next][9]. Currently, the application ships with the following translations:

- English
  - United Kingdom (partial) (_Sorry Australia, the only real changes so far are the same for you
    and the UK_)
  - United States

If you are able and willing to do so, you can contribute to the internationalization of this
application. Simply clone the sources, then in the directory `src/i18n`, create a folder structure
as exampled below:

```txt
i18n
 |--config.ts
 |--raw.json
 |--en
 |----gb.json
 |----us.json
 |--[language]
 |----[region].json
```

So, if you wish to provide translations for Brazilian Portuguese (`pt-BR`), you would create the
folder `pt` and inside that folder, you would place a file called `br.json`. You can then copy the
contents of the file `raw.json`, which contains all the translation keys with no translations into
your newly created file, and begin translating.

If you are providing another English translation (GB, AU, IE, etc.), you only need to overwrite the
keys in your `{region}.json` file. For example, changing the American "-or" endings to the British
and Australian "-our" endings, or changing some text to more closely reflect regional dialects.
This is because any unchanged text will simply fall back to the `en-US` translation.

Once you are finished translating, you'll need to make some slight modifications to the
internationalization config. Don't worry, you'll only need to make a few changes. All of the
changes you need to make are located in the `config.ts` file.

First, near the top, you will see where the other translations are imported. If you're unsure, look
for the line `import enUS from "./en/us.json";`. You'll add a line here importing your translation,
in alphabetical order. The format for this import is
`import {lang}{REGION} from "./{lng}/{region}.json"`. So using our Brazilian Portuguese example,
the import would be `import ptBR from "./pt/br.json"`. Easy, right?

Next, look for the line that says `export const resources = {`, this is the translations object.
Don't worry, I know this looks complicated, but it's really easy. All you need to do is add a new
key for your language in alphabetical order, and add the translations object to it. So, sticking
with our Brazilian Portuguese example, we would add an entry after `"en-US"` with the following
content `"pt-BR": ptBR`. Don't forget to put a comma on each item in the object, except the last.
If we were doing this for real, the `config.ts` file would have the following contents after adding
the Portuguese translations.

```ts
import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import enGB from "./en/gb.json";
import enUS from "./en/us.json";
import ptBR from "./pt/br.json";

export const resources = {
  "en-GB": enGB,
  "en-US": enUS,
  "pt-BR": ptBR
};

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: true,
    fallbackLng: "en-US",
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: true
    },
    resources
  });
```

[1]: https://github.com/eagerestwolf/tos-assistant/releases
[2]: https://support.apple.com/guide/mac-help/open-a-mac-app-from-an-unidentified-developer-mh40616/mac
[3]: https://www.windowscentral.com/how-disable-smartscreen-trusted-app-windows-10
[4]: https://github.com/TheAssassin/AppImageLauncher
[7]: https://tauri.app/v1/guides/getting-started/prerequisites
[8]: https://github.com/i18next/i18next
[9]: https://github.com/i18next/react-i18next
