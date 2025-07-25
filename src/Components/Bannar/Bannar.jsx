import React from 'react'

const Bannar = () => {
    return (
        <div className="hero bg-base-200  max-w-6xl mx-auto">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src="/books.jpg"
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div >
                    <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
                   
                    <button className="btn btn-primary bg-emerald-600 mt-2 md:mt-5">View The List</button>
                </div>
            </div>
        </div>
    )
}

export default Bannar