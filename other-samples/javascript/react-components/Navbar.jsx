'use client'
import { navbarDataBlue } from '../assets'

const Navbar = ({ id }) => {
    return(
        <><div className="w-[70px] h-full fixed left-0 top-0 flex flex-col justify-between bg-black/70 border-r border-gray-200 px-2 py-10 xl:py-6 z-10">
             <div className="flex flex-col gap-y-3 xl:gap-y-1 sm:gap-y-2 xs:gap-y-0">
                {navbarDataBlue.map((item, i) => (
                    <a href={`/#${item.id}`} key={i} className="group flex flex-col items-center text-center gap-y-2">
                        <span
                        className={`text-2xl group-hover:scale-125 xl:group-hover:scale-115 xs:group-hover:scale-100 transition-all ${
                            item.id === id
                            ? 'scale-110 xl:scale-100 xs:scale-80'
                            : 'text-yellow-600 scale-100 xl:scale-90 xs:scale-70'
                        }`}
                        >
                        <img
                            src={item.icon}
                            alt="A descriptive icon"
                            style={{ width: '32px', height: '32px' }}
                        />
                        </span>
                        <span className="text-[10px] tracking-wide opacity-100 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 text-center dark:text-white capitalize">
                            {item.id}
                        </span>
                    </a>
                ))}
            </div>
        </div>
        </>
    );
}

export default Navbar