interface IUserGroup {
  _id: string;
  name: string;
}

interface IUserGroupTrack {
  _id: string;
  name: string;
}

export interface IUser {
  _id: string;
  role: "STUDENT" | "TEACHER" | "ADMIN" | string;
  email: string;
  mobileNumber: string;
  isUpdate: boolean;
  verified: boolean;
  createdAt: string; // or Date
  updatedAt: string; // or Date
  discount: number;
  about: string;
  isSubscribed: boolean;
  __v: number;

  userGroup: IUserGroup[];
  name: string;
  careerDirections: string[];
  userGroupTrack: IUserGroupTrack;

  mentorId: string;
  address: string;
  firstName: string;
  lastName: string;

  woopGoals: string[];
  assignedStudents: string[];

  classId: string;
  readBooks: string;
  professionalTitle: string;
  profile: string;
}