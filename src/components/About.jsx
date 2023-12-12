import React from 'react'
import {useRef} from 'react'
import {motion, useTransform, useScroll} from 'framer-motion'

export default function About() {
    const targetRef = useRef(null);
    const {scrollYProgress} = useScroll({
        target: targetRef,
    })

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"])
  return (
    <div className='h-full'>
        <section ref={targetRef} className='relative h-[300vh] bg-neutral-900'>
            <div className='sticky top-0 h-screen bg-purple-50 flex items-center overflow-hidden'>
                <motion.div style={{ x }}>
                    <div className='border p-96'>
                        <h1 className='text-5xl font-bold  text-white'>About1</h1>
                    </div>
                </motion.div>
                <motion.div style={{ x }}>
                    <div className='border p-96'>
                        <h1 className='text-5xl font-bold  text-white'>About2</h1>
                    </div>
                </motion.div>
                <motion.div style={{ x }}>
                    <div className='border p-96'>
                        <h1 className='text-5xl font-bold  text-white'>About3</h1>
                    </div>
                </motion.div>
                <motion.div style={{ x }}>
                    <div className='border p-96'>
                        <h1 className='text-5xl font-bold  text-white'>About</h1>
                    </div>
                </motion.div>
                <motion.div style={{ x }}>
                    <div className='border p-96'>
                        <h1 className='text-5xl font-bold  text-white'>About4</h1>
                    </div>
                </motion.div>
            </div>
        </section>
    </div>
  )
}
