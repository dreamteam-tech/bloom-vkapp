import { bem, Icon } from 'firefly/component';
import moment from 'moment';
import React from 'react';
import { ResponsivePieCanvas } from '@nivo/pie';
import { ListRow } from '../container';
import { formatMoney } from '../utils';

export const StrategyPieChart = ({ strategy }) => (
  <div>
    <div className='b-chart__container'>
      <ResponsivePieCanvas
        data={strategy.companies.map(item => ({
          id: item.company.id,
          label: item.company.name,
          value: item.percent,
        }))}
        margin={{
          top: 32,
          right: 32,
          bottom: 32,
          left: 32
        }}
        pixelRatio={2}
        sortByValue={true}
        innerRadius={0.8}
        padAngle={1}
        cornerRadius={2}
        colors="pastel2"
        colorBy="id"
        borderColor="inherit"
        radialLabelsSkipAngle={10}
        radialLabelsTextXOffset={6}
        radialLabelsTextColor="inherit:darker(0.6)"
        radialLabelsLinkOffset={0}
        radialLabelsLinkDiagonalLength={16}
        radialLabelsLinkHorizontalLength={24}
        radialLabelsLinkStrokeWidth={1}
        radialLabelsLinkColor="inherit"
        slicesLabelsSkipAngle={10}
        slicesLabelsTextColor="#333333"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
      />
    </div>
    <div>
      {strategy.companies.map((item, i) => (
        <ListRow key={i} className='b-transaction-row'>
          <div>
            <div className="b-transaction-row__type">{item.company.name}</div>
          </div>
          <div>
            <div className="b-transaction-row__date">
              {item.percent}%
            </div>
          </div>
        </ListRow>
      ))}
    </div>
  </div>
);
