"use strict";

// const MOUNT_ID = 'game-root'

const FOOD = {
	MAX_WIDTH: 100,
	MAX_HEIGHT: 100,
}

const ZOOM = {
	MAX: 1.0,
	MIN: 0.1,
	SCALE: 0.1
}

const IMAGES = [
    "images/Maggot.png",
	"images/Bitemark.png"
]

const UNIQUE_WARNING = [
	"You cannot feed the same image twice",
	"They already ate that",
	"The maggots demand fresh memes",
	"Feed us fresh meme!",
	"Can I have fresh meme please bause?",
	"That food is old"
]

const IMAGE_HASH_SET = new Set();

const MAGGOT_ID = "taMAGGOTchi-storage";


//Stores class to abstracting data interaction
class Store {
	// Return the food config
	static getFood() {
		return FOOD;
	}

	static setMaggotCount(count) {
		// Save an array to localStorage
		let items = count;
		items = JSON.stringify(items);
		return localStorage.setItem(MAGGOT_ID, items);
	}

	//Return the maggot count from local storage
	static getMaggotCount() {
		//Retrieve an array from localStorage
		let items = localStorage.getItem(MAGGOT_ID);
		items = JSON.parse(items);
    return items;
}




	// Return the zoom config
	static getZoom() {
		return ZOOM;
	}

	// Return name of image assets
	static getImages() {
		return IMAGES;
	}

	// Return a random warning for variety sake
	static getRandomWarning(){
		return UNIQUE_WARNING[Math.floor(Math.random() * UNIQUE_WARNING.length)]
	}

	// Add a new image into the hash list
	static addImage(base64Data) {
		const imageHash = keccak512(base64Data)

		IMAGE_HASH_SET.add(imageHash)

        return imageHash;
	}

	// Check if image is already in the hashset
	static hasImage(base64Data) {
        const imageHash = keccak512(base64Data)

		return(IMAGE_HASH_SET.has(imageHash))
	}
}
