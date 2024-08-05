import { navLinks } from '../utils/constant'

const Filters = () => {
  return (
    <div className="container flex overflow-x-auto hide-scrollbar">
    {navLinks.map((item) => (
        <div className="flex items-center justify-center flex-col mx-10 p-2 hover:border-b transition-all duration-300 delay-200">
            <item.icon fontSize="large" />
            <p className="text-xs text-nowrap">{item.label}</p>
     </div>
    ))}
  </div>
  )
}

export default Filters