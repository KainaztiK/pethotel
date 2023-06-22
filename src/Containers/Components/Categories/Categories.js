import "./Categories.scss"
const categories = ['Кошки', 'Собаки', 'Грызуны', 'Другие'];

export function Categories({value, onChangeCategory}){
    
    return(
        <>
            <div className="categories">
                <ul>
                    {categories.map((categoryName, i) => ( 
                    <li key={i} onClick={() => onChangeCategory(i)} className={value === i ? 'active' : ''}>
                        {categoryName}
                    </li>
                    ))}
                </ul>
            </div>
        </>
    );
}