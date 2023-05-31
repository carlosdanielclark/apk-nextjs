import style from "../styles/page.module.css";
import FormTitle from "./title";
import Form from "./form";
import Proof_Pokemon from "./proof";

export default function Home() {
  return (
    <div className={style.App}>
      <div className={style.Form}>

        <FormTitle />

        <div className={style.Main}>
          <Form />
        </div>

        <div>
          <h3>Nota:</h3>
          <p>La API solo da una unica base</p>
        </div>

        <div>
          <Proof_Pokemon />
        </div>
        
      </div>
    </div>
  )
}
