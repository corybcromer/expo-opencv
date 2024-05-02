import * as React from 'react';

import { ExpoOpencvViewProps } from './ExpoOpencv.types';

export default function ExpoOpencvView(props: ExpoOpencvViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
