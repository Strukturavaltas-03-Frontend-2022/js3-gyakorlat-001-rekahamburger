
/* Írj egy függvény kifejezést `removeDuplicatesFromArray` néven, 
ami a paraméterként megadott tömbből eltávolítja a duplikált elemeket! 
A tömb csak primítív értékeket tartalmaz! 
A függvény visszatérési értéke a duplikált elemektől mentes új tömb!

*/

const removeDuplicatesFromArray=(arr=[])=>{
    const spaceArr=[];
    for(let i=0; i<arr.length; i++){
        if (spaceArr.includes(arr[i])){
           continue; 
        }else{
            spaceArr.push(arr[i]);
        }
      
    } 
    return spaceArr;
}












export default removeDuplicatesFromArray;
