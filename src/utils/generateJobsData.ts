import { faker } from '@faker-js/faker';
import { TJob } from '../types';
import { ESalaryType } from '../config/constants';

const getJobsData = (): TJob => {
  return {
    id: faker.string.uuid(),
    name: faker.internet.displayName(),
    description: faker.lorem.sentence({ min: 5, max: 12 }),
    salary: faker.number.int({ min: 50000, max: 200000 }),
    salaryType: faker.helpers.arrayElement([
      ESalaryType.YEARLY,
      ESalaryType.MONTHLY,
      ESalaryType.WEEKLY,
      ESalaryType.DAILY,
      ESalaryType.HOURLY
    ]),
    company: faker.company.name(),
    location: faker.location.city() + ', ' + faker.location.state(),
    tags: faker.helpers.arrayElements(
      ['full-stack', 'frontend', 'backend', 'devops', 'senior', 'junior'],
      { min: 1, max: 3 }
    ),
    subTasks: Array.from({
      length: faker.number.int({ min: 1, max: 10 })
    }).map(() => ({
      id: faker.string.uuid(),
      name: faker.string.alpha(),
      description: faker.lorem.sentence(10),
      completed: faker.datatype.boolean(),
      createdAt: faker.date.past().toISOString(),
      updatedAt: faker.date.recent().toISOString()
    })),
    createdAt: faker.date.past().toISOString(),
    updatedAt: faker.date.recent().toISOString()
  };
};

export const JOBS: TJob[] = faker.helpers.multiple(getJobsData, {
  count: 500
});
