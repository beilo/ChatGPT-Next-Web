'use client'
import NextImage from "next/image";
import Background from "../icons/background.png";
import Ico from "../icons/ico.png";
import IcoWarning from "../icons/ico_warning.png";
import IcoSetting from "../icons/ico_setting.png";
import styles from "./bg.module.scss";
import { useCustomUserStore } from "../store/custom-user";

export function CustomBg() {
  const customUser = useCustomUserStore();
  return (
    <>
      <NextImage src={Background} alt="bg" className={styles.bg_img} />
      <>
        <NextImage src={Ico} alt="bg" className={styles.ico} />
        <span className={styles.text}>奇点AI</span>
      </>
      {customUser.isLogin ? (
        <>
          <NextImage
            src={IcoWarning}
            alt="warning"
            className={styles.ico_warning}
          />
          <NextImage
            src={IcoSetting}
            alt="setting"
            className={styles.ico_setting}
          />
          <span className={styles.logout} onClick={customUser.logout}>退出登录</span>
        </>
      ) : null}
    </>
  );
}
