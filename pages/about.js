import Layout from '../components/Layout';
import MyHead from '../components/Myhead';
import Nav from '../components/Nav';

const about = () => {
    return (
        <>
            <MyHead />
            <Nav statusAbout={'text-primary'} />
            <Layout>
                <h1 className="text-primary my-5">About us</h1>
            </Layout>
        </>
    )
}

export default about