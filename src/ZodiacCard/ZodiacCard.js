import './ZodiacCard.css';
import aquarius from '../images/aquarius.png';

export default function ZodiacCard({ name, dates }) {
  {/* in this component,  use the `name` and `dates` props to render the name and dates of the sign, as well as load the correct image  from the public directory */}
  return (
    <div>
      <p>{ name }</p>
      <p>{ dates }</p>
      <img src={aquarius} />
    </div>
  );
}