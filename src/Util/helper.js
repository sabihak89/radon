const PrintDate = function(){

    console.log(Date())
    }
    
    const PrintMonth = function(){
        const today = new Date()
        const m = today.getMonth()+1
        console.log("print the current month " +m )
    
    }
    
    const getBatchInfo = function () {
        console.log('Roadon', 'W3D1', 'the topic for today is Nodejs module system')
    
    }
    
     module.exports.PrintDate=PrintDate
     module.exports.PrintMonth=PrintMonth
     module.exports.getBatchInfo=getBatchInfo
    