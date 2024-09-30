import React, { useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface ListItemsProps  {
    obj: string
}

const ListItems: React.FC<ListItemsProps> = ({ obj }) => {
    const ref = useRef<HTMLDivElement | null>(null)
    const { ref: inViewRef, inView: isInView } = useInView()
    const controls = useAnimation()

    useEffect(() => {
        if (isInView) {
            controls.start("visible")
        }
    }, [isInView, controls])

    return (
        <div ref={inViewRef}>
            <motion.div variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 }
            }}
                initial="hidden"
                animate={controls}
                transition={{ duration: 0.5, delay: 0.20 }}
            >
                <ul className='flex'>
                    <li>🔹</li>
                    <li className='font-bold'>{obj}</li>
                </ul>
            </motion.div>
        </div>
    )
}

export default ListItems
