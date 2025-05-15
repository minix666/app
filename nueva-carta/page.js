"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NuevaCarta() {
    const [nombre, setNombre] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const res = await fetch("/api/firestore", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ data: { nombre, mensaje } }),
        });
        setLoading(false);
        if (res.ok) {
            router.push("/cartas");
        } else {
            alert("Error al enviar la carta");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
            <input className="w-full border border-[#ffe6a0] rounded px-3 py-2" value={nombre} onChange={e => setNombre(e.target.value)} placeholder="Nombre" required />
            <textarea className="w-full border border-[#ffe6a0] rounded px-3 py-2" value={mensaje} onChange={e => setMensaje(e.target.value)} placeholder="Mensaje" required />
            <button type="submit" className="w-full py-2 rounded-full bg-[#ffe6a0] text-[#8B2C3B] font-bold shadow-sm transition hover:bg-[#ffda6a]" disabled={loading}>
                {loading ? "Enviando..." : "Enviar carta"}
            </button>
        </form>
    );
}
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Cartas() {
    const [cartas, setCartas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/firestore")
            .then(res => res.json())
            .then(data => {
                setCartas(data);
                setLoading(false);
            });
    }, []);

    return (
        <div className="max-w-2xl mx-auto">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-[#8B2C3B]">Cartas disponibles</h1>
                <Link href="/nueva-carta">
                    <button className="px-6 py-2 rounded-full bg-[#ffe6a0] text-[#8B2C3B] font-bold shadow-sm hover:bg-[#ffda6a] transition">Enviar nueva carta</button>
                </Link>
            </div>
            {loading ? (
                <p className="text-[#8B2C3B]">Cargando cartas...</p>
            ) : (
                <ul className="space-y-4">
                    {cartas.map((carta) => (
                        <li key={carta.id} className="bg-[#fff8e1] rounded-xl p-4 shadow flex flex-col gap-2">
                            <span className="font-semibold text-[#8B2C3B]">{carta.nombre}</span>
                            <span className="text-[#222]">{carta.mensaje}</span>
                            <span className="text-xs text-[#bfa77a]">ID: {carta.id}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}