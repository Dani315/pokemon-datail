import React from 'react';


function Table(props){

return(
    <>
    <table>
            <tbody>
            {props.rows}
            </tbody>
        </table>
    </>
)

}

export default Table