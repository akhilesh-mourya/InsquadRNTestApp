import { ItemContainer, RowContainer, Image, Block, MarginT, MarginL, BlockAlignRight } from './styles';

import React, { FC } from 'react';
import { TextInputProps } from 'react-native';
import { HEADERLOGO } from '../constants/constants';
import { TextL, TextXXXL } from './text';
import { FontFamily, Type } from '../enums';

interface InputProps extends TextInputProps {
  item?: any;
  
}

export const HomeItem: FC<InputProps> = React.memo((props) => {
const {name, category, serial, price} = props.item;

  return (
    <ItemContainer>
        <RowContainer>
              <Image source={HEADERLOGO} />
              <MarginL ml={12} />
              <Block>
                <TextL type={Type.Primary} title={name} family={FontFamily.Medium}/>
                <MarginT mt={5} />
                <TextL type={Type.Placeholder} title={category} />
              </Block>
              <BlockAlignRight>
                <TextL type={Type.Primary} title={serial} family={FontFamily.Medium}/>
                <MarginT mt={5} />
                <TextL type={Type.Placeholder} title={`~${price}`} />
              </BlockAlignRight>
        </RowContainer>
    </ItemContainer>
  );
});
