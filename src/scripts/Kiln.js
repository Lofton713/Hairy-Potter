




export const firePottery = (potteryObj, temp) => {
    potteryObj.fired = true
    if ( temp > 2200){
        potteryObj.cracked = true
    }
    if ( temp <= 2200){
        potteryObj.cracked = false
    }
    return potteryObj
}

