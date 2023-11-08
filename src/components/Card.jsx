import '../styles/card.css';
import { LiaMapMarkedAltSolid } from 'react-icons/lia';

const Card = ({ data: { icon, type, system, date } }) => {
    return (
        <div className='card'>
            <div className='icon'>
                {icon}
            </div>

            <div className='details'>
                <h4> {type} </h4>
                <p> {system} </p>
                <p> {date} </p>
            </div>

            <div className='map'>
                <LiaMapMarkedAltSolid />
            </div>
        </div>
    )
}

export { Card }
