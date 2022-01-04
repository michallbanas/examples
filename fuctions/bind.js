'use strict'

// without bind method = loosing this

const players = {
    name: '',
    club: '',
    nationality: '',
    number: NaN,
    stats: [],

    averageGoals(games, goals){
        const average =  (games / goals).toPrecision(3)
        const output = `${this.name}(${this.club}) scores every ${average} game ⚽️`
        this.stats.push({goalsAverage: average})
        console.log(output)
    }
}


const check = players.averageGoals

const mount = {
    name: 'Mason Mount',
    club: 'Chelsea London',
    nationality: 'England',
    number: 19,
    stats: []
}

const foden = {
    name: 'Phill Foden',
    club: 'Manchester City',
    nationality: 'England',
    number: 47,
    stats: []
}

const jota = {
    name: 'Diogo Jota',
    club: 'Liverpool FC',
    nationality: 'Portugal',
    number: 20,
    stats: []
}

const smithRowe = {
    name: 'Emile Smith Rowe',
    club: 'Arsenal London',
    nationality: 'England',
    number: 10,
    stats: []
}

const bowen = {
    name: 'Jarrod Bowen',
    club: 'West Ham Untied',
    nationality: 'England',
    number: 20,
    stats: []
}

const kane = {
    name: 'Harry Kane',
    club: 'Tottenham',
    nationality: 'England',
    number: 10,
    stats: []
}

const fernandes = {
    name: 'Bruno Fernandes',
    club: 'Manchester United',
    nationality: 'Portugal',
    number: 18,
    stats: []
}

const maddison = {
    name: 'James Maddison',
    club: 'Leicester City',
    nationality: 'England',
    number: 10,
    stats: []
}

const checkMount = check.bind(mount)
const checkFoden = check.bind(foden)
const checkJota = check.bind(jota)
const checkSmithRowe = check.bind(smithRowe)
const checkBowen = check.bind(bowen)
const checkKane = check.bind(kane)
const checkFernandes = check.bind(fernandes)
const checkMaddison = check.bind(maddison)

checkMount(24, 7)
checkFoden(19, 6)
checkJota(23, 12)
checkSmithRowe(20, 9)
checkBowen(27, 5)
checkKane(24, 11)
checkFernandes(23, 5)
checkMaddison(26, 7)