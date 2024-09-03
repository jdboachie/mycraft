'use client';

import { useRef } from 'react';
import { motion, MotionValue, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { GithubIcon, HomeIcon, LightbulbIcon, MailIcon, SettingsIcon, TwitterIcon } from 'lucide-react';


const MacOSDock = () => {

  let mouseX = useMotionValue(Infinity);

  const icons = [
    {name: 'twitter', icon: <HomeIcon className='size-full' />},
    {name: 'twitter', icon: <LightbulbIcon className='size-full' />},
    {name: 'mail', icon: <MailIcon className='size-full' />},
    {name: 'twitter', icon: <SettingsIcon className='size-full' />},
    {name: 'twitter', icon: <GithubIcon className='size-full' />},
    {name: 'twitter', icon: <TwitterIcon className='size-full' />},
  ]

  return (
    <div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className='mx-auto cursor-pointer flex h-16 items-end gap-4 rounded-3xl border shadow-xl bg-primary-foreground p-3'
    >
      {icons.map((icon, index) => (
        <AppIcon mouseX={mouseX} key={index} icon={icon.icon} />
      ))}
    </div>
  )
}


const AppIcon = ({ mouseX, icon } : { mouseX: MotionValue<number>, icon: any}) => {

  let iconRef = useRef<HTMLDivElement>(null)

  let distance = useTransform(mouseX, val => {
    let bounds = iconRef.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - (bounds.width / 2)
  })

  let widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40])
  let width = useSpring(widthSync, { damping: 15, mass: 0.1, stiffness: 200})

  return (
    <motion.div
      title={icon.name}
      ref={iconRef}
      style={{ width }}
      className="aspect-square w-10 p-2.5 rounded-full bg-secondary border place-items-center grid dev"
    >
      <div className="size-full aspect-square w-[80%] place-items-center flex text-muted-foreground">{icon}</div>
    </motion.div>
  )
}

export default MacOSDock