import '../styles/security-score.css';
import { BiTrendingDown } from 'react-icons/bi';
import { BsDot } from 'react-icons/bs';

const SecurityScore = () => {
    return (
        <div className='security_score'>
            <div className='score_box'>
                <h4> Security Score </h4>
                <div className='score'>
                    <h1> C </h1>
                </div>

                <h2> 70 </h2>

                <p> -1 <span> <BiTrendingDown /> </span> from last month </p>
            </div>

            <div className='scenarios'>
                <h2> Compare scenarios </h2>

                <div>
                    <div>
                        <BsDot fontSize={30} color='#f97520' />
                        <p> Azure to AWS_2  </p>
                    </div>

                    <div>
                        <BsDot fontSize={30} color='#885fa6' />
                        <p> Hybrid Risk To Customer Data </p>
                    </div>

                    <div>
                        <BsDot fontSize={30} color='#8da357' />
                        <p> Log4Shell (CVE-2021-44228) </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { SecurityScore }
