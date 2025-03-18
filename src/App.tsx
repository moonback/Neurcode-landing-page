import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Zap, Star, Users, Github, Twitter, Linkedin, CheckCircle2, Sparkles, Cpu } from 'lucide-react';

function App() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const features = [
    {
      icon: <Code className="w-12 h-12 text-cyan-400 mb-4" />,
      title: "Assistance Intelligente",
      description: "Suggestions de code contextuelles et correction d'erreurs en temps réel."
    },
    {
      icon: <Zap className="w-12 h-12 text-cyan-400 mb-4" />,
      title: "Développement Rapide",
      description: "Automatisation des tâches répétitives et génération de code optimisé."
    },
    {
      icon: <Users className="w-12 h-12 text-cyan-400 mb-4" />,
      title: "Collaboration",
      description: "Travaillez en équipe avec une IA qui comprend votre contexte projet."
    }
  ];

  const stats = [
    { number: "40%", label: "Gain de productivité" },
    { number: "1000+", label: "Développeurs actifs" },
    { number: "24/7", label: "Support IA" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Header avec effet de verre */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-gray-900/50 border-b border-white/10">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Brain className="w-8 h-8 text-cyan-400" />
              </motion.div>
              <span className="text-2xl font-bold">NeuroCode</span>
            </div>
            <div className="flex gap-6 items-center">
              <a href="#features" className="hover:text-cyan-400 transition-colors">Features</a>
              <a href="#demo" className="hover:text-cyan-400 transition-colors">Demo</a>
              <a href="#testimonials" className="hover:text-cyan-400 transition-colors">Témoignages</a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-cyan-400 text-gray-900 px-6 py-2 rounded-lg font-semibold"
              >
                Essayer
              </motion.button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section avec animation */}
      <section className="pt-32 pb-20 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <div className="bg-cyan-400/20 backdrop-blur-xl rounded-full px-6 py-2 text-cyan-400">
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Nouvelle Version 2.0 Disponible
              </span>
            </div>
          </motion.div>
          
          <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 text-transparent bg-clip-text">
            L'IA qui code avec vous 
            <span className="inline-block ml-2">💡</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Boostez votre productivité avec NeuroCode - Un assistant IA avancé qui comprend votre code, 
            suggère des solutions intelligentes et accélère votre développement web.
          </p>
          
          <div className="flex gap-4 justify-center mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-400 to-blue-500 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg"
            >
              Essayez gratuitement maintenant ! 🚀
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-lg px-8 py-4 rounded-lg font-bold text-lg border border-white/20"
            >
              Voir la démo ▶️
            </motion.button>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6"
              >
                <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Features avec animation */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <motion.h2 
            {...fadeInUp}
            className="text-4xl font-bold text-center mb-4"
          >
            Fonctionnalités Principales
          </motion.h2>
          <motion.p 
            {...fadeInUp}
            className="text-xl text-gray-300 text-center mb-12 max-w-2xl mx-auto"
          >
            Découvrez comment NeuroCode transforme votre façon de coder
          </motion.p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/10"
              >
                {feature.icon}
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 px-4 bg-gradient-to-b from-transparent to-gray-900/50">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h2 className="text-4xl font-bold mb-6">Voyez NeuroCode en action</h2>
                <p className="text-xl text-gray-300 mb-8">
                  Une interface intuitive qui s'adapte à votre style de code et anticipe vos besoins.
                </p>
                <ul className="space-y-4">
                  {[
                    "Suggestions de code intelligentes",
                    "Correction d'erreurs en temps réel",
                    "Génération de tests automatisés",
                    "Documentation automatique"
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="flex-1">
                <div className="bg-gray-900 rounded-xl p-4 border border-white/10">
                  <div className="flex gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <pre className="text-sm font-mono">
                    <code className="text-cyan-400">// NeuroCode suggestion</code>
                    <br />
                    <code className="text-white">function calculateTotal(items) {'{'}</code>
                    <br />
                    <code className="text-purple-400">  return</code>
                    <code className="text-white"> items.reduce(</code>
                    <br />
                    <code className="text-white">    (sum, item) =&gt; sum + item.price,</code>
                    <br />
                    <code className="text-white">    0</code>
                    <br />
                    <code className="text-white">  );</code>
                    <br />
                    <code className="text-white">{'}'}</code>
                  </pre>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials avec animation */}
      <section id="testimonials" className="py-20 px-4">
        <div className="container mx-auto">
          <motion.h2 
            {...fadeInUp}
            className="text-4xl font-bold text-center mb-12"
          >
            Ce que disent nos utilisateurs
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop"
                  alt="User"
                  className="w-16 h-16 rounded-full ring-2 ring-cyan-400"
                />
                <div>
                  <h4 className="font-bold text-xl">Thomas Laurent</h4>
                  <p className="text-gray-400">Lead Developer @ TechCorp</p>
                </div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                "NeuroCode a révolutionné notre façon de coder. La productivité de l'équipe a augmenté de 40% ! 
                Les suggestions sont incroyablement pertinentes et nous font gagner un temps précieux."
              </p>
              <div className="flex gap-1 mt-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-current text-yellow-400" />
                ))}
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
                  alt="User"
                  className="w-16 h-16 rounded-full ring-2 ring-cyan-400"
                />
                <div>
                  <h4 className="font-bold text-xl">Sophie Martin</h4>
                  <p className="text-gray-400">Freelance Developer</p>
                </div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                "Un outil indispensable pour tout développeur moderne. Les suggestions sont pertinentes 
                et le code généré est propre. Je ne peux plus m'en passer !"
              </p>
              <div className="flex gap-1 mt-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-current text-yellow-400" />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA amélioré */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="container mx-auto bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-lg rounded-2xl p-12 border border-white/10"
        >
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="w-20 h-20 mx-auto mb-8 rounded-full bg-cyan-400/20 flex items-center justify-center"
            >
              <Cpu className="w-10 h-10 text-cyan-400" />
            </motion.div>
            
            <h2 className="text-4xl font-bold mb-6">
              Prêt à révolutionner votre développement ?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Rejoignez plus de 1000 développeurs qui utilisent déjà NeuroCode et 
              transformez votre façon de coder.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-400 to-blue-500 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg"
            >
              Commencer maintenant 🎯
            </motion.button>
            
            <p className="mt-4 text-gray-400">
              Essai gratuit de 14 jours • Pas de carte de crédit requise
            </p>
          </div>
        </motion.div>
      </section>

      {/* Footer amélioré */}
      <footer className="container mx-auto px-4 py-12 border-t border-white/10">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Brain className="w-6 h-6 text-cyan-400" />
              <span className="font-bold">NeuroCode</span>
            </div>
            <p className="text-gray-400">
              L'assistant IA qui révolutionne le développement web.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Produit</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-cyan-400">Features</a></li>
              <li><a href="#" className="hover:text-cyan-400">Pricing</a></li>
              <li><a href="#" className="hover:text-cyan-400">Documentation</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Ressources</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-cyan-400">Blog</a></li>
              <li><a href="#" className="hover:text-cyan-400">Tutoriels</a></li>
              <li><a href="#" className="hover:text-cyan-400">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Suivez-nous</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-cyan-400 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400">
          <p>© 2024 NeuroCode. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
