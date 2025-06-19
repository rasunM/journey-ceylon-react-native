import {
  getAuth,
  createUserWithEmailAndPassword,
} from '@react-native-firebase/auth';
import {Alert} from 'react-native';

export const createUser = () => {
  createUserWithEmailAndPassword(
    getAuth(),
    'jane.doe@example.com',
    'SuperSecretPassword!',
  )
    .then(() => {
      console.log('User account created & signed in!');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        Alert.alert('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

      console.error(error);
    });
};
