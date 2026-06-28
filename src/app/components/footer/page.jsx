export default function Footer() {
    return (
        <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 py-14 border-b border-gray-800">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <a href="#home" className="flex items-center gap-2 mb-4">
                            <span className="text-xl font-extrabold text-white">
                                Berkah Kaca<span className="text-blue-400"> Alumunium</span>
                            </span>
                        </a>
                        <p className="text-sm leading-relaxed mb-5">
                            Mitra lengkap Anda untuk bahan bangunan. Produk berkualitas, harga bersaing, dan pengiriman
                            terpercaya.
                        </p>
                        <div className="flex gap-3">
                            {[
                                ['fa-instagram', 'hover:bg-blue-600'],
                                ['fa-whatsapp', 'hover:bg-green-600'],
                                ['fa-facebook-f', 'hover:bg-blue-700'],
                            ].map(([icon, hover]) => (
                                <a
                                    key={icon}
                                    href="#"
                                    className={`w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center ${hover} transition-colors`}
                                >
                                    <i className={`fa-brands ${icon} text-sm`}></i>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h5 className="text-white font-bold text-sm mb-5 uppercase tracking-widest">Quick Links</h5>
                        <ul className="space-y-3 text-sm">
                            {[
                                ['#home', 'Home'],
                                ['#about', 'About Us'],
                                ['#products', 'Products'],
                                ['#address', 'Our Location'],
                                ['#contact', 'Contact Us'],
                            ].map(([href, label]) => (
                                <li key={href}>
                                    <a
                                        href={href}
                                        className="hover:text-white hover:translate-x-1 inline-block transition-all"
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h5 className="text-white font-bold text-sm mb-5 uppercase tracking-widest">Products</h5>
                        <ul className="space-y-3 text-sm">
                            {['Gypsum Board', 'PVC Ceiling', 'Hollow Steel', 'Accessories'].map((p) => (
                                <li key={p}>
                                    <a
                                        href="#products"
                                        className="hover:text-white hover:translate-x-1 inline-block transition-all"
                                    >
                                        {p}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h5 className="text-white font-bold text-sm mb-5 uppercase tracking-widest">Contact</h5>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <i className="fa-solid fa-location-dot text-blue-400 mt-0.5 flex-shrink-0"></i>
                                <span>Caringin, Kec. Legok, Kabupaten Tangerang, Banten</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <i className="fa-solid fa-phone text-blue-400 flex-shrink-0"></i>
                                <a href="tel:+62811234567" className="hover:text-white transition-colors">
                                    +62 811-2345-6789
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <i className="fa-solid fa-envelope text-blue-400 flex-shrink-0"></i>
                                <a href="mailto:info@buildpro.id" className="hover:text-white transition-colors">
                                    info@berkahkacaalumunium.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-6 text-sm">
                    <p>
                        © 2026 <span className="text-white font-semibold">Berkah Kaca Alumunium</span>. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </>
    );
}
