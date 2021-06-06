import React, {useContext, useState} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Platform,
    StyleSheet,
    ScrollView,
    ActivityIndicator
} from 'react-native';
import {Font} from 'expo'
import {Picker} from '@react-native-picker/picker'
import { FontAwesome5 } from '@expo/vector-icons';


import FormInput from '../components/FormInput'
import FormButton from '../components/FormButton'
import SocialButton from '../components/SocialButton'
import Spacer from '../components/Spacer'

import { Context as AuthContext} from '../context/AuthContext'

const DiseaseScreen = ({navigation}) => {

    const {state, predict} = useContext(AuthContext)
    const [symptom1, setSymptom1] = useState('')
    const [symptom2, setSymptom2] = useState('')
    const [symptom3, setSymptom3] = useState('')
    const [symptom4, setSymptom4] = useState('')
    const [symptom5, setSymptom5] = useState('')
    // const [symptom6, setSymptom6] = useState('')


    const symptoms = ['Please select symptom','itching','skin_rash','nodal_skin_eruptions','continuous_sneezing','shivering','chills','joint_pain','stomach_pain','acidity','ulcers_on_tongue','muscle_wasting','vomiting','burning_micturition','spotting_ urination', 'fatigue', 'weight_gain', 'anxiety', 'cold_hands_and_feets', 'mood_swings', 'weight_loss', 'restlessness', 'lethargy','patches_in_throat', 'irregular_sugar_level', 'cough', 'high_fever', 'sunken_eyes', 'breathlessness', 'sweating', 'dehydration', 'indigestion', 'headache', 'yellowish_skin', 'dark_urine', 'nausea', 'loss_of_appetite', 'pain_behind_the_eyes', 'back_pain', 'constipation', 'abdominal_pain', 'diarrhoea', 'mild_fever', 'yellow_urine', 'yellowing_of_eyes','acute_liver_failure', 'fluid_overload', 'swelling_of_stomach', 'swelled_lymph_nodes', 'malaise', 'blurred_and_distorted_vision', 'phlegm', 'throat_irritation', 'redness_of_eyes', 'sinus_pressure', 'runny_nose', 'congestion', 'chest_pain', 'weakness_in_limbs', 'fast_heart_rate', 'pain_during_bowel_movements', 'pain_in_anal_region', 'bloody_stool', 'irritation_in_anus', 'neck_pain', 'dizziness', 'cramps','bruising', 'obesity', 'swollen_legs', 'swollen_blood_vessels', 'puffy_face_and_eyes', 'enlarged_thyroid', 'brittle_nails', 'swollen_extremeties', 'excessive_hunger', 'extra_marital_contacts', 'drying_and_tingling_lips', 'slurred_speech', 'knee_pain', 'hip_joint_pain', 'muscle_weakness', 'stiff_neck', 'swelling_joints', 'movement_stiffness', 'spinning_movements', 'loss_of_balance', 'unsteadiness', 'weakness_of_one_body_side','loss_of_smell', 'bladder_discomfort', 'foul_smell_of urine', 'continuous_feel_of_urine', 'passage_of_gases', 'internal_itching', 'toxic_look_(typhos)', 'depression', 'irritability', 'muscle_pain', 'altered_sensorium', 'red_spots_over_body', 'belly_pain', 'abnormal_menstruation', 'dischromic _patches', 'watering_from_eyes', 'increased_appetite', 'polyuria', 'family_history', 'mucoid_sputum', 'rusty_sputum', 'lack_of_concentration','visual_disturbances', 'receiving_blood_transfusion', 'receiving_unsterile_injections', 'coma', 'stomach_bleeding', 'distention_of_abdomen', 'history_of_alcohol_consumption', 'fluid_overload.1', 'blood_in_sputum', 'prominent_veins_on_calf', 'palpitations', 'painful_walking', 'pus_filled_pimples', 'blackheads', 'scurring', 'skin_peeling', 'silver_like_dusting', 'small_dents_in_nails', 'inflammatory_nails', 'blister', 'red_sore_around_nose', 'yellow_crust_ooze']

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* <Image source={require('../../assets/user.png')} style={styles.logo} /> */}
          <Text style={styles.text}>Tell about your symptoms, we will know them!</Text>

        <View style={styles.pickerView}>
          <Picker style={styles.picker} selectedValue={symptom1} onValueChange={(itemValue) => setSymptom1(itemValue)}>
              {symptoms.map((item,index) => (
                <Picker.Item value={item} label={item} key={index}/>
              ))}
          </Picker>
         </View>

        <View style={styles.pickerView}>
          <Picker style={styles.picker} selectedValue={symptom2} onValueChange={(itemValue) => setSymptom2(itemValue)}>
              {symptoms.map((item,index) => (
                <Picker.Item value={item} label={item} key={index}/>
              ))}
          </Picker>
          </View>

          <View style={styles.pickerView}>
          <Picker style={styles.picker} selectedValue={symptom3} onValueChange={(itemValue) => setSymptom3(itemValue)}>
              {symptoms.map((item,index) => (
                <Picker.Item value={item} label={item} key={index}/>
              ))}
          </Picker>
          </View>

          <View style={styles.pickerView}>
          <Picker style={styles.picker} selectedValue={symptom4} onValueChange={(itemValue) => setSymptom4(itemValue)}>
              {symptoms.map((item,index) => (
                <Picker.Item value={item} label={item} key={index}/>
              ))}
          </Picker>
          </View>

          <View style={styles.pickerView}>
          <Picker style={styles.picker} selectedValue={symptom5} onValueChange={(itemValue) => setSymptom5(itemValue)}>
              {symptoms.map((item,index) => (
                <Picker.Item value={item} label={item} key={index}/>
              ))}
          </Picker>
          </View>
          
          

          <FormButton
            buttonTitle="Predict"
            onPress={() => predict(symptom1, symptom2, symptom3, symptom4,symptom5)}
          />

          <View>
            <Text style={styles.FollowingText}>You may have the following disease.</Text>
          </View>
          <View> 
          {state.loading ? <ActivityIndicator style={{marginTop: 12}} size="large" color="#00ff00" /> : null}
          {state.prediction ? <Text style={styles.predictionText}>{state.prediction}</Text> : null}
          
          </View>
            {state.errorMessage ? <Text style={styles.error}>{state.errorMessage}</Text> : null}
          

        </ScrollView>
    )
}

DiseaseScreen['navigationOptions'] = screenProps => ({
  title: 'Disease',
  tabBarIcon: <FontAwesome5 name="clinic-medical" size={24} color="red" />
})

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      paddingTop: 50
    },
    logo: {
      height: 120,
      width: 120,
      resizeMode: 'cover',
    },
    text: {
      fontSize: 24,
      marginTop: 20,
      color: '#051d5f',
      textAlign: 'center'
    },
    navButton: {
      marginTop: 15,
    },
    forgotButton: {
      marginVertical: 35,
    },
    navButtonText: {
      fontSize: 18,
      fontWeight: '500',
      color: '#2e64e5',
    },
    error: {
      fontSize: 18,
      color: 'red',
      marginVertical: 15,
      marginLeft: 13
    },
    picker: {
        width: 300,
        height: 45,
        borderWidth: 2,
        borderColor: "black",
        borderWidth: 1,
        fontSize: 18
    },
    pickerView: {
      marginTop: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        borderWidth: 1,
        borderRadius: 10
    },
    predictionText : {
      fontSize: 24,
      marginTop: 16,
      fontWeight: 'bold'

    },
    FollowingText: {
      fontSize: 22,
      marginTop: 15,
      textAlign: 'center'
    }
});
export default DiseaseScreen;