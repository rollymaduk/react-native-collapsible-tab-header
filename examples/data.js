// @flow
import { range } from 'lodash';

let data = [];

export default function (count: number) {
  if (!data.length) {
    console.log('here we are')
    data = range(1, count).map(number => ({
      id: `id_${number}`,
      title: `title-${number}`,
      subTitle: `subtitle-${number}`,
    }));
  }
  return data;
}
