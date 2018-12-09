import React from 'react';
import { ResponsivePieCanvas } from '@nivo/pie';
import { ListRow } from '../container';

const clean = value => {
  return value.replace(' ORD SHS', '').replace(' PRF SHS', '');
};

export const StrategyPieChart = ({ strategy }) => (
  <div>
    <div className='b-chart__container'>
      <ResponsivePieCanvas
        data={strategy.companies.map((item, i) => ({
          id: clean(item.company.name),
          label: (item.company.name),
          value: item.percent,
          color: [
            '#f193ff',
            '#4cddff',
            '#41DF99',
            '#ff6790',
            '#ffbe2f',
          ][i] || '#41DF99'
        }))}
        margin={{
          top: 32,
          right: 32,
          bottom: 32,
          left: 32
        }}
        pixelRatio={2}
        slicesLabelsTextColor={'#fff'}
        sortByValue={true}
        innerRadius={.65}
        padAngle={1}
        cornerRadius={2}
        radialLabelsLinkStrokeWidth={2}
        colors="greens"
        borderWidth={1}
        colorBy={d => d.color}
        borderColor="inherit"
        radialLabelsSkipAngle={10}
        radialLabelsTextXOffset={6}
        radialLabelsTextColor="#fff"
        radialLabelsLinkOffset={0}
        radialLabelsLinkDiagonalLength={16}
        radialLabelsLinkHorizontalLength={24}
        radialLabelsLinkColor="inherit"
        slicesLabelsSkipAngle={10}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
      />
    </div>
    <div>
      {strategy.companies.map((item, i) => (
        <ListRow key={i} className='b-company-row'>
          <div>{item.company.name}</div>
          <div>
            <div className="b-company-row__percent">
              {item.percent}%
            </div>
          </div>
        </ListRow>
      ))}
    </div>
  </div>
);
