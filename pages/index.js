import { useEffect, useState } from "react"
import styles from '../styles/home.module.css'
import apps from './_apps';

function Home(){
    /*const [money, setMoney] = useState(0)

  const Aumentar = () => {
        setMoney(money + 1);
    }
   const Diminuir = () => {
            setMoney(money - 1);
    }

    return(
        <div>
            <h1>Aumentar e Diminuir</h1>
            <p>Dinheiro: ${money}</p>
            <button
            onClick={Aumentar}
            >Aumentar</button>
            <button
            onClick={Diminuir}
            >Diminuir</button>
        </div>
    )*/
        
            const [value, updateValue] = useState(0);
            const [multi, updateMulti] = useState(0);
            const [value2, updateValue2] = useState(0);

            useEffect( ()=>{
                updateMulti(value * value2);
            })
            useEffect(()=>{
                updateMulti(value2 * value);

            })
            const clear = () =>{
                updateValue("");
                updateValue2("");
            }


    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <h3>Multiplicador</h3>
            </div>
            <p className={styles.total}>Resposta: {multi}</p>
            <input
            className={styles.input}
            type="number"
            value={value}
            onChange={(e)=>{updateValue(e.target.value)}}
            />
            <br/>
            <span className={styles.span}>X</span>
            <input
            className={styles.input}
            type="number"
            value={value2}
            onChange={(e)=>{updateValue2(e.target.value)}}
            />
            <br/>
            <button
            className={styles.button}
            onClick={clear}
            >Limpar</button>
        </div>
            )
}

export default Home