export interface IUser {
  userId: string;
  firstName: string;
  lastName?: string;
  contact : {
    email: string;
    phone ?: number;
  };
  password: string;
  confirmPassword: string;
  profilePic?: string;
  library?: ILibrary;
  reviews?: string[];
}

export interface ILibrary {
  books: string[];
  datePurchased: Date;
  readingStatus: {
    percentCompleted: number;
    lastActivity: Date;
  };
}
