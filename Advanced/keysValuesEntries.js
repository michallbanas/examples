const testEngineer = {
    name: 'Elon',
    age: 30,
    city: 'Los Angeles',

    skills: {
        language: {
            Javascript: 'advanced',
            TypeScript: 'beginner'
            },
        frameworks: {
            React: 'advanced',
            Angular: 'beginner'
        }
    }
}

console.log(Object.keys(testEngineer)); // returns array of keys // ['name', 'age', 'city', 'skills']
console.log(Object.values(testEngineer)); // returns array of values // ['Elon', 30, 'Los Angeles', [ 'JavaScript', 'Python', 'C++' ], [ 'React', 'Vue', 'Angular' ]]
console.log(Object.entries(testEngineer)); // returns array of arrays // [ [ 'name', 'Elon' ], [ 'age', 30 ], [ 'city', 'Los Angeles' ], [ 'skills', [ 'JavaScript', 'Python', 'C++' ] ], [ 'skills', [ 'React', 'Vue', 'Angular' ] ] ]

for (const skill of Object.keys(testEngineer.skills)) {
    console.log(skill); // languages, frameworks
}