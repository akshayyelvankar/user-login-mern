import React from 'react';
import firebase from '../src/firebase';

class Users extends React.Component{

    handelChange =(e)=>{
       const{name,value} = e.target
       this.setState(
        {
            [name]:value
        }
       ) 
    }
    configureCaptcha =()=>{
        window.recaptchaVerifire = new firebase.auth.RecaptchaVerifier('sign-in-button',{
            'size':'invisible',
            'callback':(response)=>{
                this.onSignInSubmit();
                console.log('recaptca varified')
            },
            defaultContry:"IN"
        })
    }
    onSignInSubmit =(e)=>{
      e.preventDefault()
      this.configureCaptcha()
      const phoneNumber ="+91" + this.state.mobile
      console.log(phoneNumber)

      const appVerifire = window.recaptchaVerifire;
      firebase.auth().signInWithPhoneNumber(phoneNumber,appVerifire)
      .then((confirmationResult)=>{
        window.confirmationResult =confirmationResult;
        console.log("OTP has been sent")
      }).catch((error)=>{
         console.log("SMS not sent")
      })
    }
    onSubmitOTP =(e)=>{
        const code =this.state.otp
        console.log(code)
        window.confirmationResult.confrim(code).then((result)=>{
            const user =result.user;
            console.log(JSON.stringify(user))
            alert("User is verified")
        }).catch((error)=>{

        })
    }
    render(){
        return(
            <div>
                <h2>Login From</h2>
                <from>
                    <div id='sign-in-button'></div>
                    <input type='number' name='mobile' placeholder='Moblie Number' required onChange={this.handelChange}/>
                    <button onClick={this.onSignInSubmit}>Submit</button>
                </from>

                <h2>Enter OTP</h2>
                <from>
                    <input type='number' name='otp' placeholder='OTP Number' required onChange={this.handelChange}/>
                    <button onClick={this.onSubmitOTP}>Submit</button>
                </from>
            </div>
        )
    }
}
export default Users;