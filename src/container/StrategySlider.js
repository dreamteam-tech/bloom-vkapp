import { H1 } from 'firefly/component/Heading';
import React from 'react';
import { HeaderButton } from './HeaderButton';
import { StrategySlide } from './StrategySlide';

export const StrategySlider = ({ onClick, onPrev, onNext, rows, row }) => row && (
  <div>
    <div className="b-dashboard__header">
      <div />
      <H1 className='b-dashboard__title'>{row.name}</H1>
      <div />
    </div>
    <div className="b-strategy-slide__container">
      <HeaderButton
        className="b-strategy-slide__left"
        onPrev={onPrev}
        icon={rows.length > 1 ? 'ArrowLeft' : ''} />
      <StrategySlide onClick={onClick} strategy={row} />
      <HeaderButton
        className="b-strategy-slide__right"
        onPrev={onNext}
        icon={rows.length > 1 ? 'ArrowRight' : ''} />
    </div>
  </div>
);
