import React, { useState } from 'react';
import { CartContext, useCartContext } from '../../Context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import { Link } from 'react-router-dom';


function ItemDetail({ id, item }) {
    const { addItem, remover, clearCart } = useCartContext(CartContext);
    const [Visibilidad, setVisibilidad] = useState("");


    console.log("mensaje", item)
    console.log("tamaño", item.length)

    const aparecer = () => {
        if (Visibilidad == "") {
            setVisibilidad("hidden");
        } else {
            setVisibilidad("");
        }
        console.log(Visibilidad);
    }

    const abrirventana = () => {
        addItem(id, item.title, item.imageId, item.price);
        aparecer();
    }

    console.log(item)

    return (

        <div class="flex">
            {Visibilidad ? (
                <div class="cartel">
                    <div class="cartel2">
                        ¿Seguro que quiere agregar este producto?
                        <div class="flex">
                            <input type="button" class="buton" onClick={() => abrirventana()} value="Sí" />
                            <input class="buton" onClick={() => aparecer()} type="button" value="No" />
                        </div>
                    </div>
                </div>
            ) : (
                <div></div>
            )}
            <img src={'https://http2.mlstatic.com/' + item.imageId} />
            <div class="textos">
                <h2>{item.title}</h2>
                <br />
                <p class="precio">$ {item.price}</p>
                <br />
                <p>{item.description}</p>
                <br /><br />
                <ItemCount stock={item.stock} initial={1} />
                <input onClick={() => aparecer()} type="button" value="Agregar" class="agregar" />
                <Link to="/cart/"><input type="button" value="Terminar compra" class="agregar" /></Link>

            </div>


        </div >
    )
}

export default ItemDetail