import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Plan from '../views/Plan/Plan';
import HealthPlan from '../views/HealthPlans/HealthPlan';
import Header from '../components/headers/Header';
import Payment from '../views/Payment/Payment';
import PlanDetails from '../views/PlanDetails/PlanDetails';
const Stack = createNativeStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator initialRouteName="HealthPlan" screenOptions={{headerShown:false}}>
    <Stack.Screen name="Plan" component={HealthPlan}   />
    <Stack.Screen name="Screen1" component={Plan} />
    <Stack.Screen name="Payment" component={Payment} />
    <Stack.Screen name="PlanDetails" component={PlanDetails} />

  </Stack.Navigator>
  );
  export default AppNavigator