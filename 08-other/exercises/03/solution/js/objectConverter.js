const objectConverter {
    
    arrayToMap(array){
      const newMap=  new Map(); 
      array.forEach(item=>{newMap.set(object.key,object.value)})
      return newMap;
    };
    arrayToSet(array){
        const newSet=  new Set(array); 
      
      return newSet;
        
    };
    setToMap(set){
         const newToMap=  new Map(); 
      set.forEach(item=>{newToMap.set(object.key,object.value)})
      return newToMap;
        
        
    };
    setToArray(set){
        const arr=[...set];
        return arr;
        
    };
    mapToArray(map){
        const arr=Array.from(map.values());
        return arr;
        
    };
    mapToSet(map){
         const newSet=  new Set(map); 
      
      return newSet;
        
    };
    
    
    
    
    
    
    
    
    
}







export default objectConverter;
