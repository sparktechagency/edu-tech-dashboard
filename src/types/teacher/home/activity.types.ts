import { IPagination } from "./class.type";

// User info inside each activity
 interface User {
  _id: string;
  email: string;
}

// Each activity object
export interface Activity {
  _id: string;
  title: string;
  description: string;
  type: string; // e.g., "ASSIGNMENT"
  user: User;
  referenceId: string;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  __v: number;
}


// Main API response
export interface IRecentActivitiesResponse {
  success: boolean;
  message: string;
  pagination: IPagination;
  data: Activity[];
}