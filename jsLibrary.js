var _ = {
    map: function(arr,callback) {
        let newArr = [];
        for(var i = 0; i < arr.length; i++) {
            newArr.push(callback(arr[i])); // invoking the callback many times... delegation!
          }
          return newArr;
    },

    reduce: function(arr,callback,memo) { 
      let result=0;
      if(memo != undefined){
        for(var i = 0; i < arr.length; i++) {
            result+=callback(arr[i],memo)
          }
      }
      else{
        
        for(var i = 0; i < arr.length; i++) {
            result+=callback(arr[i])
          }
      }
        
          return result;
    },
    
    find: function(list, predicate) { 
        for(var i = 0; i < list.length; i++) {
            if(predicate(list[i])){
                return list[i]
            }
          }
      
    },
    filter: function(list,predicate) { 
        let newArr = [];
        for(var i = 0; i < list.length; i++) {
            if(predicate(list[i])){
                newArr.push(list[i])
            }
          }
          return newArr;
    },
    reject: function(list,predicate) { 
        let newArr = [];
        for(var i = 0; i < list.length; i++) {
            if(!predicate(list[i])){
                newArr.push(list[i])
            }
          }
          return newArr;
    }
  }

console.log(_.map([1, 2, 3], function(num){ return num * 3; }));
console.log(_.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0));
console.log(_.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }));
console.log(_.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }));
console.log(_.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }));
