# CatMarge development setup

This project is an Expo Router app based on Expo SDK 54.

## Requirements

- Node.js LTS and npm, or pnpm
- Android Studio with Android SDK, Android Emulator, and Platform Tools
- A configured Android Virtual Device
- Git and GitHub CLI if you want to publish from the terminal

## Install dependencies

```bash
npm install
```

## Start in Android Emulator

Open an Android Virtual Device in Android Studio, then run:

```bash
npm run android
```

The same command is available through the Codex action named `Run Android`.

## GitHub publish

After GitHub CLI is installed and authenticated:

```bash
git init
git add .
git commit -m "Initial Expo SDK 54 app"
git branch -M main
git remote add origin https://github.com/MMAMAGOT/CatMarge.git
git push -u origin main
```

The GitHub repository already exists at https://github.com/MMAMAGOT/CatMarge.
