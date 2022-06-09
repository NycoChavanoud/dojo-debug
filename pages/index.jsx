import Layout from "../components/Layout";
import style from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout pageTitle={"ACCUEIL "}>
      <div className={style.homeContainer}>ACCUEIL</div>
    </Layout>
  );
}
