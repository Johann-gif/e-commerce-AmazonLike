import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    const toTop = () => {
        window.scrollTo(0, 0)
    }
    return (
        <div className="footerarea">
            <div onClick={toTop} className="footerarea__top">
                <p>Back to Top</p>
            </div>
            <div className="footerarea__links">
                <div className="footerarea__linkarea">
                    <p><strong>Pour mieux nous connaître</strong></p>
                    <Link to="/">
                        <p>À propos d'Amazon</p>
                    </Link>
                    <Link to="/">
                        <p>Carrières</p>
                    </Link>
                    <Link to="/">
                        <p>Durabilité</p>
                    </Link>
                </div>
                <div className="footerarea__linkarea">
                    <p><strong>Gagnez de l'argent</strong></p>
                    <Link to="/">
                        <p>Vendez sur Amazon</p>
                    </Link>
                    <Link to="/">
                        <p>Vendez sur Amazon Business</p>
                    </Link>
                    <Link to="/">
                        <p>Vendez sur Amazon Handmade</p>
                    </Link>
                </div>
                <div className="footerarea__linkarea">
                    <p><strong>Moyens de paiement Amazon</strong></p>
                    <Link to="/">
                        <p>Cartes de paiement</p>
                    </Link>
                    <Link to="/">
                        <p>Paiement en plusieurs fois</p>
                    </Link>
                    <Link to="/">
                        <p>Amazon Currency Converter</p>
                    </Link>
                </div>
                <div className="footerarea__linkarea">
                    <p><strong>Besoin d'aide ?</strong></p>
                    <Link to="/">
                        <p>Amazon et COVID-19</p>
                    </Link>
                    <Link to="/">
                        <p>Voir ou suivre vos commandes</p>
                    </Link>
                    <Link to="/">
                        <p>Tarifs et options de livraison</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer;