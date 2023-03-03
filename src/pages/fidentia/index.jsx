import styles from "./styles.module.scss";
import Link from "next/link";

export default function fidentia() {
  return (
    <section className={styles.wrapper}>
      <figure>
        <img src="/images/logo.svg" alt="" />
      </figure>
    </section>
  );
}
