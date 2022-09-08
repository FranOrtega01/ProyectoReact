import React from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const SweetAlert = ({html}) => {
    const MySwal = withReactContent(Swal);
    return(
            MySwal.fire({
                html: {html},
                })
    )
}
export default SweetAlert