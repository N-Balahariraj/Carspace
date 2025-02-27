import { auth, db } from "../Firebase";
import { doc, setDoc, getDocs, getDoc, updateDoc, arrayUnion, collection } from "firebase/firestore";
import { RecaptchaVerifier, signInWithPhoneNumber, signOut } from "firebase/auth";

// Initialize reCAPTCHA verifier
export function initializeRecaptcha() {
    window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        'size': 'invisible',
        'callback': (response) => {
          console.log('reCAPTCHA solved:', response); // Log the token!
        },
        'expired-callback': () => {
          console.log('reCAPTCHA expired');
        }
      }, auth);
      
      console.log("RecaptchaVerifier initialized:", window.recaptchaVerifier); // Check if it's created
      
      if (window.recaptchaVerifier.size === 'invisible') {
          window.recaptchaVerifier.render().then(widgetId => {
            console.log(`reCAPTCHA widget ID: ${widgetId}`);
          }).catch(error => {
            console.error("reCAPTCHA render error:", error);
          });
        }
}

// Sign up with phone number
export async function signUp(name, email, phoneNumber, role) {
    try {
        const appVerifier = window.recaptchaVerifier;
        const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
        const verificationCode = window.prompt('Please enter the verification code that was sent to your mobile device.');
        const result = await confirmationResult.confirm(verificationCode);
        const user = result.user;

        await setDoc(doc(db, "users", user.uid), {
            name: name,
            phoneNumber: phoneNumber,
            email: email,
            role: role || 'user',
            likedCars: [],
            bookedCars: [],
            testDriveCars: [],
            boughtCars: []
        });

        return user;
    } catch (error) {
        console.error("Error signing up: ", error);
        throw error;
    }
}

// Sign in with phone number
export async function SignInWithPhoneNumber(phoneNumber) {
    const appVerifier = window.recaptchaVerifier
    const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
    window.confirmationResult = confirmationResult;
    return confirmationResult;
}

// Verify OTP
export async function verifyOTP(otp) {
    const result = await window.confirmationResult.confirm(otp);
    return result.user;
}

// Fetch user details
export async function fetchUserDetails(uid) {
    const userDetails = await getDoc(doc(db, 'users', uid));
    if (userDetails.exists()) {
        return userDetails.data();
    }
    console.log("No such user");
    return null;
}

// Fetch users
export async function fetchUsers() {
    const querySnapshot = await getDocs(collection(db, "users"));
    const users = [];
    querySnapshot.forEach((doc) => {
        users.push({ id: doc.id, ...doc.data() });
    });
    return users;
}

// User actions on cars
export async function likeCar(uid, carId) {
    await updateDoc(doc(db, 'users', uid), {
        likedCars: arrayUnion(carId)
    });
}

export async function bookCar(uid, carId) {
    await updateDoc(doc(db, 'users', uid), {
        bookedCars: arrayUnion(carId)
    });
}

export async function testDriveCar(uid, carId) {
    await updateDoc(doc(db, 'users', uid), {
        testDriveCars: arrayUnion(carId)
    });
}

export async function buyCar(uid, carId) {
    await updateDoc(doc(db, 'users', uid), {
        boughtCars: arrayUnion(carId)
    });
}

// Sign out
export async function SignOut() {
    try {
        await signOut(auth);
    } catch (error) {
        console.log("Error : ", error.message);
    }
}