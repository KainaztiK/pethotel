import React, { Component } from 'react';
import "./Categories.scss"

export class Categories1 extends Component{
    constructor(props){
        super(props)
        this.state={
            categories: [
                {
                    key: 'all',
                    name: 'Все',
                    value: true
                },
                {
                    key: 'cat',
                    name: 'Кошки',
                    value: true
                },
                {
                    key: 'dog',
                    name: 'Собаки',
                    value: true
                },
                {
                    key: 'rodent',
                    name: 'Грызуны',
                    value: true
                },{
                    key: 'other',
                    name: 'Другие',
                    value: true
                }
            ]
        }
    }
    
    render(onChangeCategory, value){
        return(
            <div className="categories">
                <ul>
                    {this.state.categories.map(el => ( 
                    <button key={el.key} onClick={() => onChangeCategory(el.name)} className={el.key === value.key ? 'active' : ''}>
                        {el.name}
                    </button>
                    ))}
                </ul>
            </div>
        )
    }
}
export default Categories1;
