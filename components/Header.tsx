import { use } from 'react'
import { Button } from "./ui/button"
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { NavigationContext } from '@/lib/NavigationProvider';

function Header() {
  const {setIsMobileNavOpen} = use(NavigationContext)
  
  return (
    <header className='border-b border-gray-200/50 backdrop-blur-xl sticky top-0 z-50'>
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileNavOpen(true)}
            className='md:hidden text-gray-500 hover:text-gray-700 hover:bg-gray-100/50'
          >
            <HamburgerMenuIcon className="h-5 w-5" />
          </Button>
          <div className="font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Chat with AI Agent
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header