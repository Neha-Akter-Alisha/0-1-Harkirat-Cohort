//Write a program prints all the even numbers in an array.
const ages = [21, 22, 23, 24, 25, 26, 100];
const numberOfPeople = ages.length;

for(let i = 0; i<ages.length; i++)
{
    if (ages[i] % 2 == 0){
        console.log(ages[i]);
    }
}
//23 / 2 = 1(remainder) --> For all the even numbers.
//24 / 2 = 0(remainder) --> For all the even numbers.