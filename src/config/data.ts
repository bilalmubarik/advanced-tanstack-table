import { type TJob } from '../types';
import { ESalaryType } from './constants';

export const jobData: TJob[] = [
  {
    id: '1',
    name: 'Senior Software Engineer',
    description:
      'Responsible for developing and maintaining full-stack applications.',
    salary: 120000,
    salaryType: ESalaryType.YEARLY,
    company: 'Tech Innovations Inc.',
    location: 'San Francisco, CA',
    tags: ['full-stack', 'software', 'senior', 'engineer', 'tech'],
    subTasks: [
      {
        id: '1',
        name: 'Implement authentication',
        description: 'Develop secure authentication flow',
        completed: false,
        createdAt: '2024-01-10T08:00:00Z',
        updatedAt: '2024-01-15T08:00:00Z'
      },
      {
        id: '2',
        name: 'Database optimization',
        description: 'Optimize database queries and indices',
        completed: true,
        createdAt: '2024-02-01T08:00:00Z',
        updatedAt: '2024-02-05T08:00:00Z'
      },
      {
        id: '3',
        name: 'Frontend UI development',
        description: 'Design and implement user interface components',
        completed: false,
        createdAt: '2024-03-01T08:00:00Z',
        updatedAt: '2024-03-10T08:00:00Z'
      }
    ],
    createdAt: '2024-01-01T08:00:00Z',
    updatedAt: '2024-01-01T08:00:00Z'
  },
  {
    id: '2',
    name: 'Junior Software Engineer',
    description:
      'Responsible for developing and maintaining full-stack applications.',
    salary: 80000,
    salaryType: ESalaryType.YEARLY,
    company: 'Tech Innovations Inc.',
    location: 'San Francisco, CA',
    tags: ['full-stack', 'software', 'junior', 'engineer', 'tech'],
    subTasks: [
      {
        id: '1',
        name: 'Implement authentication',
        description: 'Develop secure authentication flow',
        completed: false,
        createdAt: '2024-01-10T08:00:00Z',
        updatedAt: '2024-01-15T08:00:00Z'
      },
      {
        id: '2',
        name: 'Database optimization',
        description: 'Optimize database queries and indices',
        completed: true,
        createdAt: '2024-02-01T08:00:00Z',
        updatedAt: '2024-02-05T08:00:00Z'
      },
      {
        id: '3',
        name: 'Frontend UI development',
        description: 'Design and implement user interface components',
        completed: false,
        createdAt: '2024-03-01T08:00:00Z',
        updatedAt: '2024-03-10T08:00:00Z'
      }
    ],
    createdAt: '2024-01-01T08:00:00Z',
    updatedAt: '2024-01-01T08:00:00Z'
  },
  {
    id: '3',
    name: 'Cloud Engineer',
    description:
      'Responsible for developing and maintaining cloud infrastructure.',
    salary: 150000,
    salaryType: ESalaryType.YEARLY,
    company: 'Cali Solutions Inc.',
    location: 'Michigan',
    tags: ['full-stack', 'software', 'senior', 'engineer', 'tech'],
    subTasks: [
      {
        id: '1',
        name: 'Implement authentication',
        description: 'Develop secure authentication flow',
        completed: false,
        createdAt: '2024-01-10T08:00:00Z',
        updatedAt: '2024-01-15T08:00:00Z'
      },
      {
        id: '2',
        name: 'Database optimization',
        description: 'Optimize database queries and indices',
        completed: true,
        createdAt: '2024-02-01T08:00:00Z',
        updatedAt: '2024-02-05T08:00:00Z'
      },
      {
        id: '3',
        name: 'Frontend UI development',
        description: 'Design and implement user interface components',
        completed: false,
        createdAt: '2024-03-01T08:00:00Z',
        updatedAt: '2024-03-10T08:00:00Z'
      }
    ],
    createdAt: '2024-01-01T08:00:00Z',
    updatedAt: '2024-01-01T08:00:00Z'
  }
];
