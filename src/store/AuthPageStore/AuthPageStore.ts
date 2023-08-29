import { IAuthPageStoreModel } from './IAuthPageStoreModel';

import { authApi, IAuthData } from '@/services/auth-service';

let alertDisabled = false;

export const AuthPageStore: IAuthPageStoreModel = {
  login: async (data: IAuthData) => {
    try {
      return await authApi.login(data);
    } catch (e) {
      if (!alertDisabled) {
        alert('Custom notification: босс все пропало');
        alertDisabled = confirm('Отключить алерт на ошибки?');
      }
      throw new Error('Ошибка запроса');
    }
  },
};
