'use string';

const niceString = 'Toto+je+veľmi+dlhá+response+ktorú+sme+dostali+zo+zastaralej+API+a+vyzera+to+hrozne';
console.log(niceString.split('+'));

const myName = 'Michal Banas';
const [firstName, lastName] = myName.split(' ');

const fullName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(fullName);

//

const capitalizeName = (inputName) => {
    const names = inputName.split(' ');
    const namesUpper = [];

    for (const n of names){
        namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
        // names.Upper.push(n[0].toUpperCase() + n.slice(1));
    }
    console.log(namesUpper.join(' '))
}

capitalizeName('frank lampard');
capitalizeName('anna maria davis');