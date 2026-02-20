let dates = ["2024-12-13", "2024-11-23", "2024-05-03"];

let formatDates = dates.map(dateFormat);
console.log(formatDates);

function dateFormat(element){
    const part = element.split("-");
    return `${part[2]}.${part[1]}.${part[0]}`;
}