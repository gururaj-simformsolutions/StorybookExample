import {action} from '@storybook/addon-actions';
import {boolean, text, withKnobs} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {Button as BaseButton} from '../../../src';
import CenterView from '../CenterView';

export const actions = {
  onPress: action('button-pressed'),
};

const Button = ({type, ...props}) => (
  <BaseButton
    type={type}
    disabled={boolean('disabled', false)}
    {...props}
    {...actions}
  />
);

storiesOf('Button', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .addDecorator(withKnobs)
  .add('Primary', () => (
    <Button label={text('label', 'Primary')} type="primary" />
  ))
  .add('Secondary', () => <Button label={'Secondary'} type="secondary" />);
