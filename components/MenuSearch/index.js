import { Menu } from '@headlessui/react'

export function Item ({ onClick, fullName, ci, ...rest }) {
  return (
    <Menu.Item>
      {({ active }) => (
        <button
          onClick={() => onClick({ ci, fullName, ...rest })}
          className={`${
            active ? 'bg-violet-500 text-white' : 'text-gray-900'
          } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
        >
          {active
            ? (
              <ArchiveActiveIcon className='w-5 h-5 mr-2' ariaHidden='true' />
              )
            : (
              <ArchiveInactiveIcon className='w-5 h-5 mr-2' ariaHidden='true' />
              )}
          <p className='flex flex-col mx-auto'>
            <span>{ci}</span>
            <span>{fullName}</span>
          </p>
        </button>
      )}
    </Menu.Item>
  )
}
export function MenuSearch ({ data, onClick, onClose }) {
  return (
    <>
      {data && (
        <Menu
          as='div'
          className='absolute top-24  text-left bg z-10 px-1 right-0 w-56 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
        >
          <button onClick={onClose} className='float-right py-2'>
            <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
              <path fillRule='evenodd' d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z' clipRule='evenodd' />
            </svg>
          </button>
          {data?.data &&
            data.data.map(({ id, ci, fullName, authorEmail, birth, doctor, nit, phone, sex, reason }) => {
              return (
                <Item
                  key={id}
                  onClick={onClick}
                  ci={ci}
                  fullName={fullName}
                  authorEmail={authorEmail}
                  birth={birth}
                  doctor={doctor}
                  nit={nit}
                  phone={phone}
                  sex={sex}
                  reason={reason}
                />
              )
            })}
        </Menu>
      )}
    </>
  )
}

function ArchiveInactiveIcon () {
  return (
    <svg className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
      <path
        fillRule='evenodd'
        d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z'
        clipRule='evenodd'
      />
    </svg>
  )
}

function ArchiveActiveIcon () {
  return (
    <svg className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
      <path
        fillRule='evenodd'
        d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
        clipRule='evenodd'
      />
    </svg>
  )
}
