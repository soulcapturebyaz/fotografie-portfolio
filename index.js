import React from "react";

function Card({ children }) {
  return (
    <div className="border rounded-md shadow-sm p-4">
      {children}
    </div>
  );
}

function Button({ children, ...props }) {
  return (
    <button
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      {...props}
    >
      {children}
    </button>
  );
}

function Input(props) {
  return (
    <input
      className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      {...props}
    />
  );
}

function Textarea(props) {
  return (
    <textarea
      className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      {...props}
    />
  );
}

export default function HomePage() {
  return (
    <main className="p-6 max-w-4xl mx-auto space-y-8">
      <section className="text-center space-y-2">
        <h1 className="text-4xl font-bold">[Dein Name] Fotografie</h1>
        <p className="text-lg text-gray-600">
          Echte Momente. Natürlich festgehalten.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <h2 className="text-xl font-semibold mb-2">Paarfotografie</h2>
          <p>
            Emotionale, natürliche Bilder von euch als Paar – draußen oder bei euch zuhause.
          </p>
        </Card>
        <Card>
          <h2 className="text-xl font-semibold mb-2">Tierfotografie</h2>
          <p>
            Individuelle Fotoshootings für Hunde, Katzen & Pferde in gewohnter Umgebung.
          </p>
        </Card>
        <Card>
          <h2 className="text-xl font-semibold mb-2">Produktfotografie</h2>
          <p>
            Professionelle Bilder für dein Business – ideal für Onlineshops & Selbstständige.
          </p>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Über mich</h2>
        <p>
          Ich bin [Dein Name], leidenschaftliche Fotografin mit dem Blick fürs Detail. Mein Ziel ist es,
          echte, emotionale und stimmungsvolle Bilder zu schaffen – ohne starre Posen, aber mit Herz.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Kontakt</h2>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <Input type="text" placeholder="Dein Name" required />
          <Input type="email" placeholder="Deine E-Mail" required />
          <Textarea placeholder="Worum geht's?" required />
          <Button type="submit">Nachricht senden</Button>
        </form>
      </section>
    </main>
  );
}