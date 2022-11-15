// Any utility method will come here

import { WALLET_DATA } from '../constants/actions';

export const getTitle = (data: any) => {
  const selectedData = data.filter((item) => item.selected);
  return selectedData[0]?.name || '';
};

export const validatePassword = (password: string) => {
  if (password.trim().length < 6) return 'Password should be 6 characters long';
  else return '';
};

export const getInitialRoute = (loginTime: any, dispatch: any) => {
  const loggedInDate = new Date(loginTime);
  const currentDate = new Date();
  let diff = currentDate.valueOf() - loggedInDate.valueOf();
  let diffInMins = diff / 1000 / 60;
  let initialScreen = 'AuthScreen';
  if (diffInMins < 15) {
    initialScreen = 'BottomTabs';
  } else {
    dispatch({ type: WALLET_DATA.RESET });
  }
  return initialScreen;
};
