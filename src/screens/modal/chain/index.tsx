import React, { FC } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { CenterBlock, Container, ModalContainer, FlatList, SubContainer, Touchable, HorizontalSeparator } from './styles';
import { BlurView } from "@react-native-community/blur";
import { ChainItem } from '../../../components/chainItem';
import { TextL } from '../../../components/text';
import { FontFamily } from '../../../enums';
import { NavigationProp } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { WalletProps } from '../../../redux/modules/wallet/reducer';
import { CHAIN_DATA } from '../../../constants/actions';

export const ModalScreen: FC<{}> = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const {colors} = theme;
  const navigation: NavigationProp<any, any> = useNavigation();
  const wallet: WalletProps = useSelector((state) => state.wallet);

  const onCrossPress = () => {
      navigation.goBack();
  }

  const onItemPress = (item: any) => {

    // update redux
    const chainData = [...wallet.chainData]
    chainData.map((cItem) => {
      cItem.selected = false
      if(cItem.id === item.id ) {
        cItem.selected = true
      }
    });

    dispatch({
      type: CHAIN_DATA.UPDATE,
      payload: chainData,
    });
    navigation.goBack();
}

  const renderItem = ({item}) => {
    return <ChainItem item={item} onPress={onItemPress}/>
  }

  return (
    <Container>
      <BlurView
        style={{position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0}}
        blurType="light"
        blurAmount={4}
        reducedTransparencyFallbackColor={colors.primary}
      />
      <SubContainer>
        <ModalContainer >
          <TextL title={'Select a chain'} family={FontFamily.Medium}/>
          <CenterBlock/>
          <Touchable onPress={onCrossPress}>
          <Icon name="x" size={20} color={colors.cancel} />
          </Touchable>
        </ModalContainer>
        <HorizontalSeparator />
       <FlatList
              data={wallet.chainData}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
            </SubContainer>
    </Container>
  );
};

export default ModalScreen;
