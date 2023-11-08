import '../styles/home.css';
import { SecurityScore } from '../components/SecurityScore';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Showcase } from '../components/Showcase';
import { animated, useSpring } from '@react-spring/web';

const Home = () => {

    const high_risks = [
        '(22)- On - Prem Risk | Workstation > DC',
        '(24)- AWS - Public EC2 to Sensitive Data S3',
        '(24) - Azure External Users > Azure Customers'
    ]

    const springs = useSpring({
        from: { y: 100 },
        to: { y: 0 },
    })

    return (
        <animated.div style={springs}>
            <SecurityScore />

            <div className='choose'>
                <p> All Scenarios <span> <MdKeyboardArrowDown /> </span>  </p>
                <p> Past 30 days <span> <MdKeyboardArrowDown /> </span>  </p>
            </div>

            <div className='scenario_grid'>
                <Showcase heading={'Scenarios at high risk'}>
                    <div>
                        {high_risks.map((risk, idx) => (
                            <div className='high_risk' key={idx}>
                                <div>
                                    <h3> F </h3>
                                </div>

                                <p> {risk} </p>

                                <div>
                                    Take Action
                                </div>
                            </div>
                        ))}

                    </div>
                </Showcase>

                <Showcase heading={'Critical assets at risk'} />
                <Showcase heading={'Top choke points'} />
                <Showcase heading={'Top impacting attack techniques'} />
            </div>


        </animated.div>
    )
}

export default Home;
