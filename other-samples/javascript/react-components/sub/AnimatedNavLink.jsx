'use client'
import { useState } from 'react'
import { motion} from 'framer-motion'

const AnimatedNavLink = ( href, text, ...rest ) => {
    console.log(href);
      const [isHovered, setIsHovered] = useState(false);

      const hoverLinkStyles = { 
        backgroundColor: isHovered ? '#024a86' : '#008cff',
      }

      const baseLinkStyles = {
        backgroundColor: '#008cff',
        padding: '4px 12px', 
        borderRadius: '8px', 
        letterSpacing: '0.05em', 
        textTransform: 'capitalize', 
        display: 'block', 
    };

      return(
        <div className="hidden md:flex">
          <motion.a
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            href={href.href}
            className="mx-auto mt-7 ml-2 block w-max rounded-lg font-light capitalize tracking-wider transition-colos text-base text-white"

            style={{
              ...baseLinkStyles,
              ...(isHovered ? hoverLinkStyles : {}),
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            {...rest} // Pass through any other props like 'key' or 'id' if needed
          >
          {href.children}
        </motion.a>
        </div>
      )
}

export default AnimatedNavLink