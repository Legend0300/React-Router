import React  , {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import "./App.css";
export default function ItemDetail({match}) {

    useEffect(() => {
        fetchItem();
    }, []);

    
    
    const [item, setItem] = useState({});
    const { id } = useParams();
    const fetchItem = async () => {
        const fetchItem = await fetch(`http://localhost:5000/api/test/${id}`);
        const item = await fetchItem.json();
        setItem(item);
        console.log(item);
    }
    return (
        <div>
        <h1>Item {item[0]?.name}</h1>
        <h2>Id: {item[0]?.id}</h2>
        <img className="image" src={`${item[0]?.img}`} alt="" />
        </div>
    );
    }