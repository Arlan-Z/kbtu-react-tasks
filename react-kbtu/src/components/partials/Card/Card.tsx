import './Card.css';

export default function Card() {
    return <div className="card-wrapper">
        <h1 className="title">
            Card Title
        </h1>

        <div className="info-box">
            <div className="info">
                <p className='info-title'>Name</p>
                <p className='info-value'>John</p>
            </div>

            <div className="info">
                <p className='info-title'>Surname</p>
                <p className='info-value'>Doe</p>
            </div>
        </div>
    </div>
}