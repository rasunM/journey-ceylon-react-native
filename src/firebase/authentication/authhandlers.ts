import {
  getAuth,
  createUserWithEmailAndPassword,
} from '@react-native-firebase/auth';
import {Alert} from 'react-native';
import functions from '@react-native-firebase/functions';
import auth from '@react-native-firebase/auth';

export const createUser = (email: string, password: string) => {
  createUserWithEmailAndPassword(getAuth(), email, password)
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

export const sendOTP = async (email: string) => {
  try {
    const response: any = await functions().httpsCallable('sendWelcomeEmail')({
      email,
    });
    console.log(response.data.message);
  } catch (error) {
    console.error('Email send failed:', error);
  }
};

export const loginUser = async (
  email: string,
  password: string,
): Promise<boolean> => {
  try {
    await auth().signInWithEmailAndPassword(email, password);
    return true;
  } catch (error: any) {
    const errorMessages: {[key: string]: string} = {
      'auth/user-not-found': 'No user found with this email address!',
      'auth/wrong-password': 'Incorrect password. Please try again.',
      'auth/invalid-email': 'The email address is invalid!',
      'auth/invalid-credential': 'Invalid credentials!',
    };

    Alert.alert(errorMessages[error.code] || 'An error occurred.');
    return false;
  }
};

export const updatePassword = async (newPassword: string) => {
  const user = auth().currentUser;

  if (user) {
    try {
      await user.updatePassword(newPassword);
      Alert.alert('Password updated successfully');
    } catch (error: any) {
      Alert.alert('Error updating password:', error.message);
    }
  } else {
    Alert.alert('No user is signed in');
  }
};

export const logoutUser = async () => {
  try {
    await auth().signOut();
    Alert.alert('User logged out successfully');
  } catch (error) {
    Alert.alert('Error logging out');
  }
};
