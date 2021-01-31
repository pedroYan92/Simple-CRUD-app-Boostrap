import React from 'react'

function Pagination() {
    return (
        <div >
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li className="page-item"><a className="page-link" href="/">Anterior</a></li>
                    <li className="page-item"><a className="page-link" href="/">1</a></li>
                    <li className="page-item"><a className="page-link" href="/">2</a></li>
                    <li className="page-item"><a className="page-link" href="/">3</a></li>
                    <li className="page-item"><a className="page-link" href="/">Próximo</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Pagination
