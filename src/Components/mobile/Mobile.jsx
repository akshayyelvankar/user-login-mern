import React, { useState } from 'react';
import firebase from '../../firebase.js';

const Mobile = () => {

  const [phoneNumber, setPhoneNumber] = useState();
  const [verificationCode, setVerificationCode] = useState('');
  const [verificationId, setVerificationId] = useState(null);

  const handleSendOtp = async (e) => {
    e.preventDefault()
    try {
      const confirmationResult = await firebase.auth().signInWithPhoneNumber(phoneNumber);
      console.log(confirmationResult)
      setVerificationId(confirmationResult.verificationId);
    } catch (error) {
      console.error('Error sending OTP:', error);
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const credential = firebase.auth.PhoneAuthProvider.credential(verificationId, verificationCode);
      await firebase.auth().signInWithCredential(credential);
      console.log('User is signed in');
    } catch (error) {
      console.error('Error verifying OTP:', error);
    }
  };
  return (

    <div>
      <h2>OTP Verification</h2>
      <input
        type="number"
        placeholder="Enter phone number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <button onClick={(e) => handleSendOtp(e)}>Send OTP</button>
      <br />
      <input
        type="text"
        placeholder="Enter OTP"
        value={verificationCode}
        onChange={(e) => setVerificationCode(e.target.value)}
      />
      <button onClick={handleVerifyOtp}>Verify OTP</button>
    </div>
  )
}
export default Mobile;
