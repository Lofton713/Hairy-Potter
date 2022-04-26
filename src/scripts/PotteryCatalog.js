let potteryCatalog = []

export const toSellOrNotToSell = (potteryObj) => {
    if (potteryObj.cracked === false && potteryObj.weight >= 6){
        potteryObj.price = 40
        potteryCatalog.push(potteryObj)}
    
    
    else if (potteryObj.cracked === false && potteryObj.weight < 6){
        potteryObj.price = 20
        potteryCatalog.push(potteryObj)}

    
                
        
        return potteryObj
}
    


export const usePottery = () => {
    //return potteryCatalog.map(pot => ({...pot}))
let copy = [...potteryCatalog]
return copy

}