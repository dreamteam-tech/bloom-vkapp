import React from 'react';
import { Button } from 'firefly/component';

export const StrategySlide = ({ onClick, strategy }) => (
  <div className='b-strategy-slide__slide'>
    <div className="b-strategy-slide__header">
      <div className="b-strategy-slide__title">
        {strategy.name}
      </div>
      <div className="b-strategy-slide__percent">
        {strategy.percent}%
      </div>
    </div>
    <div className="b-strategy-slide__content">
      <div className="b-strategy-slide__description">
        {strategy.description}
      </div>
      <Button onClick={() => onClick(strategy)} className='b-strategy-slide__button'>
        Подробнее
      </Button>
    </div>
  </div>
);
