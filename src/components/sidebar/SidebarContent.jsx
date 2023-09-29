import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function SidebarContent({ itemsRef }) {
    const navigate = useNavigate();
    const [items, setItems] = useState(itemsRef);

    const handleClick = (id) => {

        const tempItems = [...items];

        const itemIndex =
            items.findIndex(i => i.id === id);

        const activeItemIndex =
            items.findIndex(i => i.isActive === true);

        tempItems[itemIndex] = { ...tempItems[itemIndex], isActive: true };
        tempItems[activeItemIndex] = { ...tempItems[activeItemIndex], isActive: false };

        setItems(tempItems);

        navigate(items[itemIndex].link)
    }

    return (
        <div className="sidebar me-3">
            <nav>
                <ul>
                    {
                        items.map(item => (
                            <li key={`${item.id}`} className={item.isActive ? "item-active" : ""}
                                onClick={() => handleClick(item.id)}>
                                <a>
                                    {/*  <img src={item.isActive ? item.activeIcon : item.deactiveIcon}
                                        alt={`${item.label}آیکون `} /> */}
                                    <span>{item.label}</span>
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </div>
    )
}
