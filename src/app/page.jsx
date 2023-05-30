'use client'
import style from "../styles/page.module.css";
import FormTitle from "./title";
import Form from "./form";

export default function Home() {
  return (
    <div className={style.App}>
      <form className={style.Form} onSubmit={()=>{}}>
        <FormTitle />
        <div className={style.Main}>
          <Form />
        </div>
        <div>
          <h3>Nota:</h3>
          <p>La API solo da una unica base</p>
        </div>
      </form>
    </div>
  )
}
