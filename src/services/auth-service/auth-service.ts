import { clientApi } from '../core/core-client';

import { IAuthService, IUser } from './auth-service-model';

export const authApi: IAuthService = {
  login(data): Promise<IUser> {
    return clientApi.post<IUser>('/user/sign_in', data);
  },
};
