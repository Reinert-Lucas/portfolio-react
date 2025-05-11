function Footer() {
    return (
        <>
            <footer>
                <section className='contacto'>
                    <h4>Contacto</h4>
                    <ul>
                        <li><a href="tel:+543751619821" className='cnt-link'>Mi Telefono</a></li>
                        <li><a href="mailto:lucasreinert2006@gmail.com?Subject=Consulta%20tecnica" target="_blank" className='cnt-link'>Mi Gmail</a></li>
                        <li><a href="https://wa.me/543751619821" target="_blank" className='cnt-link'>Mi WhatsApp</a></li>
                        <li><a href="https://github.com/Reinert-Lucas" className='cnt-link'>Mi GitHub</a></li>
                    </ul>
                </section>
                <p className='copy'>&copy; {new Date().getFullYear()} Reinert Lucas Iván. Todos los derechos reservados.</p>
            </footer>
        </>
    )
}

export default Footer