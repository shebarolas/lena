import React from 'react'
import { motion } from 'framer-motion';
import '../../styles/hero.css'
export const Hero = () => {
  return (
    <>
        <div className="info">
                <div className="global">
                    <div className="textoL">
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 2 }}
                        >
                            KÜMEKÜTRAL
                        </motion.h1>
                    </div>
                    <div className="textoR">
                        <motion.span
                            initial={{ opacity: 0, scale: 0.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 3 }}
                        >
                           "Calor ancestral, Nueva Imperial IX Región de la Araucannia"
                        </motion.span>
                        
                    </div>
                </div>
            </div>

    </>
  )
}
