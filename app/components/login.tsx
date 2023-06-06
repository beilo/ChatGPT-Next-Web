import { useState } from "react";
import styles from "./login.module.scss";

export function Login({ setUser }: { setUser: Function }) {
  const [name, setName] = useState("");
  const [pwd, setPwd] = useState("");
  return (
    <>
      <div className={styles.webTitle}>奇点AI工具箱</div>
      <div className={styles.webText}>
        简单轻松，一步体验AI，立刻登录到奇点工具箱
      </div>
      <div className={styles.wrap}>
        <div className={styles.titleCn}>登录打开奇点</div>
        <div className={styles.titleEn}>Login to access the singularity</div>
        <input
          type="text"
          placeholder="账户"
          className={styles.input}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="password"
          placeholder="密码"
          className={styles.input}
          onChange={(e) => setPwd(e.target.value)}
        />
        <button
          className={styles.btn}
          onClick={() => {
            setUser({
              name,
              pwd,
            });
          }}
        >
          登录
        </button>
      </div>
    </>
  );
}
