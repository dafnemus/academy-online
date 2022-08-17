import { IResolvers } from '@graphql-tools/utils';
import _ from 'lodash';
import { database } from '../data/data.store';

const mutation: IResolvers = {
  Mutation: {
    createCourse: (__: void, { course }): any => {
      const newCourse = {
        id: String(database.courses.length + 1),
        title: course.title,
        description: course.description,
        class: course.class,
        time: course.time,
        level: course.level,
        logo: course.logo,
        path: course.path,
        teacher: course.teacher,
        reviews: [],
      };

      database.courses.push(newCourse);
      return newCourse;
    },
  },
};

export default mutation;
