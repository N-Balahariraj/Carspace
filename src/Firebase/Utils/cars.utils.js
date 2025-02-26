import { db, storage } from '../Firebase'; // Updated import

const carsCollection = db.collection('cars');

// Add a new car
export const addCar = async (car, imageFile) => {
    try {
        const imageRef = storage.ref().child(`carImages/${imageFile.name}`);
        await imageRef.put(imageFile);
        const imageUrl = await imageRef.getDownloadURL();

        const carData = {
            ...car,
            imageUrl,
        };

        const docRef = await carsCollection.add(carData);
        return docRef.id;
    } catch (error) {
        console.error('Error adding car: ', error);
        throw error;
    }
};

// Get all cars
export const getCars = async () => {
    try {
        const snapshot = await carsCollection.get();
        const cars = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return cars;
    } catch (error) {
        console.error('Error getting cars: ', error);
        throw error;
    }
};

// Update a car
export const updateCar = async (id, car, imageFile) => {
    try {
        let imageUrl = car.imageUrl;

        if (imageFile) {
            const imageRef = storage.ref().child(`carImages/${imageFile.name}`);
            await imageRef.put(imageFile);
            imageUrl = await imageRef.getDownloadURL();
        }

        const carData = {
            ...car,
            imageUrl,
        };

        await carsCollection.doc(id).update(carData);
    } catch (error) {
        console.error('Error updating car: ', error);
        throw error;
    }
};

// Delete a car
export const deleteCar = async (id) => {
    try {
        await carsCollection.doc(id).delete();
    } catch (error) {
        console.error('Error deleting car: ', error);
        throw error;
    }
};

