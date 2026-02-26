export interface IUserGroup {
  _id: string;
  name: string;
  published: boolean;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  __v: number;
}

export interface IUserGroupTrack {
  _id: string;
  name: string;
  userGroup: IUserGroup;
  published: boolean;
  createdAt: string; // ISO string
  updatedAt: string; // ISO string
  __v: number;
}