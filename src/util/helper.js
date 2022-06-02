const printDate = function(){
    const annubansal = new Date()
    console.log(annubansal)
}
const printMonth = function(){
    const annubansal = new Date()
    console.log(annubansal.getMonth())
}
const getBatchInfo = function(){
    const annubansal = new Date()
    console.log('Radon W3D1 the topic for today is Nodejs module system')
}

module.exports.printDate = printDate
module.exports.printMonth = printMonth
module.exports.getBatchInfo = getBatchInfo
