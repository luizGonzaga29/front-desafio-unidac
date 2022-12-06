
import axios from "axios";
import { useState, useEffect } from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";

const url = 'https://back-desafio-unidac-production.up.railway.app/colaborador';

function Colaborador() {

    const [colaborador, setColaborador] = useState([]);



    useEffect(() => {

        axios.get(url)
            .then((response) => {
                setColaborador(response.data);


            })
            .catch((err) => {
                console.error("ops! ocorreu um erro : " + err);
            });

    }, []);

    return (
        <div>
            <Header controlador='0' />
            <div>
                <ul>
                    {colaborador.map(resp => (
                        <li key={resp.Id}>
                            Nome: {resp.nome}<br />
                            Cpf: {resp.cpf}<br />
                            Lanches:<br /> {resp.lanches.map(lan => (
                                <>{lan.nome}<br /></>
                            ))}
                            <br />
                        </li>

                    ))}

                </ul>

            </div>


            <Footer />
        </div>
    );
}
export default Colaborador;