import './Feature.scss'

function Feature({feature}) {
    return (
        <div className="Feature">
            <img src={feature.icon} alt="Icon" className="Feature__Icon"/>
            <h3 className="Feature__Title">{feature.title}</h3>
            <p>{feature.text}</p>
        </div>
    );
}
export default Feature