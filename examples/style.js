import { Constants } from 'expo';

const CENTER = 'center';
export default {
  tabs: {
    backgroundColor: '#22E0D1',
    paddingTop: 5,
    borderWidth: 0,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: 'rgba(0,0,0,0.05)',
  },
  tab: { padding: 2 },
  label: { fontSize: 10 },
  container: { flex: 1},


  homeContainer: {
    flex: 1,
    alignItems: CENTER,
    justifyContent: CENTER,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },

};
