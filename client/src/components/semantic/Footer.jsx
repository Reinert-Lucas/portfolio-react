
function Footer() {
    return (
        <>
            <footer>
                <section className='contacto'>
                    <h4>Contacto</h4>
                    <ul>
                        <li><a href="#" className='cnt-link'>Mi Telefono</a></li>
                        <li><a href="#" className='cnt-link'>Mi Gmail</a></li>
                        <li><a href="#" className='cnt-link'>Mi WhatsApp</a></li>
                        <li><a href="#" className='cnt-link'>Mi GitHub</a></li>
                    </ul>
                </section>
                <p className='copy'>&copy; {new Date().getFullYear()} Reinert Lucas Iván. Todos los derechos reservados.</p>
            </footer>
        </>
    )
}

export default Footer