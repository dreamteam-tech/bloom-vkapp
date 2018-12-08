import React from 'react';
import { ResponsiveLine } from '@nivo/line';

export const StrategyChart = ({ strategy, data }) => (
  <div className='b-chart__container'>
    <ResponsiveLine
      margin={{
        top: 32,
        right: 16,
        bottom: 64,
        left: 32
      }}
      data={[{
        id: "tx",
        color: "hsl(106, 70%, 50%)",
        data: data.map(item => ({ x: item.date, y: item.value }))
      }]}
      axisLeft={{
        // using d3-format
        // see https://github.com/d3/d3-format for available formats
        format: '.2s'
      }}
      axisBottom={{
        tickRotation: -90
      }}
      theme={{
        dots: {
          text: {
            fill: '#fff',
            fontSize: 14
          }
        },
        axis: {
          ticks: {
            line: {
              stroke: 'rgb(0, 164, 255)',
              strokeWidth: 1
            },
            text: {
              fill: '#fff'
            }
          }
        },
        tooltip: {
          container: {
            background: '#fff',
            color: '#000',
            fontSize: '.9rem',
            lineHeight: 1,
            borderRadius: '4px',
            boxShadow: 'none',
            padding: '.4rem'
          },
          tableCell: {
            padding: '4px'
          }
        },
        grid: {
          line: {
            stroke: 'rgba(255, 255, 255, .1)',
            strokeWidth: 1
          }
        }
      }}
      animate
      enableArea
      yScale={{ type: 'linear', stacked: false }}
      curve="monotoneX"
      enableDotLabel={true}
      dotLabelColor="currentColor"
      dotSize={8}
      dotBorderWidth={0}
      tooltipFormat={x => `${x}`}
      colorBy={d => d.color}
    />
  </div>
);
