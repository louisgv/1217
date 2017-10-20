const HeroSelectionOverlayEl = document.querySelector('#HeroSelectionOverlay');

// Callback handle to log the selected hero and start the main game
function OnHeroSelected() {
  HeroSelectionOverlayEl.style.display = "none";

  PlayerSetHero(this);

  const npcHeroCard = GetRandomCard();

  NPCSetHero(npcHeroCard);

  StartGame();
}

// Spawn all of the hero selection cards
function SpawnHeroSelectionCards() {
  const HeroCardContainerEl = CreateElementWithId('div', 'HeroCardContainer');
  HeroSelectionOverlayEl.appendChild(HeroCardContainerEl);

  CONSTANT.ELEMENTS.map((element) => {
    const background = CONSTANT.ELEMENT_COLOR[element];

    const card = new Card({ element, image : null, point: 0 });

    const elmCardEl = CreateCardEl(card, OnHeroSelected);

    HeroCardContainerEl.appendChild(elmCardEl);
  })
}
