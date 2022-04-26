import { usePottery } from "./PotteryCatalog.js"


export const PotteryList = () => {
    
    const pots = usePottery()
    let htmlString = ""

    for (const potteryObj of pots) {
        htmlString +=
    `<section class="pottery" id="pottery--${potteryObj.id}">
        <h2 class="pottery__shape">${potteryObj.shape}</h2>
        <div class="pottery__properties">
        Item weighs ${potteryObj.weight} grams and is ${potteryObj.height} cm in height
        </div>
        <div class="pottery__price">
            Price is $${potteryObj.price}
        </div>
    </section>`
    }
    

    return htmlString
}
