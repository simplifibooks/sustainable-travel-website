export function AdPlacement({ position }: { position: 'sidebar' | 'in-content' | 'banner' }) {
  return (
    <div className={`ad-container ${position} bg-gray-100 dark:bg-gray-800 rounded-lg p-4 text-center`}>
      <div className="text-sm text-gray-500 mb-2">Advertisement</div>
      <div className={`
        ${position === 'sidebar' ? 'w-[300px] h-[600px]' : ''}
        ${position === 'in-content' ? 'w-full h-[250px]' : ''}
        ${position === 'banner' ? 'w-full h-[90px]' : ''}
        bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center
      `}>
        <span className="text-gray-400">Ad Space</span>
      </div>
    </div>
  )
}