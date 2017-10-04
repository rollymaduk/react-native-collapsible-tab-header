// @flow
import { range } from 'lodash';

export default function (count: number) {
  return range(1, count).map(number => ({
    title: `title-${number}`,
    subTitle: `subtitle-${number}`,
  }));
}
