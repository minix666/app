"use client";
import { useState } from "react";

export default function SignUp() {
    const [loading, setLoading] = useState(false);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => setLoading(false), 2000);
    };

    return (
        <div 
            className="min-h-screen flex flex-col items-center justify-center py-10 px-4"
            style={{
                backgroundImage: "url('https://cdnjs.cloudflare.com/ajax/libs/placecage/2/1200/800')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed"
            }}
        >
            <div className="max-w-md w-full bg-black bg-opacity-80 backdrop-blur-sm rounded-lg shadow-lg p-8 border border-purple-700">
                <h1 className="text-2xl font-bold mb-6 text-[#8B2C3B] text-center">pag inicial</h1>
                
                {/* Contenedor principal con estilo NERV */}
                <div className="relative overflow-hidden">
                    {/* Logo NERV con animación */}
                    <div className="mb-8 text-center">
                        <div className="w-24 h-24 mx-auto mb-3 relative">
                            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                                {/* Símbolo de NERV */}
                                <path d="M50 10 L90 90 L10 90 Z" fill="none" stroke="#FF5722" strokeWidth="3" />
                                <text x="35" y="70" fill="#FF5722" fontFamily="monospace" fontSize="12">NERV</text>
                                <circle cx="50" cy="50" r="40" fill="none" stroke="#A855F7" strokeWidth="1" opacity="0.6" className="animate-pulse" />
                            </svg>
                        </div>
                        <h2 className="text-3xl font-bold text-orange-500 mb-2">NERV</h2>
                        <div className="flex justify-center mb-2">
                            <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-orange-500"></div>
                        </div>
                        <p className="text-green-400 text-sm font-mono">Terminal de Acceso - EVA</p>
                    </div>
                    
                    {/* EVA Unit-01 decoración superior */}
                    <div className="absolute -top-4 -right-4 w-20 h-20 opacity-30 rotate-12">
                        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20,10 L50,5 L80,10 L90,40 L70,80 L50,95 L30,80 L10,40 Z" fill="none" stroke="#A855F7" strokeWidth="2" />
                            <path d="M35,30 L50,40 L65,30" fill="none" stroke="#A855F7" strokeWidth="2" />
                            <path d="M50,40 L50,70" fill="none" stroke="#A855F7" strokeWidth="2" />
                            <path d="M30,85 L50,70 L70,85" fill="none" stroke="#A855F7" strokeWidth="2" />
                        </svg>
                    </div>
                    
                    {/* Líneas de escáner EVA */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="h-px w-full bg-green-500 opacity-30 absolute animate-pulse" style={{top: '20%'}}></div>
                        <div className="h-px w-full bg-green-500 opacity-30 absolute animate-pulse" style={{top: '40%', animationDelay: '0.5s'}}></div>
                        <div className="h-px w-full bg-green-500 opacity-30 absolute animate-pulse" style={{top: '60%', animationDelay: '1s'}}></div>
                        <div className="h-px w-full bg-green-500 opacity-30 absolute animate-pulse" style={{top: '80%', animationDelay: '1.5s'}}></div>
                    </div>
                    
                    {/* Formulario estilo EVA */}
                    <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                        <div className="space-y-1">
                            <label className="block text-green-400 text-sm font-mono">ID DE PILOTO</label>
                            <input 
                                type="text" 
                                className="w-full bg-gray-900/80 border border-orange-500 text-white p-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                                placeholder="Ingresar identificación" 
                            />
                        </div>
                        
                        <div className="space-y-1">
                            <label className="block text-green-400 text-sm font-mono">CONTRASEÑA</label>
                            <input 
                                type="password" 
                                className="w-full bg-gray-900/80 border border-orange-500 text-white p-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                                placeholder="●●●●●●●●" 
                            />
                        </div>
                        
                        <div className="pt-4">
                            <button 
                                type="submit" 
                                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-4 border-b-4 border-orange-800 rounded transition-all hover:translate-y-1"
                                disabled={loading}
                            >
                                {loading ? (
                                    <span className="inline-flex items-center justify-center">
                                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        SINCRONIZANDO...
                                    </span>
                                ) : "INICIAR SINCRONIZACIÓN"
                                }
                            </button>
                        </div>
                    </form>
                    
                    {/* Alertas y estado del sistema */}
                    <div className="mt-6 border border-red-500 bg-red-900/20 p-2 rounded relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center opacity-10">
                            <svg viewBox="0 0 100 100" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="50,15 85,85 15,85" fill="none" stroke="#FF0000" strokeWidth="2" />
                                <text x="46" y="65" fill="#FF0000" fontSize="30">!</text>
                            </svg>
                        </div>
                        <p className="text-red-400 text-xs font-mono relative z-10 pl-2">
                            ALERTA: Patrón azul detectado<br/>
                            <span className="text-xs opacity-70">Estado de sincronización: En espera</span>
                        </p>
                    </div>
                    
                    {/* Enlaces de ayuda */}
                    <div className="mt-4 text-center space-y-2">
                        <p className="text-purple-400 text-sm hover:text-purple-300 cursor-pointer transition-colors">¿Olvidaste tu código de acceso?</p>
                        <p className="text-purple-400 text-sm hover:text-purple-300 cursor-pointer transition-colors">Solicitar autorización MAGI</p>
                    </div>
                </div>
                
                {/* Footer */}
                <div className="mt-6 text-center">
                    <p className="text-xs text-gray-500">© NERV 2025 | PROYECTO DE COMPLEMENTACIÓN HUMANA</p>
                </div>
            </div>
        </div>
    );
}