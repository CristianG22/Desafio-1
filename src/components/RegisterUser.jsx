import { addDoc, collection, getFirestore, serverTimestamp } from "firebase/firestore";
import React, { useContext, useState } from "react"
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";


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

    console.log(buyer);
    const endRegister = () => {

        addDoc(clientsFb, buyer).then(({ id }) => {
            setOrderId(id);
        })


    }

    console.log(nameUser, phoneUser, emailUser)
    return (
        <>

            <input type={'text'} value={nameUser} onChange={(e) => { setNameUser(e.currentTarget.value); }} />
            <input type={'text'} value={phoneUser} onChange={(e) => { setPhoneUser(e.currentTarget.value); }} />
            <input type={'email'} value={emailUser} onChange={(e) => { setEmailUser(e.currentTarget.value); }} />
            <Link to="/checkout"><button onClick={() => { endRegister(); }}>Finalizar registro</button></Link>

        </>
    );
}
