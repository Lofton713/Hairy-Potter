let propertyKey = 1

let potteryobj = {}

export const makePottery = (shape, weight, height) => {
    const potteryObj = {}
    potteryObj.shape = shape
    potteryObj.weight = weight
    potteryObj.height = height
    potteryObj.id = propertyKey++
    
    return potteryObj
}