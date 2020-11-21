import Layout from '../components/Layout';
import MyHead from '../components/Myhead';
import Nav from '../components/Nav';
//import Image from 'next/image'

const about = () => {
    return (
        <>
            <MyHead />
            <Nav statusAbout={'text-primary'} />
            <Layout>
                <>
                <div className="row">
                    <div className="col-sm-12 col-md-6 text-center">
                        <h1 className="text-primary my-5">About us</h1>
                    </div>
                    <div className="col-sm-12 col-md-6 text-center">
                        <img
                            src="https://cdn.pixabay.com/photo/2016/03/09/09/22/workplace-1245776_960_720.jpg" alt="nosotros trabajando"
                            className="img-fluid mt-5"
                        />
                    </div>
                </div>
                <div className="text-center mt-5">
                    <h5 className="text-dark">We are Working</h5>
                </div>
                </>
                <style jsx>
                    {`
                    img{
                        border-radius: 8px;
                    }
                    `}
                </style>
            </Layout>
        </>
    )
}

export default about