// type script is very strict for type. We can't change the type of the variable later.
let a: number = 35;
let b: string = "hello"
let c: boolean = false;

// -------------------- function----------------------
function add(first: number, second: number): number {
    const result = first + second;
    return result;
}
const output: number = add(45, 87);

function doubleConsole(number: number): void {
    console.log(2 * number);

}
// ---------- arrow function ------------ 
const add2 = (num1: number, num2: number): number => num1 + num2;

// multi purpose
/* function add(first: number | string, second: number | string): number | string {
    const result: string | number = first + second;
    return result;
}
const output: number = add(45, 87);
const fullName = add('Adam', 'Sand');
 */

// ------------------ array ---------------
const salary: number = 7500;
const friendSalaries: number[] = [7500, 12300, 17200, 9400, 8300];
const friends: string[] = ['Sakib', 'Rakib', 'Nakib', 'Dakib'];

friendSalaries[0] = 10500;
friendSalaries.push(13100);
// friendSalaries[4] = '9800';
// friendSalaries.push('7300');

friends.push('Bakib');
friends[2] = 'Qakib';
// friends.push(45800);

let max = 0;
for (const salary of friendSalaries) {
    if (salary > max) {
        max = salary;
    }
}

// --------- object --------------
const city: string = 'Dhaka';
const fruits: string[] = ['mango', 'banana', 'apple'];

type Person = {
    name: string,
    age: number,
    salary: number
}

const student: Person = {
    name: 'Kamal Atartuk',
    age: 115,
    salary: 4500
}
const employee: { name: string, age: number, salary: number } = {
    name: 'Solaiman',
    age: 29,
    salary: 1000000
}

function getSalary(player: { name: string, salary: number }): number {
    return player.salary;
}

getSalary({ name: 'kuddus', salary: 50 });


function getSalary2(player: Person): number {
    return player.salary;
}