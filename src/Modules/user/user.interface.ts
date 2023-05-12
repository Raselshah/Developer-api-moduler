// step1. interface design

export interface IUser {
  id: string;
  name: {
    firstName: string;
    middleName?: string;
    lastName: string;
  };
  password: string;
  role: "Developer";
  dateOfBirth?: string;
  gender: "male" | "female";
  email?: string;
  contactNo: string;
  presentAddress: string;
}
