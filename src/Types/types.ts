export type TProduct = {
  id?: number,
  name: string,
  amount: string
};

export type TUser = {
  id?: number,
  username: string,
  vocation: string,
  level: 10,
  password?: string
};

export type TToken = {
  payload: { id: number, name: string, email: string },
  iat: number,
  exp: number
};