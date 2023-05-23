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
                            CONTACTO
                        </motion.h1>
                    </div>
                    <div className="textoR">
                        <motion.span
                            initial={{ opacity: 0, scale: 0.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 3 }}
                        >
                            "Ñamku rakizuam mew, mapu ñi rakizuam mew, taiñ mapuche küme ngillatun mew, taiñ pu che ruka mew, ngillatun mew,
                             fücha mew, küme ta kimeltuwün, küme ta pu peñi küme peñi küme amuwün, küme ta rakizuam, mewñün ta wüñoy puel mapu mew"
                        </motion.span>
                    </div>
                </div>
            </div>

    </>
  )
}
