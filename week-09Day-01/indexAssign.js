
function Array(array){
    this.array=array;

    this.returnSumOfNumber = function returnSumOfNumber(value){
        var newArray=[]
        
        for(var i of this.array){
            if(i!==null){
            newArray.push(i+value)
            }
            else{
                newArray.push(i);
            }
        }
        return newArray;
    }
    

    this.mapMe = function mapMe(callback){
        newArray=[];

        for( var i = 0 ; i < this.array.length; i++){
            var x =callback(this.array[i],i) + ` I am Cool `;
            newArray.push(x);
        }return newArray
    }
}

var array1 = new Array([1,2,3,4]);
var array2 = new Array([]);
var array3 = new Array([2, 4, null, 'abc', true]);

console.log(array1.returnSumOfNumber(5))
console.log(array2.returnSumOfNumber(10))
console.log(array3.returnSumOfNumber(6))




var result1 = array1.mapMe(function(value,index) {
    return value * 20;
   }); 

 
var result2=array1.mapMe(function(value, index) {
    return `I am the element ${value} present in index ${index}`;}); 



var arr3 = new Array([{name: 'Sundeep', id: 1, field: 'Computer'},
{name: 'Aryan', field: 'Biology', id: 2},{ name: 'Anjali', id: 3, field: 'Commerce' } ]);
var result3 = arr3.mapMe(function(value,index){
    return `${value.id} : ${value.name}`;
})

console.log('Map Me result 1 =>')
console.log(result1)
console.log('Map Me result 2 =>')
console.log(result2)
console.log("Map me result 3 =>");
console.log(result3)
