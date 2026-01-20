import { Link, useLocation } from 'react-router-dom';
import sidebarItems from '../../utils/sidebarItems';
import { TSidebarItem } from '../../utils/generateSidebarItems';

const Sidebar = () => {
    const location = useLocation();

    const isActive = (path?: string) => {
        if (!path) return false;
        // Exact match or sub-path match
        return location.pathname === `/${path}` || location.pathname.startsWith(`/${path}/`);
    };

    const renderMenuItem = (item: TSidebarItem) => {
        const active = isActive(item.path);


        return (
            <li 
                key={item.key} 
                className="relative group h-full flex items-center"
            >

                    <Link 
                        to={`/${item.path}`}
                        className={`flex items-center gap-2 px-4 py-2 transition-all duration-300 rounded-lg text-sm font-semibold
                        ${active 
                            ? 'text-[#3BB77E] bg-[#3BB77E]/10 border border-[#3BB77E]' 
                            : 'text-[#7A7D85] hover:text-[#3BB77E] hover:bg-[#3BB77E]/10 border border-transparent'
                        }`}
                    >
                        {item.icon}
                        <span>{item.label}</span>
                    </Link>
      
            </li>
        );
    };

    return ( 
        <div className='container py-5 px-1.5'> 
            <nav className="w-full bg-white rounded-xl">
                <ul className="flex flex-wrap items-center gap-2 custom-sidebar-menu">
                    {sidebarItems.map((item) => renderMenuItem(item))}
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
