import React, { useState } from 'react';
export default function Toolbar({filters, selected, onSelectFilter}) {
    console.log(`Toolbar selected: ${selected}`)
    return (
        //отображаем кнопки
        <div className="buttons">
            {filters.map((filter) => (
        <button 
        key={filter} 
        className={selected == filter ? 'active':''}
        onClick={() => onSelectFilter(filter)}
        >{filter}</button>
            ))
            }
        </div>
    );
}