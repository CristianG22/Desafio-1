import { serverTimestamp, addDoc, collection, getFirestore } from "firebase/firestore";
import React, { useContext } from "react"
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";
import { useForm } from "react-hook-form";
import ru from "./css/RegisterUser.module.css";

export default function RegisterUser() {

    const { cart, priceTotal, setBuyerData, buyerData, setOrderId } = useContext(GlobalContext);

    const { register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        defaultValues: {
            Client: "",
            Phone: "",
            Email: ""
        }
    });


    let actualDate = serverTimestamp();

    function endRegister(data) {

        let buyer = ({
            user: data,
            items: cart,
            total: priceTotal,
            date: actualDate,
        });

        const db = getFirestore();

        const clientsFb = collection(db, 'clients');

        addDoc(clientsFb, buyer).then(({ id }) => {
            setOrderId(id);
        })

        setBuyerData(1);

    }

    return (
        <>
            <div className={ru.flexboxRU}>
                <h1 className={ru.tittleRU}>Por último ingrese sus datos</h1>

                <form onSubmit={handleSubmit(endRegister)} className={ru.boxInputs}>
                    <div className={ru.orderInputs}>
                        <label className={ru.labelRU} >Nombre y apellido:</label>
                        <input type={'text'} {...register("Client", { required: true, minLength: { value: 10 } })} placeholder="Nombre y Apellido" className={ru.inpClass} />
                    </div>

                    <p className={ru.errorClass}>{errors.Client && "Información necesaria"}</p>

                    <div className={ru.orderInputs}>
                        <label className={ru.labelRU}>Nro. de teléfono:</label>
                        <input type={'text'} {...register("Phone", { required: true, minLength: { value: 8 } })} placeholder="11 2345-6789" className={ru.inpClass} />
                    </div>


                    <p className={ru.errorClass}>{errors.Phone && "Información necesaria"}</p>

                    <div className={ru.orderInputs}>
                        <label className={ru.labelRU}>Email:</label>
                        <input type={'email'} {...register("Email", { required: true, minLength: { value: 10 } })} placeholder="nombre@email.com" className={ru.inpClass} />
                    </div>

                    <p className={ru.errorClass}>{errors.Email && "Información necesaria"}</p>

                    <input type="reset" value="Resetear campos" className={ru.buttonReset} />

                    {buyerData === 0 ? <input type="submit" className={ru.buttonEnd} />
                        : <Link className={ru.buttonEnd} to="/checkout"> Ir al checkout </Link>}
                </form>

            </div>

        </>
    );
}
