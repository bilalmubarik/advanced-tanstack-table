import { type ESalaryType } from '../config/constants';

export interface TSubTask {
  id: string;
  name: string;
  description: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface TJob {
  id: string;
  name: string;
  description: string;
  salary: number;
  salaryType: ESalaryType;
  company: string;
  location: string;
  tags: string[];
  subTasks: TSubTask[];
  createdAt: string;
  updatedAt: string;
}
