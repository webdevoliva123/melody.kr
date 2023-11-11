export const ratingBgProvider = (rating) => {
    let rate = Math.round(Number(rating)) 
    if( rate > 0 && rate <=  4 ){
        return 'bg-gradient-to-r from-red-600 to-yellow-500'
    }
    
    if(rate > 4  && rate <= 7 ){
        return 'bg-gradient-to-r from-orange-500 to-yellow-400'
    }
    
    if(rate > 7 && rate <= 10) {
        return 'bg-gradient-to-r from-green-400 to-green-500'
    }
}