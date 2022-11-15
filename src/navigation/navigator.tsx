import { CommonActions, NavigationProp } from '@react-navigation/native';

export const reset = (navigation: NavigationProp<any, any>, screenName = '', data = {}) => {
    navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [
            { name: screenName },
            {
              name: screenName,
              params: data,
            },
          ],
        })
    );
}