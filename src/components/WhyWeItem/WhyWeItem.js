import './WhyWeItem.scss';

function WhyWeItem({ text, icon }) {
    return (
        <div className="why-we-item">
            {icon}
            <div className="why-we-item--text">{text}</div>
        </div>
    );
}

export default WhyWeItem;
