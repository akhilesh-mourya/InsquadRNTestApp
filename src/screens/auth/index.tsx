import React, { FC, useState } from 'react';
import { INButton } from '../../components/button';
import { InInput } from '../../components/input';
import { LOGO } from '../../constants/constants';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { Container, LogoImage, LogoText, BottomContainer, ForgotContainer, ForgotText } from './styles';
import { reset } from '../../navigation/navigator';
import { validatePassword } from '../../utility/utility';
import { AUTH_DATA } from '../../constants/actions';

export const AuthScreen: FC<{}> = () => {
    const navigation: NavigationProp<any, any> = useNavigation();
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const dispatch = useDispatch();

    const unlockPress = () => {
        const validation = validatePassword(password);
        if(validation.length === 0) {
            reset(navigation, 'BottomTabs')

            console.log('new Date().toLocaleString()=', new Date().toLocaleString())
            dispatch({
                type: AUTH_DATA.UPDATE,
                payload: {loginTime: new Date()},
              });
        }
        else
            setPasswordError(validation)
    }

    const onChangeText = (text) => {
        if(passwordError)
            setPasswordError('')
        setPassword(text)
    }

  return (<Container >
            <LogoImage source={LOGO}/>
            <LogoText>
                MARTIAN
            </LogoText>
            <InInput onChangeText={onChangeText} secureTextEntry error={passwordError}/>
            <INButton size={'lg'} title={'UNLOCK'} type={'primary'} onPress={unlockPress}/>
            <BottomContainer>
                <ForgotContainer>
                    <ForgotText>
                        FORGOT PASSWORD
                    </ForgotText>
                </ForgotContainer>
            </BottomContainer>
        </Container>
    );
};

export default AuthScreen;
