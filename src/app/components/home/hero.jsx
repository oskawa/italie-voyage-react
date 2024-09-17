import styles from "./Hero.module.scss"; // Import the CSS Module
import Link from 'next/link';

export function Hero() {
  return (
    <div id={styles.hero}>
      <div class="container h-100">
        <div class="row h-100 align-items-center text-center justify-content-center">
          <div class="col-12 col-lg-8">
            <h1 id={styles.title}>Un bel viaggio in tutta Italia</h1>
            <Link href="/interactivemap">Voir les destinations</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
