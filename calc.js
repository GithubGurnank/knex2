const calculator = (input) => {
    let result = 0

    if (input === '') {
        return 0
    } else {
        let inputArgs = input.split(/,|\n/g)
        inputArgs.forEach(element => {
            if (parseInt(element) < 0) {
                throw new Error('no negative numbers allowed')
            } else if( parseInt(element) <= 1000){
                result += parseInt(element)
            }
        })

        return result
    }




}

module.exports = calculator