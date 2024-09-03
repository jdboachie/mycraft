import React from 'react'

const Craftainer = ({name, description, component} : {name: string, description: string, component: React.ReactNode}) => {
  return (
    <div className='grid gap-4 rounded-md p-4'>
      <div className="p-4 grid gap-1">
        <p className="text-xl font-medium">{name}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="grid place-items-center size-full bg-primary-foreground h-[250px] rounded-lg">{component}</div>
    </div>
  )
}

export default Craftainer