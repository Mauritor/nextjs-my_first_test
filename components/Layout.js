const Layout = ({ children }) => {
    return (
        <>
            <div className="container" style={{ backgroundColor: '#111' }}>
                <div className="row">
                    <div className="col-sm-12">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout