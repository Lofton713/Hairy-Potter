let potteryCatalog = []

export const toSellOrNotToSell = (potteryObj) => {
    if (potteryObj.weight >= 6){
        potteryObj.price = 40
    }
    else {
        potteryObj.price = 20
    }
    if (potteryObj.cracked === false){ 
       potteryObj.forSale = "available"
       potteryCatalog.push(potteryObj)
    }

}
//toSellOrNotToSell()
//console.log(potteryCatalog)

export const usePottery = () => {
    return potteryCatalog

}