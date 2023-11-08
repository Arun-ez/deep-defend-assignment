import '../styles/layout.css';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';


const Layout = ({ children }) => {
    return (
        <main>
            <Navbar />
            <div className='container'>
                <Sidebar />

                <div className='content' >
                    {children}
                </div>
            </div>
        </main>
    )
}

export { Layout }
