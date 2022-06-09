import style from "./style/Header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <div className={style.headerContainer}>
      <Link href={"/"}>
        <div className={style.linkHeader}>LIST</div>
      </Link>
      <Link href={"/form"}>
        <div className={style.linkHeader}>FORM</div>
      </Link>
      <Link href={"/"}>
        <div className={style.linkHeader}>on sais pas encore</div>
      </Link>
    </div>
  );
};

export default Header;
