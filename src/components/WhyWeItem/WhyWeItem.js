import './WhyWeItem.scss';

function WhyWeItem({ text }) {
    return (
        <div className="why-we-item">
            <div className="why-we-item--icon-container" />
            <div className="why-we-item--text">{text}</div>
        </div>
    );
}

export default WhyWeItem;
