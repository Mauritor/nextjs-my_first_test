import MyHead from '../components/Myhead';
import Nav from '../components/Nav';

const about = () => {
    return (
        <>
            <MyHead />
            <Nav />
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h1 className="text-primary my-5">About</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default about