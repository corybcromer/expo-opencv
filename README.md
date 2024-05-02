# Expo OpenCV
An Expo module which exposes native OpenCV API's.

To learn how Expo modules work visit the [Expo Modules API Docs](https://docs.expo.dev/modules/overview/).

## What has been done?

So far the project has been initialized using the [create a new module with and example project](https://docs.expo.dev/modules/get-started/#creating-a-new-module-with-an-example-project).

```
npx create-expo-module expo-opencv
```

The Android project has been opened:

```
cd open-cv
npm run open:android
```

I downloaded [OpenCV - 4.8.0 for Android](https://github.com/opencv/opencv/releases/download/4.8.0/opencv-4.8.0-android-sdk.zip).

I then followed the directions commented in the `/OpenCV-android-sdk/sdk/build.grade` file of the Android Download. This included:

1) Importing the Module
Import module: Menu -> "File" -> "New" -> "Module" -> "Import Gradle project":
Source directory: select this "sdk" directory
Module name: ":opencv"

2) Add dependency to the `expo-opencv`
This is where I am running into issues. I cannot add the module to either `app` or `expo-opencv` (I think Im actually suppose to add it to the latter with Expo Modules, cf. [Add Native Dependencies](https://docs.expo.dev/modules/third-party-library/#add-native-dependencies))

I tried adding the dependency throught **File -> Project Structure -> Dependencies**.

I also tried directly adding the `:opencv` as a dependency in the `/android/build.gradle` file:

```
dependencies {
  implementation project(':expo-modules-core')
  implementation "org.jetbrains.kotlin:kotlin-stdlib-jdk7:${getKotlinVersion()}"
  implementation project(':opencv')
}
```

I also tried making sure the **compileSdkVersion, buildToolsVersion, minSdkVersion, targetSdkVersion** matched in both the `/android/build.gradle` and the `/android/opencv/build.gradle`.

## The Problem

I cant seem to be able to properly add `:opencv` as a dependency to `expo-opencv`. Whenever I try to build the project, I get this error:

```
Could not resolve project :opencv.
     Required by:
         project :app > project :expo > project :expo-opencv
      > No matching configuration of project :opencv was found.
```

So far I have not tried implementing the iOS native OpenCV SDK. 

Any help would be greatly appreciated.



