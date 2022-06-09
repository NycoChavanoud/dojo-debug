import style from "../../styles/Form.module.css";
import Layout from "../../components/Layout";
import AddWilders from "../../components/AddWilders";

const Form = () => {
  return (
    <Layout>
      <div className={style.formContainer}>
        <AddWilders />
      </div>
    </Layout>
  );
};

export default Form;
