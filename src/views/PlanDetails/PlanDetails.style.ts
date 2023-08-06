import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'transparent',
    marginVertical: 10,
  },
  totalTextContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 3,
  },
  allCardContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: 10,
  },
  ellipse: {
    backgroundColor: '#0CAF60',
    height: 8,
    width: 8,
    borderRadius: 50,
  },
  ellipse2: {
    backgroundColor: '#FFD023',
    height: 8,
    width: 8,
    borderRadius: 50,
  },
  usageDetailsContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: 10,
  },
  usageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  usageText: {
    marginLeft: 8,
    flexShrink: 1,
    color: '#6B7280',
fontSize: 12

  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  leftCards: {
    flex: 0.48,
  },
  rightCards: {
    flex: 0.48,
  },
  highlightedCard: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    marginBottom: 20,
  },
  highlightedImageContainer: {
    height: 36,
    width: 36,
    borderRadius: 50,
    backgroundColor: '#FFD88D',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  highlightedCardContent: {
    flexDirection: 'column',
    top: 10,
   
  },
  cardText:{
    color:'#002855',
    fontWeight:'600',
    fontSize:12,

  },
  totalText:{
    color: '#111827',
fontSize: 16,
fontWeight:'600',
marginLeft:5
  },
  percentText:{
    color: '#002855',
fontSize: 12,
fontWeight:'700',
marginLeft:20,
bottom:8
  }
});
