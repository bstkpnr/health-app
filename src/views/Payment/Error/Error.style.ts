import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    padding: 16,
    backgroundColor: '#FFF8F8',
    borderRadius: 18,
    borderColor: '#F85640',
    borderWidth: 1,
    shadowColor: 'rgba(64, 72, 82, 0.05)',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 1,
    flexDirection: 'row',
  },

  alertIconContainer: {
    width: 28,
    height: 28,
    borderRadius: 9999,
    backgroundColor: '#F85640',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  alertText: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
  },

  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  title: {
    color: '#F85640',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.1,
  },
  subtitle: {
    width: 255,
    color: '#79170A',
    fontSize: 12,
    fontWeight: '500',
  },
});
