"use strict";

// 1-m

// let n=+prompt('n = ')
// const arr=[];

// for(let i=1; i<=n; i++){
//   arr.push(i);
// }

// console.log(arr)

// 2-m

// let n=+prompt('n ='),
//   sum=1;

// const arr=[];

// for(let i=1; i<=n; i++){
//   sum=2**i;
//   arr.push(sum);
// }

// console.log(arr);

// 3-m

// let n=+prompt('n = ');
// let sum=0;
// const arr=[];

// for(let i=1; i<=n; i++){
//   arr.push(i);
//   sum+=i;
// }

// console.log(arr);
// console.log(sum);

// 4-m

// let n = +prompt("n ="),
// sum1 = 0,
// sum2 = 0;
// let arr=[];
//   arr[0] =0;

// for (let i = 0; i <= 10; i++) {
//   arr[i]=i*10;
// }

// for(let i=0; i<=10; i++){
//   if (i % 2 === 0) {
//     sum1 -= arr[i];
//   }

//   if (i % 2 === 1) {
//     sum2 += arr[i];
//   }
// }
// console.log(arr);
// console.log(`juftlar sonlar ayirmasi=> ${sum1}`);
// console.log(`toqlar sonlar yig'indisi => ${sum2}`);

// 5-m 

// let n=+prompt('n =');
// let sum=0;
// let arr=[];

// for(let i=0; i<n; i++){
//   arr[i]=Number(prompt('qiymat'));
// }

// for(let i=0; i<n; i++){
//   sum+=arr[i];
// }

// console.log(arr);
// console.log(sum);

// 6-m

// {
//   let n=+prompt("Massiv elementlarisonini kiriting:");
//   let array=[],Array=[];
//   for(let i=0; i<n; i++){
//     array[i]=Math.random()*10+1;
//     array[i]=Math.round(array[i]);
//   }
//   console.log(`Massiv elementlari: ${array}`);
//   for(let i=0; i<n; i++){
//   Array[i]=array[n-i-1];
//   array.pop();
//   }
//   console.log(`Indekslari kamayish tartibidagi massiv elementlari: ${Array}`);
// }


//       7-m



// 8-m


//   let n=+prompt("Massiv elementlari sonini kiriting: ");
//   let k=+prompt("k-indeksni kiriting:");
//   let l=+prompt("n-indeksni kiriting(n>k):");
//   let array=[],s=0;
//   for(let i=0; i<n; i++){
//    array[i]=Math.random()*10+1;
//    array[i]=Math.round(array[i]);
//    if(i>=k && i<=l){
//     s+=array[i];
//    } 
//    }
//    console.log(`Massiv elementlari: ${array}`);
//    console.log(`${k} chi va ${l} chi indekslari oasidagi elementlar yig'indisi: ${s}`);



//  9-m

// {
//   let n=+prompt(`Massiv elementlari sonini kiriting:`);
//   let array=[],max;
//   for(let i=0; i<n; i++){
// array[i]=Math.random()*100+1;
// array[i]=Math.round(array[i]);
//   }
//   console.log(`Massiv elementlari: ${array}`);
//   for(let i=2; i<n; i+=2){
//     max=Math.max(array[i-2],array[i]);
//   }
//   console.log(`Massivning juft indekslardagi eng katta elementi: ${max}`);
// }


//  10-m

// {
//   let n=+prompt(`Massiv elementlari sonini kiriting:`);
//   let array=[],min;
//   for(let i=0; i<n; i++){
// array[i]=Math.random()*100+1;
// array[i]=Math.round(array[i]);
//   }
//   console.log(`Massiv elementlari: ${array}`);
//   for(let i=2; i<n; i+=2){
//     min=Math.min(array[i-2],array[i]);
//   }
//   console.log(`Massivning juft indekslardagi eng kichigi elementi: ${min}`);
// }
