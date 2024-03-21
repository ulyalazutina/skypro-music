type trackType = {
  id: number;
  name: string;
  author: string;
  release_date: string;
  genre: string;
  duration_in_seconds: number;
  album: string;
  logo: null | string;
  track_file: string;
  stared_user: Array<userType>;
};

type userType = {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
};
