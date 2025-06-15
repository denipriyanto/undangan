"use client";
import { useState } from "react";

export default function SingleInvitationGenerator() {
    const [name, setName] = useState("");
    const [copied, setCopied] = useState(false);

    const message = name
        ? `*Assalamualaikum Warahmatullahi Wabarakatuh*

Dengan segala hormat dan rasa syukur,  
Kami bermaksud mengundang Bapak/Ibu/Saudara/i *${name}* untuk hadir dalam acara pernikahan kami.

Untuk informasi lengkap mengenai waktu dan tempat acara, Bapak/Ibu/Saudara/i dapat mengakses undangan digital kami melalui tautan berikut:  
👉 https://denintan.vercel.app/?for=${encodeURIComponent(name).replace(
              /%20/g,
              "+"
          )}

Kehadiran serta doa restu dari Bapak/Ibu/Saudara/i akan menjadi kebahagiaan tersendiri bagi kami.

Mohon maaf apabila undangan ini disampaikan melalui pesan singkat.

*Salam hangat,*  
*Intan & Deni*`
        : "";

    const handleCopy = async () => {
        if (!name) return;
        try {
            await navigator.clipboard.writeText(message);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.log(err);
            alert("Gagal menyalin pesan");
        }
    };

    return (
        <div className="max-w-xl mx-auto p-4 bg-white/10 rounded-xl backdrop-blur-md border border-white/20 text-white mt-12">
            <h2 className="text-xl font-semibold mb-4">
                Generator Undangan Manual
            </h2>

            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Masukkan Nama Tamu"
                className="w-full p-2 mb-4 rounded-md bg-white/20 text-white placeholder-white/60"
            />

            <button
                onClick={handleCopy}
                disabled={!name}
                className="px-4 py-2 bg-green-600 rounded-md hover:bg-green-700 disabled:opacity-50"
            >
                {copied ? "✅ Disalin!" : "📋 Salin Pesan"}
            </button>

            {message && (
                <pre className="mt-4 p-3 bg-black/20 rounded text-sm whitespace-pre-wrap max-h-80 overflow-y-auto">
                    {message}
                </pre>
            )}
        </div>
    );
}
