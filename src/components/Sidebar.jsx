import '../styles/sidebar.css';
import { BiTachometer } from 'react-icons/bi';
import { AiFillFire } from 'react-icons/ai';
import { MdOutlineMailLock } from 'react-icons/md';
import { SiSimilarweb, SiFirewalla } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {

    const navigate = useNavigate();

    const pages = [
        { label: 'Dashboard', icon: <BiTachometer />, path: '/' },
        { label: 'Threats Intelligence', icon: <AiFillFire />, path: '/threats' },
        { label: 'Email Gateway', icon: <MdOutlineMailLock />, path: '/email-gateway' },
        { label: 'Web Gateway', icon: <SiSimilarweb />, path: '/web-gateway' },
        { label: 'Firewall', icon: <SiFirewalla />, path: '/firewall' }
    ]

    const isActive = (path) => {

        return window.location.pathname === path;
    }

    return (
        <div className='sidebar'>
            {pages.map(({ label, icon, path }, idx) => {
                return (
                    <div key={idx} className={`side_item ${isActive(path) && 'active'}`} onClick={() => navigate(path)} >
                        <p> {icon} </p>
                        <h3> {label} </h3>
                    </div>
                )
            })}
        </div>
    )
}

export { Sidebar }
