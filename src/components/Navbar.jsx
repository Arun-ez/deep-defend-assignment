import '../styles/navbar.css';
import { MdCloudDownload, MdKeyboardArrowDown } from 'react-icons/md';
import { GiRegeneration } from 'react-icons/gi';
import { FaDownload } from 'react-icons/fa';

const Navbar = () => {

  return (
    <nav className='navbar'>

      <div>
        <h2> <span> <GiRegeneration color='var(--accent_color)' /> </span> Cymulate </h2>

        <p> Cymulate Demo </p>
      </div>

      <div>
        <MdCloudDownload fontSize={24} className='download_icon' />
        <h3 className='agents'> Agents <span> <FaDownload fontSize={16} /> </span> </h3>

        <h4> Hello User <span> <MdKeyboardArrowDown /> </span> </h4>
      </div>

    </nav>
  )
}

export { Navbar }
