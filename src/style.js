// @flow
const ABSOLUTE = 'absolute';
const CENTER = 'center';
export default {
  header: (height: number) => ({
    position: ABSOLUTE,
    zIndex: 3,
    top: 0,
    left: 0,
    right: 0,
    height,
    justifyContent: CENTER,
  }),
};
