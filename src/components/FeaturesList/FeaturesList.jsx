//CSS
import './FeaturesList.scss'

// COMPONENTS 
import Feature from '../Feature/Feature';

function FeaturesList({features}) {
  return (
    <>
    <h2 className="sr-only">Features</h2>
    <ul className="FeatureList">
    {features.map((feature, key) => (
        <li key={key} className="FeatureList__Item">
            <Feature feature={feature} />
        </li>
    ))}
    </ul>
    </>
  );
}
export default FeaturesList