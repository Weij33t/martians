import { IAuthData, IUser } from '@/services/auth-service';

export interface IAuthPageStoreModel {
  login: (data: IAuthData) => Promise<IUser>;
}
