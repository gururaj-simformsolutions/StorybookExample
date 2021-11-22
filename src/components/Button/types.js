import type {PressableProps} from '@types/react-native';

export type ButtonProps = PressableProps & {
  label: string,
  type: 'primary' | 'secondary',
};
