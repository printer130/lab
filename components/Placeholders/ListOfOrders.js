export function PlaceholderListOrders () {
  return (
    <nav>
      <div className="bg-gray-200 h-12 w-28" data-placeholder />
      <div className="bg-gray-200 h-12 w-28" data-placeholder />
      <div className="bg-gray-200 h-12 w-54" data-placeholder />
      <div className="bg-gray-200 h-12 w-14" data-placeholder />
      <div className="bg-gray-200 h-12 w-14" data-placeholder />
      <div className="bg-gray-200 h-12 w-28" data-placeholder />
      <style jsx>{`
        nav {
          display: grid;
          max-width: 100%;
          width: 100%;
          align-self: center;
          margin-bottom: 4px;
          grid-template-columns: 105px 145px 1fr repeat(3, 80px) repeat(4, 35px);
        }
        [data-placeholder]::after {
            content: ' ';
            box-shadow: 0 0 50px 9px rgba(254, 254, 254,.15);
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
      `}</style>
    </nav>
  )
}
