import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: 18,
    margin: 10,
  },
  iconTextContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    color: '#002855',
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 10,
  },
  arrowContainer: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
});
