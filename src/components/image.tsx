import { Container } from './styles';
import React, { FC } from 'react';
import { Image, ImageProps } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import { Size } from '../enums';


interface INImageProps extends ImageProps {
  size?: string;
}

export const INImage: FC<INImageProps> = React.memo((props) => {
  const { size } = props;
  let width = scale(60);
  let height = verticalScale(26);

  const getSize = () => {
    switch (size) {
      case Size.Small:
        width = scale(110);
        height = verticalScale(32);
        break;
      case Size.Medium:
        width = scale(210);
        height = verticalScale(42);

        break;
      case Size.Large:
        width = scale(310);
        height = verticalScale(52);
        break;
      default:
        break;
    }

    return { width, height };
  };

  return (
    <Container>
      <Image {...props} />
    </Container>
  );
});
