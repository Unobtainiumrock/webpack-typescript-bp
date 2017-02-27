
interface Person {
    name: string;
    age: number;
}

function sortByName(a: Person[]) {
    let result = a.slice(0);
    result.sort((x,y) => {
        return x.name.localeCompare(y.name);
    });
    return result;
}

export default sortByName;




