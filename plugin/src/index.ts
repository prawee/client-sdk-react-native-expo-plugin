import {
  withAndroidManifest,
  AndroidConfig,
  ConfigPlugin,
} from 'expo/config-plugins';

type LKConfigOptions = {
  "android" : {
    "audioType": "media"|"communication"
  }
}

const withLiveKit: ConfigPlugin<LKConfigOptions> = (config, options) => {
  config = withAndroidManifest(config, config => {
    const mainApplication = AndroidConfig.Manifest.getMainApplicationOrThrow(config.modResults);

    AndroidConfig.Manifest.addMetaDataItemToMainApplication(
      mainApplication,
      'io.livekit.reactnative.expo.ANDROID_AUDIO_TYPE',
      options.android.audioType
    );
    return config;
  });

  return config;
};

export default withLiveKit;
