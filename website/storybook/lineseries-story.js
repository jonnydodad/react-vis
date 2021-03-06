import React from 'react';

import {storiesOf} from '@storybook/react';
import {withKnobs, color, number, object, select, text} from '@storybook/addon-knobs/react';

import {LineSeries} from 'react-vis';

import {generateLinearData} from './storybook-data.js';
import {SimpleChartWrapper} from './storybook-utils.js';

function styledLineSeries(props) {
  return (
    <LineSeries
      data={props.data}
      opacity={number('opacity', props.opacity || 1, {max: 1, min: 0, range: true, step: 0.01})}
      stroke={color('stroke', props.stroke || '#12939a')}
      strokeDasharray={text('strokeDasharray', props.strokeDasharray || '')}
      strokeStyle={select('strokeStyle', {solid: 'solid', dashed: 'dashed'}, props.strokeStyle || 'solid')}
      strokeWidth={text('strokeWidth', props.strokeWidth || '')}
      style={object('style', props.style || {})}
    />
  );
}

storiesOf('Series/LineSeries/Base', module)
  .addDecorator(withKnobs)
  .add('Single Line chart', () => {
    return (
      <SimpleChartWrapper>
        <LineSeries data={generateLinearData({key: 'line1'})} />
      </SimpleChartWrapper>
    );
  })
  .add('Multiple Line series', () => {
    return (
      <SimpleChartWrapper>
        <LineSeries data={generateLinearData({key: 'line1'})} />
        <LineSeries data={generateLinearData({key: 'line2'})} />
        <LineSeries data={generateLinearData({key: 'line3'})} />
      </SimpleChartWrapper>
    );
  });

storiesOf('Series/LineSeries/Styling', module)
  .addDecorator(withKnobs)
  .add('opacity', () => {
    return (
      <SimpleChartWrapper>
        {styledLineSeries({data: generateLinearData({key: 'line1'}), opacity: 0.5})}
      </SimpleChartWrapper>
    );
  })
  .add('stroke', () => {
    return (
      <SimpleChartWrapper>
        {styledLineSeries({data: generateLinearData({key: 'line1'}), stroke: '#2c51be'})}
      </SimpleChartWrapper>
    );
  })
  .add('strokeDasharray', () => {
    return (
      <SimpleChartWrapper>
        {styledLineSeries({data: generateLinearData({key: 'line1'}), strokeDasharray: '5, 5, 1, 5'})}
      </SimpleChartWrapper>
    );
  })
  .add('strokeStyle', () => {
    return (
      <SimpleChartWrapper>
        {styledLineSeries({data: generateLinearData({key: 'line1'}), strokeStyle: 'dashed'})}
      </SimpleChartWrapper>
    );
  })
  .add('strokeWidth', () => {
    return (
      <SimpleChartWrapper>
        {styledLineSeries({data: generateLinearData({key: 'line1'}), strokeWidth: '5px'})}
      </SimpleChartWrapper>
    );
  })
  .add('style object', () => {
    return (
      <SimpleChartWrapper>
        {styledLineSeries({
          data: generateLinearData({key: 'line1'}),
          style: {
            stroke: '#E48000',
            strokeLinejoin: 'round',
            strokeWidth: '3px'
          }
        })}
      </SimpleChartWrapper>
    );
  });

storiesOf('Series/LineSeries/Curve', module)
  .addDecorator(withKnobs)
  .add('Curve', () => {
    return (
      <SimpleChartWrapper>
        <LineSeries
          data={generateLinearData({key: 'line1'})}
          curve={select(
            'curve',
            {
              curveBasis: 'curveBasis',
              curveCatmullRom: 'curveCatmullRom',
              curveCardinal: 'curveCardinal',
              curveLinear: 'curveLinear',
              curveStep: 'curveStep',
              curveStepAfter: 'curveStepAfter',
              curveStepBefore: 'curveStepBefore',
              none: null
            },
            'curveBasis'
          )}
        />
      </SimpleChartWrapper>
    );
  });
