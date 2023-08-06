import {View, Text, Image} from 'react-native';
import React from 'react';
import Header from '../../components/headers/Header';
import styles from './PlanDetails.style';
import ThreeDot from '../../assets/svg/other.svg';
import Info from '../../assets/svg/Info icon.svg';
import Chart from '../../assets/svg/Chart.svg';
import SmallCardComponent from '../../components/smallCard/SmallCard';
import Coffea from '../../assets/img/coffee.png';
import Compass from '../../assets/img/compass.png';

const OtherColumnCard = () => {
  return (
    <View style={styles.othercolumnCard}>
      <View style={styles.othercolumnCardImageContainer}>
        <Image source={require('../../assets/img/Group.png')} />
      </View>
      <View style={styles.othercolumnCardContent}>
        <Text style={styles.cardText}>Tartı</Text>
        <Text style={styles.cardText}>Vestel Cardio</Text>
        <Text style={styles.cardText}>Omron Tansiyon Aleti</Text>
      </View>
    </View>
  );
};
const PlanDetails = () => {
  const leftColumnCards = [
    {
      number: '3',
      text: 'Ambulance',
      icon: Coffea,
      iconBackgroundColor: '#B1E5FC',
      iconPosition: 'right',
    },
    {
      number: '3',
      text: `Sağlık takip${`\n`}randevusu`,
      icon: Coffea,
      iconBackgroundColor: '#B1E5FC',
      iconPosition: 'right',
    },
    {
      number: '3',
      text: 'Transfer hizmeti',
      icon: Coffea,
      iconBackgroundColor: '#B1E5FC',
      iconPosition: 'right',
    },
  ];

  const rightColumnCards = [
    {
      number: '4/6',
      text: 'Telehealth',
      icon: Coffea,
      iconBackgroundColor: '#B1E5FC',
      iconPosition: 'right',
    },
    {
      number: '28',
      text: 'Danışma hattı',
      icon: Compass,
      iconBackgroundColor: '#CABDFF',
      iconPosition: 'right',
    },
    {
      number: '3',
      text: `Evde sağlık${`\n`}Hizmeti`,
      icon: Coffea,
      iconBackgroundColor: '#B1E5FC',
      iconPosition: 'right',
    },
    {
      number: '3',
      text: `Sağlık${`\n`}programları`,
      icon: Coffea,
      iconBackgroundColor: '#B1E5FC',
      iconPosition: 'right',
    },
  ];

  return (
    <>
      <Header title="Plan Details" />
      <View style={{margin: 10}}>
        <View style={styles.container}>
          <View style={styles.allCardContainer}>
            <View style={styles.totalTextContainer}>
              <Text style={styles.totalText}>Total Usage</Text>
              <Info style={{marginLeft: 5, top: 2}} />
            </View>
            <ThreeDot />
          </View>
          <View style={styles.allCardContainer}>
            <View style={styles.usageDetailsContainer}>
              <View style={styles.usageItem}>
                <View style={styles.totalTextContainer}>
                  <View style={styles.ellipse} />
                  <Text style={styles.usageText}>
                    Online Uzman Dr.{'\n'}Görüşmesi
                  </Text>
                </View>
                <Text style={styles.percentText}>60%</Text>
              </View>
              <View style={styles.usageItem}>
                <View style={styles.totalTextContainer}>
                  <View style={styles.ellipse2} />
                  <Text style={styles.usageText}>
                    Transfer Hizmeti{'\n'}(Ev-Hastane)
                  </Text>
                </View>
                <Text style={styles.percentText}>50%</Text>
              </View>
            </View>
            <Chart />
          </View>
        </View>

        <View style={styles.cardsContainer}>
          <View style={styles.leftCards}>
            <OtherColumnCard />
            {leftColumnCards.map((card, index) => (
              <SmallCardComponent
                key={index}
                number={card.number}
                text={card.text}
                icon={card.icon}
                iconBackgroundColor={card.iconBackgroundColor}
              />
            ))}
          </View>

          <View style={styles.rightCards}>
            {rightColumnCards.map((card, index) => (
              <SmallCardComponent
                key={index}
                number={card.number}
                text={card.text}
                icon={card.icon}
                iconBackgroundColor={card.iconBackgroundColor}
              />
            ))}
          </View>
        </View>
      </View>
    </>
  );
};

export default PlanDetails;
