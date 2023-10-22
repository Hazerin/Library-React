import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Rating({ rating }) {
  return (
    <div className="book__ratings">
      {
        /* itero su n elementi che sono riempiti di zeri altrimenti la map salterebbe le posizioni null / undefined. */
        new Array(Math.floor(rating)).fill(0).map((_, index) => (
          <FontAwesomeIcon icon="star" key={index} />
        ))
      }
      {/* Se la prima espressione è vera, viene renderizzato il secondo elemento. */}
      {rating % 1 > 0 && <FontAwesomeIcon icon="star-half-alt" />}
    </div>
  );
}

export default Rating;