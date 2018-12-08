import React from 'react';
import { H1 } from 'firefly/component';

export const StrategySummary = ({ strategy }) => (
  <div>
    <H1>{strategy.name}</H1>
  </div>
);
