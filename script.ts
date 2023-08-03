type Resources = {
    resource: string,
    qty: number,
    img: string
}
type Building = {
    building: string,
    image: string,
    cost: {
        gold: number,
        wood: number,
        stone: number,
        food: number,
        population: number
    },
    get: {
        gold: number,
        wood: number,
        stone: number,
        food: number,
        population: number
    },
    getPerSecond: {
        gold: number,
        wood: number,
        stone: number,
        food: number,
        population: number
    },
    resourceImages: {
        gold: string,
        wood: string,
        stone: string,
        food: string,
        population: string
    },
    isAvailable: boolean,
    requirementsMet: boolean
}
type BonusResources = {
    gold: number,
    wood: number,
    stone: number,
    food: number,
    population: number
}

const resourcesContainer = document.querySelector(".resourcesContainer") as HTMLElement
const buyContainer = document.querySelector(".buyContainer") as HTMLElement
const ownedContainer = document.querySelector(".ownedContainer") as HTMLElement

const resources: Resources[] = [
    {
        resource: "GOLD",
        qty: 100,
        img: "https://static.vecteezy.com/system/resources/previews/019/527/049/original/an-8-bit-retro-styled-pixel-art-illustration-of-gold-free-png.png"
    },
    {
        resource: "WOOD",
        qty: 20,
        img: "https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/60f173aa4aff13c.png"
    },
    {
        resource: "STONE",
        qty: 30,
        img: "https://static.vecteezy.com/system/resources/previews/019/527/056/original/an-8-bit-retro-styled-pixel-art-illustration-of-a-stone-rock-free-png.png"
    },
    {
        resource: "FOOD",
        qty: 20,
        img: "https://art.pixilart.com/9303f679e92050a.png"
    },
    {
        resource: "POPULATION",
        qty: 10,
        img: "https://png.pngtree.com/png-clipart/20221030/original/pngtree-maid-pixel-art-character-icon-design-png-image_8744095.png"
    }
]
const buildings: Building[] = [
    {
        building: "Tent",
        image: "https://i.redd.it/icezgp2os9i71.png",
        cost: {
            gold: 10,
            wood: 10,
            stone: 5,
            food: 0,
            population: 0
        },
        get: {
            gold: 0,
            wood: 0,
            stone: 0,
            food: 0,
            population: 2
        },
        getPerSecond: {
            gold: 0,
            wood: 1,
            stone: 1,
            food: 0,
            population: 0
        },
        resourceImages: {
            gold: "https://static.vecteezy.com/system/resources/previews/019/527/049/original/an-8-bit-retro-styled-pixel-art-illustration-of-gold-free-png.png",
            wood: "https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/60f173aa4aff13c.png",
            stone: "https://static.vecteezy.com/system/resources/previews/019/527/056/original/an-8-bit-retro-styled-pixel-art-illustration-of-a-stone-rock-free-png.png",
            food: "https://art.pixilart.com/9303f679e92050a.png",
            population: "https://png.pngtree.com/png-clipart/20221030/original/pngtree-maid-pixel-art-character-icon-design-png-image_8744095.png"
        },
        isAvailable: false,
        requirementsMet: true
    },
    {
        building: "Hunter Hut",
        image: "https://stardewvalleywiki.com/mediawiki/images/thumb/2/2b/Fish_Shop.png/270px-Fish_Shop.png",
        cost: {
            gold: 20,
            wood: 20,
            stone: 20,
            food: 10,
            population: 5
        },
        get: {
            gold: 0,
            wood: 0,
            stone: 0,
            food: 0,
            population: 0
        },
        getPerSecond: {
            gold: 0,
            wood: 0,
            stone: 0,
            food: 3,
            population: 0
        },
        resourceImages: {
            gold: "https://static.vecteezy.com/system/resources/previews/019/527/049/original/an-8-bit-retro-styled-pixel-art-illustration-of-gold-free-png.png",
            wood: "https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/60f173aa4aff13c.png",
            stone: "https://static.vecteezy.com/system/resources/previews/019/527/056/original/an-8-bit-retro-styled-pixel-art-illustration-of-a-stone-rock-free-png.png",
            food: "https://art.pixilart.com/9303f679e92050a.png",
            population: "https://png.pngtree.com/png-clipart/20221030/original/pngtree-maid-pixel-art-character-icon-design-png-image_8744095.png"
        },
        isAvailable: false,
        requirementsMet: false
    },
    {
        building: "House",
        image: "https://i.pinimg.com/originals/6e/89/4e/6e894e511837c20e210fa168ecd72ea3.png",
        cost: {
            gold: 50,
            wood: 80,
            stone: 70,
            food: 0,
            population: 0
        },
        get: {
            gold: 0,
            wood: 0,
            stone: 0,
            food: 0,
            population: 10
        },
        getPerSecond: {
            gold: 1,
            wood: 0,
            stone: 0,
            food: 0,
            population: 0
        },
        resourceImages: {
            gold: "https://static.vecteezy.com/system/resources/previews/019/527/049/original/an-8-bit-retro-styled-pixel-art-illustration-of-gold-free-png.png",
            wood: "https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/60f173aa4aff13c.png",
            stone: "https://static.vecteezy.com/system/resources/previews/019/527/056/original/an-8-bit-retro-styled-pixel-art-illustration-of-a-stone-rock-free-png.png",
            food: "https://art.pixilart.com/9303f679e92050a.png",
            population: "https://png.pngtree.com/png-clipart/20221030/original/pngtree-maid-pixel-art-character-icon-design-png-image_8744095.png"
        },
        isAvailable: false,
        requirementsMet: false
    },
    {
        building: "City Hall",
        image: "https://i.pinimg.com/originals/07/d5/f2/07d5f2549d9d37f20a4a64674e629724.png",
        cost: {
            gold: 150,
            wood: 200,
            stone: 300,
            food: 200,
            population: 100
        },
        get: {
            gold: 0,
            wood: 0,
            stone: 0,
            food: 0,
            population: 0
        },
        getPerSecond: {
            gold: 3,
            wood: 2,
            stone: 2,
            food: 1,
            population: 0
        },
        resourceImages: {
            gold: "https://static.vecteezy.com/system/resources/previews/019/527/049/original/an-8-bit-retro-styled-pixel-art-illustration-of-gold-free-png.png",
            wood: "https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/60f173aa4aff13c.png",
            stone: "https://static.vecteezy.com/system/resources/previews/019/527/056/original/an-8-bit-retro-styled-pixel-art-illustration-of-a-stone-rock-free-png.png",
            food: "https://art.pixilart.com/9303f679e92050a.png",
            population: "https://png.pngtree.com/png-clipart/20221030/original/pngtree-maid-pixel-art-character-icon-design-png-image_8744095.png"
        },
        isAvailable: false,
        requirementsMet: false
    }
]
const bonusResources: BonusResources = {
    gold: 0,
    wood: 0,
    stone: 0,
    food: 0,
    population: 0
}
let ownedBuildings: Building[] = []


function appendResources() {
    resourcesContainer.innerHTML = ""
    resources.map(resource => {
        resourcesContainer.innerHTML += `
    <div class="gold">
        <img src="${resource.img}" alt="" class="resourceImg">
        <p>${resource.resource}: <span>${resource.qty}</span></p>
    </div>
    `
    })
}

function calculateCost(resources: Resources[], cost: BonusResources) {
    resources[0].qty -= cost.gold
    resources[1].qty -= cost.wood
    resources[2].qty -= cost.stone
    resources[3].qty -= cost.food
    resources[4].qty -= cost.population
}

function calculateProfit(resources: Resources[], get: BonusResources) {
    resources[0].qty += get.gold
    resources[1].qty += get.wood
    resources[2].qty += get.stone
    resources[3].qty += get.food
    resources[4].qty += get.population
}

function calculateBonus(bonusResources: BonusResources, getPerSecond: BonusResources) {
    bonusResources.gold += getPerSecond.gold
    bonusResources.wood += getPerSecond.wood
    bonusResources.stone += getPerSecond.stone
    bonusResources.food += getPerSecond.food
    bonusResources.population += getPerSecond.population
}

function checkAvailability() {
    buildings.map(building => {
        if (building.cost.gold <= resources[0].qty &&
            building.cost.wood <= resources[1].qty &&
            building.cost.stone <= resources[2].qty &&
            building.cost.food <= resources[3].qty &&
            building.cost.population <= resources[4].qty) {

            building.isAvailable = true
            appendBuildings()
        } else {

            building.isAvailable = false
            appendBuildings()
        }
    })

    let tents: Building[] = ownedBuildings.filter(building => building.building === "Tent")
    let huts: Building[] = ownedBuildings.filter(building => building.building === "Hunter Hut")
    let houses: Building[] = ownedBuildings.filter(building => building.building === "House")

    if (tents.length > 0) {
        buildings[1].requirementsMet = true
    }

    if (tents.length > 0 && huts.length > 0) {
        buildings[2].requirementsMet = true
    }

    if (tents.length > 2 && huts.length > 3 && houses.length > 4) {
        buildings[3].requirementsMet = true
    }
}

function disableClick(cards: NodeListOf<HTMLElement>) {
    cards.forEach(card => {
        card.style.pointerEvents = "none"
    })
}

function appendBuildings() {
    buyContainer.innerHTML = ""

    buildings.map((building, i) => {
        buyContainer.innerHTML += `
    <div class="purchaseCard ${building.isAvailable && building.requirementsMet ? "" : "bgGray"}" id="${i}">
            <div class="costContainer">
                <img src="${building.image}" alt="" class="buildImg">
                <div class="d-flex a-center gap1 ${building.cost.gold === 0 ? "d-none" : ""}">
                    <p>${building.cost.gold}</p>
                    <img src="${building.resourceImages.gold}" alt="" class="resourceImg">
                </div>

                <div class="d-flex a-center gap1 ${building.cost.wood === 0 ? "d-none" : ""}">
                    <p>${building.cost.wood}</p>
                    <img src="${building.resourceImages.wood}" alt="" class="resourceImg">
                </div>

                <div class="d-flex a-center gap1 ${building.cost.stone === 0 ? "d-none" : ""}">
                    <p>${building.cost.stone}</p>
                    <img src="${building.resourceImages.stone}" alt="" class="resourceImg">
                </div>

                <div class="d-flex a-center gap1 ${building.cost.food === 0 ? "d-none" : ""}">
                    <p>${building.cost.food}</p>
                    <img src="${building.resourceImages.food}" alt="" class="resourceImg">
                </div>

                <div class="d-flex a-center gap1 ${building.cost.population === 0 ? "d-none" : ""}" >
                    <p>${building.cost.population}</p>
                    <img src="${building.resourceImages.population}" alt="" class="resourceImg">
                </div>
            </div>

            <div class="getContainer ${building.isAvailable && building.requirementsMet ? "" : "bgGray"}">
                <div class="d-flex a-center gap1 ${building.get.gold === 0 ? "d-none" : ""}">
                    <p>${building.get.gold}</p>
                    <img src="${building.resourceImages.gold}" alt="" class="resourceImg">
                </div>

                <div class="d-flex a-center gap1 ${building.get.wood === 0 ? "d-none" : ""}">
                    <p>${building.get.wood}</p>
                    <img src="${building.resourceImages.wood}" alt="" class="resourceImg">
                </div>

                <div class="d-flex a-center gap1 ${building.get.stone === 0 ? "d-none" : ""}">
                    <p>${building.get.stone}</p>
                    <img src="${building.resourceImages.stone}" alt="" class="resourceImg">
                </div>

                <div class="d-flex a-center gap1 ${building.get.food === 0 ? "d-none" : ""}">
                    <p>${building.get.food}</p>
                    <img src="${building.resourceImages.food}" alt="" class="resourceImg">
                </div>

                <div class="d-flex gap1 a-center ${building.get.population === 0 ? "d-none" : ""}">
                    <p>${building.get.population}</p>
                    <img src="${building.resourceImages.population}" alt="" class="resourceImg">
                </div>


                <div class="d-flex a-center gap1 ${building.getPerSecond.gold === 0 ? "d-none" : ""}">
                    <p>${building.getPerSecond.gold} /s</p>
                    <img src="${building.resourceImages.gold}" alt="" class="resourceImg">
                </div>

                <div class="d-flex gap1 a-center ${building.getPerSecond.wood === 0 ? "d-none" : ""}">
                    <p>${building.getPerSecond.wood} /s</p>
                    <img src="${building.resourceImages.wood}" alt="" class="resourceImg">
                </div>

                <div class="d-flex gap1 a-center ${building.getPerSecond.stone === 0 ? "d-none" : ""}">
                    <p>${building.getPerSecond.stone} /s</p>
                    <img src="${building.resourceImages.stone}" alt="" class="resourceImg">
                </div>

                <div class="d-flex a-center gap1 ${building.getPerSecond.food === 0 ? "d-none" : ""}">
                    <p>${building.getPerSecond.food} /s</p>
                    <img src="${building.resourceImages.food}" alt="" class="resourceImg">
                </div>

                <div class="d-flex gap1 a-center ${building.getPerSecond.population === 0 ? "d-none" : ""}">
                    <p>${building.getPerSecond.population} /s</p>
                    <img src="${building.resourceImages.population}" alt="" class="resourceImg">
                </div>
            </div>
            
            <div class="${building.building === "Hunter Hut" && !building.requirementsMet ? "d-flex requirements" : "d-none"}">
                <p>Required:</p>
                    <div>
                        <p>1x</p>
                        <img src="${buildings[0].image}" alt="">
                    </div>
                </div>
                
            <div class="${building.building === "House" && !building.requirementsMet ? "d-flex requirements" : "d-none"}">
                <p>Required:</p>
                    <div>
                        <p>1x</p>
                        <img src="${buildings[0].image}" alt="">
                    </div>
                    <div>
                        <p>1x</p>
                        <img src="${buildings[1].image}" alt="">
                    </div>
            </div>
                
            <div class="${building.building === "City Hall" && !building.requirementsMet ? "d-flex requirements" : "d-none"}">
                <p>Required:</p>
                    <div>
                        <p>3x</p>
                        <img src="${buildings[0].image}" alt="">
                    </div>
                    <div>
                        <p>4x</p>
                        <img src="${buildings[1].image}" alt="">
                    </div>
                    <div>
                        <p>5x</p>
                        <img src="${buildings[2].image}" alt="">
                    </div>
            </div>
            
            </div>            
    </div>
    `
    })

    const buildingCards = document.querySelectorAll(".purchaseCard") as NodeListOf<HTMLElement>

    buildingCards.forEach((buildingCard: HTMLElement )=> {
        buildingCard.onclick = (e:any) => {

            ownedContainer.innerHTML += `
                 <img src="${buildings[e.target.id].image}" alt="" class="buildImg">
            `
            ownedBuildings = [...ownedBuildings, buildings[e.target.id]]

            const cost: BonusResources = buildings[e.target.id].cost
            const get: BonusResources = buildings[e.target.id].get
            const getPerSecond: BonusResources = buildings[e.target.id].getPerSecond

            disableClick(buildingCards)

            calculateCost(resources, cost)
            calculateProfit(resources, get)
            calculateBonus(bonusResources, getPerSecond)
            appendResources()
        }
    })
}

appendResources()
appendBuildings()
setInterval(function appendBonus() {
    resources[0].qty += bonusResources.gold
    resources[1].qty += bonusResources.wood
    resources[2].qty += bonusResources.stone
    resources[3].qty += bonusResources.food
    resources[4].qty += bonusResources.population
    appendResources()
    checkAvailability()
}, 1000)