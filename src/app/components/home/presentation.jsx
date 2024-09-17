import styles from "./Presentation.module.scss"; // Import the CSS Module

export function Presentation() {
  return (
    <div id={styles.explication}>
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-5">
            <h2 id={styles.title}>Découvrir le voyage</h2>

            <p v-html="data.texteDePresentation"></p>
          </div>
          <div class="offset-md-1 col-12 col-lg-6 test">
            <img src="/img/discover.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
