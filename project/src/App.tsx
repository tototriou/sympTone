import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Users, Package, Info, Mail, MessageSquare, Stethoscope } from 'lucide-react';

function App() {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { type: 'bot', text: 'Bonjour ! Comment puis-je vous aider ?' }
  ]);
  const [userInput, setUserInput] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsNavVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    setChatMessages([
      ...chatMessages,
      { type: 'user', text: userInput },
      { type: 'bot', text: 'Merci pour votre message. Un membre de notre équipe vous répondra bientôt.' }
    ]);
    setUserInput('');
  };

  const sections = [
    { id: 'home', title: 'Accueil', icon: Home },
    { id: 'about', title: 'A propos', icon: Info },
    { id: 'product', title: 'Le produit', icon: Package },
    { id: 'team', title: 'L\'équipe', icon: Users },
    { id: 'contact', title: 'Contact', icon: Mail },
  ];

  const teamMembers = [
    {
      name: 'Romain Hamze',
      role: 'Directeur général - CEO',
      description: 'Expert en stratégie d\'entreprise',
      image: 'photos/romain.jpg'
    },
    {
      name: 'Clara Millet',
      role: 'Ingénieur scientifique - CTO',
      description: 'Responsable technique et spécialiste en sciences biologiques. Responsable RSE',
      image: 'photos/clara.jpg'
    },
    {
      name: 'Lénaïc Callanquin',
      role: 'Ingénieur scientifique - CSO',
      description: 'Responsable Technique, spécialiste en machine learning',
      image: 'photos/lenaic.jpg'
    },
    {
      name: 'Margaux Mager',
      role: 'Directrice Financière - CFO',
      description: 'Spécialiste en gestion des ressources et stratégie financière.',
      image: 'photos/margaux.jpg'
    },
    {
      name: 'Camille Kelbert',
      role: 'Directrice communication - CMO',
      description: 'Spécialiste en stratégie et visibilité d\'entreprise.',
      image: 'photos/cam.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-transform duration-300 ${
        isNavVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="bg-white text-burgundy-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-28">
              <div className="flex items-center space-x-2">
                  <img
                  src="photos/logo.jpg"
                  alt="logo de l'entreprise"
                  className="w-32 rounded-lg m-auto"
                />
              
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8">
                {sections.map(({ id, title }) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    className="font-bold text-xl hover:text-burgundy-600 transition-colors duration-200"
                  >
                    {title}
                  </a>
                ))}
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-white hover:text-burgundy-200"
                >
                  {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-burgundy-800 text-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {sections.map(({ id, title, icon: Icon }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="block px-3 py-2 hover:bg-burgundy-700 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="flex items-center space-x-2">
                    <Icon size={20} />
                    <span>{title}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section id="home" className="h-[50vh] relative flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-cover bg-center z-0 "
            style={{ 
              backgroundImage: 'url("https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80")'
            }}
          ></div>
          <div className="absolute inset-0 bg-burgundy-900 bg-opacity-75 z-10 "></div>
          <div className="z-40 text-center animate-bounce-in">
            <h1 className="text-4xl font-bold text-white">SympTone</h1>
            <p className="text-lg text-burgundy-200">Se tester pour mieux se soigner</p>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="flex items-center bg-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="animate-slide-in-left">
                <div className="bg-burgundy-50 p-8 rounded-lg shadow-lg">
                  <h2 className="text-4xl font-bold text-burgundy-800 mb-8">A propos</h2>
                  <p className="text-lg text-gray-700 text-justify">
                    La coqueluche, maladie respiratoire contagieuse causée par <i>Bordetella pertussis</i>, nécessite une meilleure détection en raison de l'augmentation des cas liée à l'immunité décroissante des vaccins acellulaires et à l'évolution bactérienne. Le coeur de notre projet est un algorithme de machine learning basé sur l'analyse des sons de toux. SympTone vous fournit un moyen de détection rapide et fiable de cette infection mais également de toux grasse, sèche ou sifflante.
                  </p>
                </div>
              </div>
              <div className="animate-slide-in-right h-full flex items-center justify-center">
                <img
                  src="photos/téléchargement (1).jpg"
                  alt="Microscope"
                  className="w-full rounded-lg shadow-xl m-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Product Section */}
        <section id="product" className="min-h-screen flex items-center bg-burgundy-50">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="animate-slide-in-right">
              <h2 className="text-4xl font-bold text-burgundy-800 mb-8">Le produit</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative">
                  <img
                    src="photos/473334817_948422736936132_6477449063096585163_n.jpg"
                    alt="Product"
                    className="rounded-lg shadow-xl"
                  />
                  <p className="text-sm text-gray-500 mt-2 italic">Image générée par intelligence artificielle</p>
                </div>
                <div>
                  <div className="text-lg text-gray-700 text-justify">
                    <p>
                      SympTone propose une solution innovante pour la détection de la coqueluche grâce à un algorithme de machine learning avancé, conçu pour analyser les sons de toux. Cette technologie repose sur une caractéristique unique de la coqueluche : une toux distinctive, souvent comparée au chant du coq. En exploitant cette particularité sonore, notre algorithme est capable de reconnaître avec précision les signatures acoustiques associées à cette infection.
                    </p>
                    <p className="mt-4">
                      L'objectif est de rendre la détection rapide, simple et accessible à tous, tout en limitant le recours à des méthodes plus complexes comme les tests PCR. Ce dispositif contribue non seulement à désengorger les cabinets médicaux, mais également à permettre une prise en charge immédiate et à adapter efficacement les gestes barrières pour limiter la propagation de la maladie.
                    </p>
                   </div>
                  <div className="mt-4">
   
              <strong>Notre produit est disponible pour les médecins et les pédiatres libéraux sous forme d'un abonnement annuel. </strong>
                    <div className= "mt-4">
                    <strong> Pour plus d'informations, contactez-nous.</strong>
                    </div>
  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
<section>
  
</section>


        {/* Team Section */}
        <section id="team" className="min-h-screen flex items-center bg-white">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <h2 className="text-4xl font-bold text-burgundy-800 mb-12 text-center animate-fade-in">L'équipe</h2>
            <div className="max-w-5xl mx-auto flex gap-8 flex-wrap justify-center">
              {teamMembers.map((member, index) => (
                <div 
                  key={member.name} 
                  className="text-center w-64 animate-slide-up hover:cursor-pointer"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="group relative mb-4 overflow-hidden rounded-lg">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-burgundy-900 bg-opacity-0 group-hover:bg-opacity-75 transition-opacity duration-300 flex items-center justify-center">
                      <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4 text-center">
                        {member.description}
                      </p>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-burgundy-800">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen flex items-center bg-burgundy-900 text-white">
          <div className="max-w-7xl mx-auto px-4 py-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-12 text-center">Contact</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Nom"
                    className="w-full px-4 py-2 rounded bg-white/10 border border-burgundy-700 focus:outline-none focus:border-burgundy-500"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 rounded bg-white/10 border border-burgundy-700 focus:outline-none focus:border-burgundy-500"
                  />
                  <textarea
                    placeholder="Message"
                    rows={4}
                    className="w-full px-4 py-2 rounded bg-white/10 border border-burgundy-700 focus:outline-none focus:border-burgundy-500"
                  ></textarea>
                  <button className="w-full py-2 bg-burgundy-700 hover:bg-burgundy-600 rounded transition-colors duration-200">
                    Envoyer
                  </button>
                </form>
              </div>
              <div className="space-y-6">
                <div className="bg-burgundy-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Notre adresse</h3>
                  <p>300 boulevard Sébastien Brant </p>
                  <p>64007 Illkirch-Graffenstaden, France</p>
                  <p>Tél: +33 9 59 42 85 33</p>
                  <p>Email: contact@symptone.com</p>
                </div>
                <div className="h-64 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2642.1839753574614!2d7.741455776888714!3d48.52557047116676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4796c85c8e2e60c5%3A0x87f8bf79720e0956!2s300%20Bd%20S%C3%A9bastien%20Brant%2C%2067400%20Illkirch-Graffenstaden!5e0!3m2!1sfr!2sfr!4v1709831431051!5m2!1sfr!2sfr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-burgundy-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h4 className="font-semibold mb-4">À propos</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-burgundy-200">Notre histoire</a></li>
                  <li><a href="#" className="hover:text-burgundy-200">Notre mission</a></li>
                  <li><a href="#" className="hover:text-burgundy-200">Nos valeurs</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-burgundy-200">Diagnostic</a></li>
                  <li><a href="#" className="hover:text-burgundy-200">Consultation</a></li>
                  <li><a href="#" className="hover:text-burgundy-200">Support</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Légal</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-burgundy-200">Confidentialité</a></li>
                  <li><a href="#" className="hover:text-burgundy-200">Conditions d'utilisation</a></li>
                  <li><a href="#" className="hover:text-burgundy-200">Mentions légales</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Contact</h4>
                <ul className="space-y-2 text-sm">
                  <li>contact@symptone.com</li>
                  <li>+33 9 59 42 85 33</li>
                  <li>Illkirch-Graffenstaden, France</li>
                </ul>
              </div>
            </div>
            <div className="text-center text-sm border-t border-burgundy-700 pt-8">
              <p>&copy; {new Date().getFullYear()} Symptone. Tous droits réservés.</p>
            </div>
          </div>
        </footer>
      </main>

      {/* Chatbot */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="bg-burgundy-700 hover:bg-burgundy-600 text-white rounded-full p-3 shadow-lg transition-colors duration-200"
        >
          <MessageSquare size={24} />
        </button>
        
        {isChatOpen && (
          <div className="absolute bottom-16 right-0 w-80 bg-white rounded-lg shadow-xl">
            <div className="bg-burgundy-800 text-white p-4 rounded-t-lg">
              <h3 className="font-semibold">Chat avec Symptone</h3>
            </div>
            <div className="h-96 p-4 overflow-y-auto">
              {chatMessages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-4 ${
                    message.type === 'user' ? 'text-right' : 'text-left'
                  }`}
                >
                  <div
                    className={`inline-block p-3 rounded-lg ${
                      message.type === 'user'
                        ? 'bg-burgundy-700 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>
            <form onSubmit={handleChatSubmit} className="p-4 border-t">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  placeholder="Tapez votre message..."
                  className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:border-burgundy-500"
                />
                <button
                  type="submit"
                  className="bg-burgundy-700 hover:bg-burgundy-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>  
  );
}

export default App;