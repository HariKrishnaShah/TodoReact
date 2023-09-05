import React from 'react'
import Swal from 'sweetalert2'

function SweetAlert({title, msg}) {
  return (
    <>
    {Swal.fire(
        `${title}`,
        `${msg}`,
        'success'
      )}
    </>
    
  )
}

export default SweetAlert