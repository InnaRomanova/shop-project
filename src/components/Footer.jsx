function Footer() {


    return (
        <>
            <footer className="page-footer teal">
                <div className="footer-copyright">
                    <div className="container">
                        © {new Date().getFullYear()} Copyright Text
                        <a className="grey-text text-lighten-4 right"
                            href="https://innaromanova.github.io/shop-project"
                            rel="noreferrer"
                            terget="_blank">Repo</a>
                    </div>
                </div>
            </footer></>
    )
}

export default Footer;