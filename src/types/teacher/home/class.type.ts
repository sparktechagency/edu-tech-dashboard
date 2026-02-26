export interface ITeacherClass {
  _id: string;
  teacher: string;
  title: string;
  description: string;
  classDate: string; // ISO date string
  location: string;
  virtualClass: boolean;
  published: boolean;
  userGroup: { _id: string; name: string }[];
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  __v: number;
  status: boolean;
}

export interface IPagination {
  total: number;
  totalPage: number;
  page: number;
  limit: number;
}

export interface IGetAllClassesResponse {
  success: boolean;
  message: string;
  pagination: IPagination;
  data: ITeacherClass[];
}