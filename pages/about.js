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
                <div className="d-flex justify-content-around">
                    <h1 className="text-primary">About us</h1>
                    <img
                        src="https://cdn.pixabay.com/photo/2016/03/09/09/22/workplace-1245776_960_720.jpg" alt="nosotros trabajando"
                        width={400}
                        className="mt-5"
                    />
                </div>
                <div className="text-center mt-5">
                    <h5 className="text-dark">We are Working</h5>
                </div>
                <style jsx>
                    {`
                    h1{
                        margin-top: 7rem;
                    }
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