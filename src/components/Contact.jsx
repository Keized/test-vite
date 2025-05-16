function Contact() {

    return (
        <section id="contact">
            <div className="container mt-3">
                <h2 className="text-center">Contactez-moi</h2>
                <div className="row contactContent">
                    <div className="col-lg-4 mt-4 contactColumn">
                        <i className="fa-regular fa-envelope fa-4x"></i>
                        <h4>Adresse mail</h4>
                        <p>sunny.biard@gmail.com</p>
                    </div>
                    <div className="col-lg-4 mt-4 contactColumn">
                        <i className="fa-brands fa-linkedin-in fa-4x"></i>
                        <h4>LinkedIn</h4>
                        <p>Sunny BIARD</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact