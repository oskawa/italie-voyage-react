'use client'
import styles from "./Direct.module.scss"; // Import the CSS Module
import Link from "next/link";
import http from "../../axios/http";

// Fetching function (replace with your actual data fetching logic)
async function getLatest() {
  try {
    // Fetch data based on the slug
    const response = await http.get(`latest`);
    return response.data;
  } catch (error) {
    console.error("Error fetching location:", error);
    return null;
  }
}

export async function Latest() {
  const latest = await getLatest();

  return (
    <div id={styles.directaccess}>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-lg-10">
            <h2 id={styles.title}>
              Accès direct <br />
              aux destinations
            </h2>
            <div id={styles.destinations}>
              {latest.map((single) => (
                <Link
                  key={single.slug}
                  href={`/destinations/${single.slug}`}
                  id={styles.solo}
                  style={{
                    backgroundImage:`url(${single.featured_image})`
                  }}
                >
                      <h3 id={styles.title_destination}>{single.title}</h3>
                 
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
