function generateHtmlList(names) {
        const listItems = names.map(name => `<li>${name}</li>`).join('');
        console.log(listItems);
        return `<ul>${listItems}</ul>`;
}

function createNameList(names) {
        const upperCaseNames = names.map(name => name.toUpperCase());
        console.log(upperCaseNames);
        return upperCaseNames;
}


const maleNames = ["John", "Peter", "trold", "Mao", "Hensrik", "Lars", "Mikkel"]


console.log(maleNames);

createNameList(maleNames);

const namesWithO = maleNames.filter(name => name.includes("o"));
console.log(namesWithO);


generateHtmlList(maleNames);
