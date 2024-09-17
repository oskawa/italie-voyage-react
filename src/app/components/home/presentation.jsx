import styles from "./Presentation.module.scss"; // Import the CSS Module
import http from "../../axios/http";

// Fetching function (replace with your actual data fetching logic)
async function getDescription() {
    try {
      // Fetch data based on the slug
      const response = await http.get(`home`);
      return response.data[0];
      
    } catch (error) {
      console.error("Error fetching location:", error);
      return null;
    }
  }

export async function Presentation() {
    const presentation = await getDescription();
    
  return (
    <div id={styles.explication}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-5">
            <h2 id={styles.title}>Découvrir le voyage</h2>
            <p dangerouslySetInnerHTML={{ __html: presentation.content }}></p>
          </div>
          <div id={styles.imageContainer} className="offset-md-1 col-12 col-lg-5">
          <img id={styles.image} src={presentation.image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
