function MaxProfit(stockPrice){
 let maxProfit=0;
 let minPrice=stockPrice[0];//initially store index 0 value in minPrice
 for(let sell=1;sell<stockPrice.length;sell++){
     let sellPrice=stockPrice[sell];
     let profit=sellPrice-minPrice;
     maxProfit=Math.max(maxProfit,profit)
     if(sellPrice<minPrice){
         minPrice=sellPrice;
     }
 }
 return maxProfit;
}

console.log(MaxProfit([10,29,100,10,20,2,10]))
