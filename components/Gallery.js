import React, { useState, useEffect } from 'react'
import Layout from './Layout'
const Gallery = () => {
    const [imagenes, setImagenes] = useState([])
    const getGallery = async () => {
        const res = await fetch('http://jsonplaceholder.typicode.com/users/3/albums')
        const data = await res.json()
        setImagenes(data);
    }
    useEffect(() => {
        getGallery()
    }, [])




    return (
        <Layout>
            <p>Gallery</p>
            {
                imagenes.map(img => (
                    <div className="card my-2" key={img.id}>
                        <div className="card-header">
                            {img.title}
                        </div>
                    </div>
                ))
            }
        </Layout>
    )
}
export default Gallery

