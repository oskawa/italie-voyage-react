import styles from "./Hero.module.scss"; // Import the CSS Module
import Link from "next/link";
import http from "../../axios/http";

// Fetching function (replace with your actual data fetching logic)
async function getHero() {
  try {
    // Fetch data based on the slug
    const response = await http.get(`home`);
    return response.data[0].featured_image;
  } catch (error) {
    console.error("Error fetching location:", error);
    return null;
  }
}

export async function Hero() {
  const hero = await getHero();

  return (
    <div
      id={styles.hero}
      style={{
        backgroundImage: `url(${hero})`,
      }}
    >
      <div className="container h-100">
        <div className="row h-100 align-items-center text-center justify-content-center">
          <div className="col-12 col-lg-8">
            <h1 id={styles.title}>Un bel viaggio in tutta Italia</h1>
            <Link id={styles.btnStroke} href="/interactivemap">
              Voir les destinations
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
