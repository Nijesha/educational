# 📱 Educational Content App

A React Native app for exploring categorized educational content with bookmarking, filtering, and searching capabilities.

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

- Node.js >= 14.x
- npm or yarn
- Android Studio / Xcode
- React Native CLI

git clone <https://github.com/Nijesha/Nijesha_practicle.git>
cd project-directory
yarn install

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android


### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## 📸 Screenshots

| Home Screen | Search Bar | Filter Buttons | Bookmarks Screen | Details Buttons |
|-------------|------------------|----------------|
| ![Home](./assets/screenshots/home.png) | ![Search](./assets/screenshots/search.png) | ![Filters](./assets/screenshots/filters.png) | ˇ ![Bookmarks](./assets/screenshots/bookmarks.png) | ![Details](./assets/screenshots/details.png) |

## 📸 App Video

<https://drive.google.com/file/d/1p0lJ-No6FKkKRWnNoWHK1bjhy9tdJVgK/view?usp=sharing>

## 💡 Approach

- Used `FlatList` for performance when rendering lists.
- Created reusable component `CategoriesItems` for listing each card.
- `AsyncStorage` is used to persist bookmarks locally.
- Filters and search are applied using controlled state logic.
- The UI is styled with `normalize()` for responsive dimensions.

## 🛠 Libraries Used

| Library | Purpose |
|--------|---------|
| react-native | Core framework |
| react-native-async-storage | Bookmark storage |
| react-navigation | (If used) Navigation |
| @react-navigation/stack | stack navigator |
| normalize | Responsive styling |
| custom components | Clean modular UI |
| react-i18nex | Handle multi-language |