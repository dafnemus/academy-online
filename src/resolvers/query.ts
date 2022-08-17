import { IResolvers } from '@graphql-tools/utils';
import { database } from '../data/data.store';

const query: IResolvers = {
  Query: {
    students(): any {
      return database.students;
    },
    student(__: void, { id }): any {
      const student = database.students.filter(
        (student) => student.id === id
      )[0];

      if (student === undefined) {
        return {
          id: '-1',
          name: `Student with id ${id} not found`,
          email: '',
          courses: [],
        };
      }
      return student;
    },
    courses(): any {
      return database.courses;
    },
    course(__: void, { id }): any {
      const course = database.courses.filter((course) => course.id === id)[0];
      if (course === undefined) {
        return {
          id: '-1',
          title: `Course with id ${id} not found`,
          description: '',
          class: '',
          time: '',
          logo: '',
          level: '',
          path: '',
        };
      }
      return course;
    },
  },
};

export default query;
