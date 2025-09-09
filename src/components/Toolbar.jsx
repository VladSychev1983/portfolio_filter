export default function Toolbar({filters, selected, onSelectFilter}) {
    return (
        //отображаем кнопки
        <div className="buttons">
        <button className="active">All</button>
        <button>Websites</button>
        <button>Flayers</button>
        <button>Business Cards</button>  
        </div>
    );
}