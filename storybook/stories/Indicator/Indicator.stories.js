import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {Indicator} from '../../../src';
import CenterView from '../CenterView';

storiesOf('Indicator', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => <Indicator />);
