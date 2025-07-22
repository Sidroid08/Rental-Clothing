// Import necessary Firestore functions
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Your Firebase config
const firebaseConfig = {

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to add a clothing item to Firestore
async function addClothingItem(name, price, description, imageUrl) {
    try {
        const docRef = await addDoc(collection(db, "clothes"), {
            name: name,
            price: price,
            description: description,
            imageUrl: imageUrl
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

// Example of adding clothing items
addClothingItem("Rose Gold Embellished Gown", 7000, "A beautiful gown with rose gold embellishments.", "images/products/dress1.jpg");
addClothingItem("Multi-colored Printed Lehenga", 13440, "A stunning lehenga with multi-colored prints.", "images/products/dress2.jpg");
addClothingItem("Shri Krishna Dress for Baby Boy & Girl", 546, "An adorable Shri Krishna dress for kids.", "images/products/dress7.jpg");
addClothingItem("Navy Blue Lehenga Set", 6720, "A classic navy blue lehenga set.", "images/products/dress4.jpg");
addClothingItem("White Embroidered Sherwani", 10080, "An elegant white sherwani with embroidery.", "images/products/dress6.jpg");
addClothingItem("Yellow Lehenga", 13440, "A vibrant yellow lehenga for special occasions.", "images/products/dress3.jpg");
addClothingItem("Army Dress for Kids, Indian Military Soldier Fancy Dress Costume", 699, "A fun army dress costume for kids.", "images/products/dress8.jpg");
addClothingItem("Black Formal Pants", 2460, "Stylish black formal pants for all occasions.", "images/products/dress5.jpg");
addClothingItem("Off Shoulder Jumpsuit", 780, "A trendy off-shoulder jumpsuit.", "images/products/ndress1.jpg");
addClothingItem("Red & Black Saree", 3020, "A beautiful red and black saree.", "images/products/ndress2.jpg");
addClothingItem("Tiger Bagh Wild Animal Kids Fancy Dress Costume", 299, "A fun tiger costume for kids.", "images/products/ndress3.webp");
addClothingItem("Spiderman with Gloves Superhero Kids Fancy Dress Costume", 279, "A superhero costume of Spiderman for kids.", "images/products/ndress4.webp");
addClothingItem("Airline Pilot Professional Helper Kids Fancy Dress Costume", 649, "An airline pilot costume for kids.", "images/products/ndress5.webp");
addClothingItem("Oxford Blue Indo-Western", 4030, "A stylish indo-western outfit in oxford blue.", "images/products/ndress6.jpg");
addClothingItem("Golden Embroidered Sherwani With Peshawari", 6160, "An elegant golden embroidered sherwani.", "images/products/ndress7.jpg");
addClothingItem("Stone Grey Indo-Western Art Silk Sherwani With Peshawari", 3630, "A classy stone grey indo-western sherwani.", "images/products/ndress8.jpg");
