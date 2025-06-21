import firestore from '@react-native-firebase/firestore';
import {Alert} from 'react-native';

export const addUserToFirestore = async (
  userID: string,
  email: string,
  username: string,
) => {
  await firestore()
    .collection('users')
    .add({
      userID: userID,
      email: email,
      username: username,
      createdAt: firestore.FieldValue.serverTimestamp(),
    })
    .then(res => {
      Alert.alert('User Successfully Created!');
    })
    .catch(err => {
      Alert.alert('Error', 'Failed to add detials!', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    });
};

export const getUserFromFirestore = async (email: string) => {
  const snapshot = await firestore()
    .collection('users')
    .where('email', '==', email)
    .limit(1)
    .get();

  if (snapshot.empty) return;

  const data = snapshot.docs[0].data();
  return data;
};

export const checkOTPValidation = async (email: string, userOTP: string) => {
  const snapshot = await firestore()
    .collection('otps')
    .where('email', '==', email)
    .limit(1)
    .get();


  if (snapshot.empty) return false;

  const data = snapshot.docs[0].data();
  return data.otp === userOTP;
};
