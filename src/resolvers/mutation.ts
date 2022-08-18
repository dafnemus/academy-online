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

      if (
        database.courses.filter((course) => course.title === newCourse.title)
          .length === 0
      ) {
        database.courses.push(newCourse);
        return newCourse;
      }
      return {
        id: 'Error. -1',
        title: 'Error. The course already exists',
        description: '',
        class: -1,
        time: 0.0,
        level: 'TODOS',
        logo: '',
        path: '',
        teacher: '',
        reviews: [],
      };;
    },
  },
};

export default mutation;
