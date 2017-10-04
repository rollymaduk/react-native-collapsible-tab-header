import { Constants } from 'expo';

const CENTER = 'centeer';
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
  container: { flex: 1, alignItems: CENTER, justifyItems: CENTER },


  homeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },

};
