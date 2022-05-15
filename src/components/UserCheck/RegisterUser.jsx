import { addDoc, collection, getFirestore, serverTimestamp } from "firebase/firestore";
import React, { useContext, useState } from "react"
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";
import ru from "./css/RegisterUser.module.css";

export default function RegisterUser() {

    const { cart, priceTotal, setOrderId } = useContext(GlobalContext);

    const db = getFirestore();

    const clientsFb = collection(db, 'clients');

    const [nameUser, setNameUser] = useState('');
    const [phoneUser, setPhoneUser] = useState('');
    const [emailUser, setEmailUser] = useState('');
    let actualDate = serverTimestamp();

    let buyer = {

        user: { nameUser, phoneUser, emailUser },
        items: cart,
        total: priceTotal,
        date: actualDate,

    };

    const endRegister = () => {

        addDoc(clientsFb, buyer).then(({ id }) => {
            setOrderId(id);
        })
    }

    const resetInputs = () => {
        setNameUser('');
        setEmailUser('');
        setPhoneUser('');
    }

    console.log(nameUser, phoneUser, emailUser)
    return (
        <>
            <div className={ru.flexboxRU}>
                <h1 className={ru.tittleRU}>Por último ingrese sus datos</h1>
                <div className={ru.boxInputs}>
                    <div className={ru.orderInputs}>
                        <label className={ru.labelRU} >Nombre y apellido:</label>
                        <input type={'text'} value={nameUser} onChange={(e) => { setNameUser(e.currentTarget.value); }} className={ru.inpClass} />
                    </div>

                    <div className={ru.orderInputs}>
                        <label className={ru.labelRU}>Nro. de teléfono:</label>
                        <input type={'text'} value={phoneUser} onChange={(e) => { setPhoneUser(e.currentTarget.value); }} className={ru.inpClass} />
                    </div>

                    <div className={ru.orderInputs}>
                        <label className={ru.labelRU}>Email:</label>
                        <input type={'email'} value={emailUser} onChange={(e) => { setEmailUser(e.currentTarget.value); }} className={ru.inpClass} />
                    </div>

                    <button className={ru.buttonReset} onClick={() => { resetInputs() }}>Resetear campos</button>
                </div>

                <Link to="/checkout"><button onClick={() => { endRegister(); }} className={ru.buttonEnd}>Finalizar registro</button></Link>

            </div>

        </>
    );
}
