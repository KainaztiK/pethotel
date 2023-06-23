import "./Categories.scss"
const categories = [
    {name: 'Все',  value: null}, 
    {name: 'Кошки',  value: true}, 
    {name: 'Собаки', value: true}, 
    {name: 'Грызуны', value: true},
    {name: 'Другие', value: true}
];

export function Categories({value, onChangeCategory}){
    const onClickCategoriesItem = (categories) => {
        onChangeCategory(categories);
    }    
    return(
        <>
            <div className="categories">
                <ul>
                    {categories.map((categories, i) => ( 
                    <li key={i} onClick={() => onClickCategoriesItem(categories)} className={value.name === categories.name ? 'active' : ''}>
                        {categories.name}
                    </li>
                    ))}
                </ul>
            </div>
        </>
    );
}