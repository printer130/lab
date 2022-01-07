export const ErrorMessage = ({ children }) => {
  return (
    <>
      <small>
        {children}
      </small>
      <style jsx>{`
        small {
         display: block;
         color: #f00;
         margin:0 auto;
        }
      `}
      </style>
    </>
  )
}
