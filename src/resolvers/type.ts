import { IResolvers } from '@graphql-tools/utils';
import { database } from '../data/data.store';
import _ from 'lodash';

const type: IResolvers = {
  Student: {
    courses: (parent) => {
      const listCourses: Array<any> = [];
      parent.courses.map((course: string) => {
        listCourses.push(_.filter(database.courses, ['id', course])[0]);
      });
      return listCourses;
    },
  },
};

export default type;
