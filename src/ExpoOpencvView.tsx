import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoOpencvViewProps } from './ExpoOpencv.types';

const NativeView: React.ComponentType<ExpoOpencvViewProps> =
  requireNativeViewManager('ExpoOpencv');

export default function ExpoOpencvView(props: ExpoOpencvViewProps) {
  return <NativeView {...props} />;
}
