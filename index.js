const input = [1,2,3,4,5];

// const newArray = [];

// for(let i=0;i<input.length;i++){
//     newArray.push(input[i]*4);
// }


// console.log(newArray);

// function transform(i){
//   return i*5;
// }

//   const transform = (i) => {
//     return i*2;
//   }

// const ans = input.map(transform);
// console.log(ans);


function filterLogic(n){
    if(n%2==0){
        return true;
    }else{
        return false;
    }
}

const ans = input.filter(filterLogic);
console.log(ans);
