import React from "react";
import Link from "next/link";
import styles from "./Popup.module.scss";

export function InfoBox({ location, onClose }) {
  return (
    <div id={styles.popup}>
      <img id={styles.img} src={location.featured_image} alt="" />
      <div id={styles.inner}>
        <h3 id={styles.title}>{location.ville}</h3>
        <Link id={styles.link} href={`/destinations/${location.slug}`}>
          Voir la destination
        </Link>
      </div>
    </div>
  );
}
