import { notFound } from "next/navigation"; // For handling 404 errors
import http from "../../axios/http";
import styles from "./DestinationPage.module.scss"; // Import the CSS Module
import Gallery from "./../../components/destination/gallery";
import { Container, Row, Col } from "react-bootstrap";

export async function generateStaticParams() {
  const response = await http.get("list-travel");
  const locations = response.data;

  return locations.map(location => ({
    slug: location.slug, // Ensure this matches your params
  }));
}


// Fetching function (replace with your actual data fetching logic)
async function getLocationBySlug(slug) {
  try {
    // Fetch data based on the slug
    const response = await http.get(`list-travel/${slug}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching location:", error);
    return null;
  }
}

// Dynamic page component (Server-Side)
export default async function DestinationPage({ params }) {
  const { slug } = params;

  // Fetch location data based on the slug
  const location = await getLocationBySlug(slug);

  // Handle 404 if the location is not found
  if (!location) {
    notFound(); // This will show the 404 page
  }
  return (
    <>
      <div id={styles.destination}>
        <div
          id={styles.hero}
          style={{
            backgroundImage: `url(${location.featured_image})`,
            backgroundSize: "cover", // Adjust to cover the whole div
            backgroundPosition: "center", // Center the image
          }}
        >
          <div className="container h-100">
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-12 col-lg-4">
                <h1 id={styles.title} className="text-center">
                  {location.title}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div id={styles.texte}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-10">
                <p
                  id={styles.paragraph}
                  className="text-paragraph"
                  dangerouslySetInnerHTML={{ __html: location.description }}
                ></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id={styles.galery}>
        <Gallery items={location.galery} />
      </div>
    </>
  );
}
