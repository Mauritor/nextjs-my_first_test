import MyHead from '../components/Myhead';
import Nav from '../components/Nav';
import Layout from '../components/Layout'
import { useState } from 'react';


const test = () => {
    const [loading, setLoading] = useState(false)
    const [image, setImage] = useState("")

    const uploadImage = async (e) => {
        const files = e.target.files;
        const data = new FormData();
        data.append('file', files[0])
        data.append('upload_preset', 'hnbmukep')
        setLoading(true);

        const res = await fetch('https://api.cloudinary.com/v1_1/dhaqermou/image/upload', {
            method: 'POST',
            body: data
        })
        const file = await res.json();
        console.log(file);

        setImage(file.secure_url);
        setLoading(false);
    }
    return (
        <>
            <MyHead />
            <Nav statusTest={'text-primary'} />
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <h1 className="text-primary my-5">Test Cloudinary</h1>
                        <div className="custom-file">
                            <input
                                type="file"
                                name="file"
                                id="customFileLang"
                                placeholder="Cargar Imagen"
                                className="custom-file-input"
                                onChange={uploadImage}
                            />
                            <label
                                className="custom-file-label"
                                htmlFor="customFileLang"
                            >
                                Elegir Cover Art
                            </label>
                        </div>
                        <div className="img-fluid mt-5">
                            {
                                loading
                                    ? (<h3>Loading...</h3>)
                                    : (<img src={image} className="load-image" />)
                            }
                        </div>
                    </div>
                </div>
            </div>



            <style jsx>
                {`
                   .load-image{
                       width: 200px;
                       border-radius: 8px;
                   }
                   `}
            </style>

        </>

    )
}


export default test