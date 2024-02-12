const inventors=[
   { first:'Albert', last:'Einstein' ,year : 1879, passed: 1955},
   { first:'Isaac', last:'Newton' ,year :1643 , passed: 1727},
   { first:'Galileo', last:'Galilei' ,year :1564 , passed: 1642},
   { first:'Marie', last:'Curie' ,year :1867 , passed: 1954},
   { first:'Johannes', last:'Kepler' ,year :1571 , passed:1650 },
   { first:'Nicolaus', last:'Copernicus' ,year : 1475, passed:1545 },
   { first:'Max', last:'Planck' ,year : 1858, passed: 1947},

];

const people=[
    'Beck, Glen','Becker, Carl','Beckett, Samuel'
];

//Array.ptrototype.join==> will merge into one string
//to get the people who where born in the 1500 
//we use filter
const fifteen=inventors.filter(function(inventor){
    if (inventor.year>=1500 && inventor.year<1600)
        return true;
})
//we can use console.table to show result in a table
console.table(fifteen);


//Array.Prototype.map ==> will give us an array of first an
//last names using ${jdsbck} will give us space between each value
const fullName=inventors.map(inventor =>`${inventor.first} ${inventor.last}`);
console.log(fullName);
const age=inventors.map(inventor => 
    inventor.passed-inventor.year
    
);
console.table(age);


/*Array.prototype.sort
we have 2 items in our hand and we compare-sort only 
these 2 items */
const ordered =inventors.sort((a,b)=>{
if(a.year>b.year)return 1 ;
else return -1 ;});
console.table(ordered);

//Array.prototype.reduce
//use to go on evry single line and adding values
const totalage=inventors.reduce(function(total,inventor){
    return total+(inventor.passed-inventor.year);
},0 );
console.log("total of ageis: "+totalage);

//sorted the invontor by years lives
const oldest=inventors.sort(function(a,b){
    const lastGuy=a.passed-a.year;
    const nextGuy=b.passed-b.year;
    if(lastGuy<nextGuy)
        return 1;
    else return -1;
})
console.table(oldest);

//Array.protocol.some 
//is at least one person less then 75
const isAdult=inventors.some(function(inventor){
    if(inventor.passed-inventor.year)
        return true;
})
console.log({isAdult});

//Array.protocol.every
//all the inventory membeer are over 75?
const all75=inventors.every(function(inventor){
    const g=inventor.passed-inventor.year;
    if (g>75)
    return 1;
})
console.log("all inventory memn=ber are over 75? "+all75);

//Array.prototype.find
//Find is like filter , but instead they 
//return just one you are looking for it
const findName=inventors.find(function(inventor){
    if (inventor.first === 'Johannes')
    return true;
})
console.info(findName);

//Array.prototype.findIndex
//to find the index of somethikng
//and then delete it
const  index=inventors.findIndex(function(inventor){
    return inventor.first==="Isaac";
})
console.info(index);
//to delete this index
//inventors.slice(index,1);
const newInv=[
    inventors.slice(0,index-1),
    inventors.slice(index+1),
];
console.table(inventors);
