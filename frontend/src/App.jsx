import { useState } from 'react'

function App() {
  return (
    <div className="bg-black h-full w-full p-3 flex flex-row">
      <div className='flex flex-col h-full w-12/100'>
        <div className='flex flex-col h-28/100 w-full'>
          <div className='w-full h-45/100 bg-[#CC99CC] mb-2'></div>
          <div className='w-full h-55/100 flex flex-col'>
            <div class='w-full h-1/3 bg-[#9999FF]'></div>
            <div class='w-full h-2/3 bg-[#9999FF] rounded-bl-full'></div>
          </div>
        </div>

        <div className='flex flex-col h-72/100 w-full'>
          
        </div>
      </div>

      <div className='flex flex-col h-full w-82/100'>

      </div>
    </div>
  )
}

export default App