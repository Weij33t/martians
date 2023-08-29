export interface IUser {
  id: string;
  phone: string;
  email: string;
  name: string;
}

export interface IAuthData {
  email: string;
  password: string;
}

export interface IAuthService {
  login: (data: IAuthData) => Promise<IUser>;
}
