import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding:10,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    marginBottom: 10
    
  },
  leftContainer: {
    alignItems: 'flex-start',
  },
  numberStyle: {
    fontSize: 24,
    fontWeight: '600',
    color:'#002855',

    
  },
  textStyle: {
    marginTop: 5,
    color:'#002855',
    fontSize:12,
    fontWeight:'500',

  },
  iconStyle: {
    width: 16,
    height: 16,
  },
  iconBackground: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
});
