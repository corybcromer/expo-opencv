import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoOpencv.web.ts
// and on native platforms to ExpoOpencv.ts
import ExpoOpencvModule from './ExpoOpencvModule';
import ExpoOpencvView from './ExpoOpencvView';
import { ChangeEventPayload, ExpoOpencvViewProps } from './ExpoOpencv.types';

// Get the native constant value.
export const PI = ExpoOpencvModule.PI;

export function hello(): string {
  return ExpoOpencvModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoOpencvModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoOpencvModule ?? NativeModulesProxy.ExpoOpencv);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoOpencvView, ExpoOpencvViewProps, ChangeEventPayload };
