import './Card.css';

export default function Card() {
    return <div className="card-wrapper">
        <h1 className="title">
            Card Title
        </h1>

        <div className="info-box">
            <p><span className="info-title">Name:</span> John</p>
            <p><span className="info-title">Surname:</span> Doe</p>
        </div>
    </div>
}