import styled from 'styled-components/native';
import { color, border, layout, space, } from 'styled-system';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';
import { Dimensions } from 'react-native';

export const Container = styled.View.attrs((props) => ({
  flex: 1,
  backgroundColor: props.theme.colors.secondary
}))`
${space}
${layout}`;

export const SubContainer = styled.View.attrs((props) => ({
  margin: moderateScale(22),
  mt: moderateScale(52),
}))`
${space}
${layout}`;
  
export const SubHeaderContainer = styled.TouchableOpacity.attrs((props) => ({
}))`
  margin-top:  ${(props) => props.marginTop ? moderateScale(props.marginTop): 0}px;
  flex-direction: row;
  align-items: center;
  ${color}
  ${space}
  ${layout}`;

  export const ButtonContainer = styled.View.attrs((props) => ({
  }))`
    margin-top:  ${moderateScale(54)}px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    ${color}
    ${space}
    ${layout}`;

export const Image = styled.Image.attrs({
  width: scale(59),
  height: scale(59),
  mr: moderateScale(10)
})`
${color}
${space}
${layout}`;


export const Block = styled.View.attrs({
})``;

export const Text = styled.Text.attrs((props) => ({
  color: props.color,
}))`
  fontSize:  ${(props) => moderateScale(props.fontSize)}px;
  margin-right:  ${(props) => props.marginRight ? moderateScale(props.marginRight) : 0}px;
  font-family: 'System85Pro-Medium';
  ${color}
  ${space}
  ${layout}
`;

export const PriceText = styled.Text.attrs((props) => ({
  color: props.color,
  mt: moderateScale(14)
}))`
  fontSize:  ${moderateScale(48)}px;
  font-family: 'System85Pro-Regular';
  ${color}
  ${space}
  ${layout}
`;

export const FlatList = styled.FlatList.attrs((props) => ({
}))`
margin-top: ${moderateScale(20)}px;
margin-bottom: ${moderateScale(300)}px;
padding-vertical: ${moderateScale(5)}px;

  ${color}
  ${space}
  ${layout}
`;



export const MarginR = styled.View.attrs((props) => ({
}))`
margin-right: ${moderateScale(6)}px;

  ${color}
  ${space}
  ${layout}
`;

export const MarginT = styled.View.attrs(() => ({
}))`
margin-top:${(props) => props.mt ? moderateScale(props.mt) : 0}px;

  ${color}
  ${space}
  ${layout}
`;



