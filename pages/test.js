import MyHead from '../components/Myhead';
import Nav from '../components/Nav'

export default function () {
    return (

        <>
            <MyHead />
            <Nav />
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h1 className="text-primary my-5">Test</h1>
                    </div>
                </div>
            </div>
        </>
    )
}