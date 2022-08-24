import { IResolvers } from '@graphql-tools/utils';
import _ from 'lodash';
import { database } from '../data/data.store';

const errorMessage = {
  id: 'Error. -1',
  title: 'Error. The course not exist',
  description: '',
  class: -1,
  time: 0.0,
  level: 'TODOS',
  logo: '',
  path: '',
  teacher: '',
  reviews: [],
};

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
      errorMessage.title = 'Error. The course already exists';
      return errorMessage;
    },

    updateCourse: (__: void, { course }): any => {
      const result = _.findIndex(database.courses, function (o) {
        return o.id === course.id;
      });

      if (result > -1) {
        const reviews = database.courses[result].reviews;
        course.reviews = reviews;
        database.courses[result] = course;
        return course;
      }
      return errorMessage;
    },

    deleteCourse: (__: void, { id }): any => {
      const result = _.remove(database.courses, function (o) {
        return o.id === id;
      });

      if (result[0] === undefined) {
        errorMessage.title = 'Error. The course could not founded';
        return errorMessage;
      }

      return result[0]
    },
  },
};

export default mutation;
