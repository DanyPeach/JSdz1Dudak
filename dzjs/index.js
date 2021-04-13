//Ex1 =>

const sayHello = (name) => {
    if (typeof name !== 'string') return;

    if(name.toLowerCase() === 'mark'){
        return `Hi, ${name}`
    }

    return `Hello, ${name}`

};

console.log(sayHello('mark'))

//Ex2

function gipCount (line1, line2) {
    if (typeof line1 === 'number' && typeof line2 === 'number') 
    console.log(Math.sqrt(Math.pow(line1, 2) + Math.pow(line2, 2)));

    return ;

};

gipCount(3,4);

//Ex2 => 

const gipCount2 = (line1, line2) => {
    if (typeof line1 === 'number' && typeof line2 === 'number') 
    console.log(Math.sqrt(Math.pow(line1, 2) + Math.pow(line2, 2)));

    return ;


}
gipCount2(4,6);

//Ex3

function compareNum  (a, b)  {
    if (typeof a !== 'number' && typeof b !== 'number') return;

    if(a < b){
        return b;
    }
 
    return a;

};

console.log(compareNum(3, -4));

//Ex3 =>

const compareNum2 = (a, b) => {
    if (typeof a !== 'number' && typeof b !== 'number') return;

    if(a < b){
        return b;
    }
 
    return a;

}
console.log(compareNum2(6, 5));

//Ex4 

function isEven  (a)  {
    if (typeof a !== 'number') return;

    if(a % 2 == 0){
        return 'Число является четным';
    }
 
    return 'Число является нечетным';

};

console.log(isEven(3));

//Ex4 =>

const isEven2 = (a) => {
    if (typeof a !== 'number') return;

    if(a % 2 == 0){
        return 'Число является четным';
    }
 
    return 'Число является нечетным';
}
console.log(isEven2(3));

//Ex6

const upFirstLetter = (word) => {
    if (Array.isArray(upFirstLetter)){
    const result = [];

    for(let i=0; i<word.length; i++){
        const bigLetters = word[0].toUpperCase() + word.substring(1);
        result.push(bigLetters) 
    }
    

    return result;
    }
};

console.log('daniil');