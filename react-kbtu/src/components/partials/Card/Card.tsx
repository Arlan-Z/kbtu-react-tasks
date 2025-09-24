import type { CardProps } from '../../../types/card';
import './Card.css';

export default function Card({ props }: { props: CardProps }) {
    return <div className="card-wrapper">
        <h1 className="title">
            {props.title}
        </h1>

        <div className="info-box">
            {props.fields.map((fld, index) => (
                <div className="info" key={index}>
                    <p className="info-title">{fld.title}</p>
                    <p className="info-value">{fld.value}</p>
                </div>
            ))}
        </div>
    </div>
}