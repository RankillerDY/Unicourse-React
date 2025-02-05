// Interface for Lecturer's Skills and Certifications
interface Skill {
  name: string;
  level: string;
}

interface Certification {
  name: string;
  year: number;
}

interface SkillJson {
  skills: Skill[];
  certifications: Certification[];
}

// Interface for User (Lecturer's User Info)
interface User {
  id: number;
  email: string;
  full_name: string;
  date_of_birth: string | null;
  role: string;
  profile_image: string;
  title: string | null;
  phone_num: string | null;
  address: string | null;
  deleted_schedule: string | null;
  banned_reason: string | null;
  is_blocked: boolean;
  created_at: string;
  updated_at: string;
  hashed_password: string;
  bio: string;
  self_intro_url: string | null;
  facebook_url: string | null;
  linkedin_url: string | null;
  github_url: string | null;
  path_profile_image: string | null;
}

// Interface for Lecturer
interface Lecturer {
  id: number;
  info_description: string;
  skill_json: SkillJson;
  created_at: string;
  updated_at: string;
  user_id: number;
  user: User;
}

// Interface for Category
interface Category {
  id: number;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
  status: string;
}

// Interface for Course Mentor
interface CourseMentor {
  id: number;
  title: string;
  description: string;
  image: string;
  amount: number;
  is_mentor: boolean;
  status: string;
  course_id: number;
  mentor_id: number | null;
  lecturer_id: number | null;
  center_id: number | null;
  start_date: string;
  end_date: string;
  created_at: string;
  updated_at: string;
  discount: number;
  _count: {
    course_enroll: number;
  };
}

// Main Course Interface
export interface Course {
  id: number;
  title: string;
  price: number;
  title_description: string;
  thumbnail: string;
  learning_outcome: string[];
  students_enrolled: number;
  requirements: string[];
  status: string;
  created_at: string;
  updated_at: string;
  category_id: number;
  total_number_ratings: number;
  lecture_id: number;
  description: string;
  lecturer: Lecturer;
  category: Category;
  average_rating: number;
  course_skill: any[]; // You can define a more specific type if needed
  course_mentor: CourseMentor[];
}
