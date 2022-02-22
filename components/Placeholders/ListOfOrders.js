export function PlaceholderListOrders () {
  return (
    <nav className='grid w-full max-w-full self-center mb-1'>
      <div className='bg-gray-200 h-12 w-full' data-placeholder />
      <style jsx>{`
        [data-placeholder]::after {
            content: ' ';
            box-shadow: 0 0 50px 9px rgba(254, 254, 254,.035);
            position: absolute;
            top: 0;
            left: -100%;
            height: 100%;
            animation: load 1s infinite;
          }

          @keyframes load {
            0% {
              left: -100%;
            }
            100% {
              left: 150%;
            }
          }
      `}
      </style>
    </nav>
  )
}
