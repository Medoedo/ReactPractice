import "./app-info.css"

const AppInfo = ({number, onIncrease}) => {
    const names = onIncrease.map((elem) => elem.name);
    let str = '';
    for(let i = 0; i < names.length; i++) {
        if (i+1 === names.length) {
            str += `${names[i]}`;
        } else {
            str += `${names[i]}, `; 
        }
    }
    return (
        <div className="app-info">
            <h1>Список працівників в комапанії StarBorn</h1>
            <h2>Загальна кількість працівників: {number}</h2>
            <h2>Премію отримають: {str}</h2>
        </div>
    )
}

export default AppInfo;