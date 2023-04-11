import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <header className="NavBar_header">
            <h1 className="NavBar__title">Demetrio´s Jardin & Deco</h1>
            <CartWidget />
            <nav className="NavBar__nav">
                <a href="#" className="NavBar__link link">Inicio</a>
                <a href="#" className="NavBar__link link">Productos</a>
                <a href="#" className="NavBar__link link">Acerca de Nosotros</a>
                <a href="#" className="NavBar__link link">Contacto</a>
            </nav>
        </header>
    )
}

export default NavBar;