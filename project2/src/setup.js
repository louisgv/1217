// setup the game and restore the state of previous game if exist
async function setup() {

	await Promise.all([
		warmUpGiphyTable(),
		tutorial()
	])


	// TODO: Improve this:
	setData(STOREKEY.ROUND, 0);

	info("PICK HERO");

	await	spawnHeroSelectionCards();

	await dialog("HELLO THERE")

	// startGame();
}

window.addEventListener('load', setup);
