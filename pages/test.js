import MyHead from '../components/Myhead';
import Nav from '../components/Nav';
import Layout from '../components/Layout'



const test = () => {
    
    return (
        <>
            <MyHead />
            <Nav statusTest={'text-primary'} />
            <Layout >
                <h1 className="text-primary my-5">Test Cloudinary</h1>
                
            </Layout>
        </>

    )
}


export default test