import { auth, db } from "../Firebase.js";
import { doc, setDoc, getDocs, getDoc, updateDoc, arrayUnion, collection } from "firebase/firestore";
import { RecaptchaVerifier, signInWithPhoneNumber, signOut } from "firebase/auth";

// Initialize Recaptcha
export function initializeRecaptcha(containerId) {
    window.recaptchaVerifier = new RecaptchaVerifier(containerId, {
        'size': 'invisible',
        'callback': (response) => {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
        }
    }, auth);
}

// Sign up with phone number
export async function signUp(name,email, phoneNumber, role) {
    const user = auth.currentUser;
    if (user) {
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
    }
    return user;
}

// Sign in with phone number
export async function SignInWithPhoneNumber(phoneNumber, appVerifier) {
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
