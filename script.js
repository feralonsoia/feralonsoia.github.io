const translations = {
  es: {
    navWork: "Proyectos", navAbout: "Sobre mí", navContact: "Contacto",
    eyebrow: "IA aplicada · Agentes · Producto",
    heroTitle: "Convierto ideas de IA en herramientas que la gente realmente puede usar.",
    heroLede: "Construyo agentes conversacionales, flujos con LLMs, sistemas de aprendizaje técnico y proyectos prácticos de machine learning, siempre con curiosidad, pruebas y atención a la persona que los va a usar.",
    seeWork: "Ver proyectos", tryEco: "Probar mi proyecto de ElevenLabs",
    selectedWorkEyebrow: "Proyectos seleccionados · 2024–2026", selectedWorkTitle: "Aprender construyendo.",
    selectedWorkIntro: "Proyectos donde fui más allá del curso, probé la idea y la hice funcionar en la práctica.",
    ecoTagline: "Un agente de atención por voz que puede razonar, proteger acciones sensibles y controlar la tienda.",
    ecoBody: "Diseñé Eco para atender pedidos, devoluciones, preguntas de productos, cambios de dirección y escalamiento a una persona. El proyecto combina un agente de voz de ElevenLabs, un workflow estructurado, verificación de identidad, conocimiento, herramientas, guardrails y una web que reacciona a las solicitudes habladas.",
    ecoPoint1: "Construí dos variantes de guardrails con división de tráfico 50/50.",
    ecoPoint2: "Detecté una activación incorrecta de verificación, corregí la condición de enrutamiento y agregué una prueba de regresión exitosa.",
    ecoPoint3: "Conecté comandos de voz con la navegación visual de productos en la tienda.",
    openLiveProject: "Abrir proyecto en vivo", ecoPrompt: "“Muéstrame los Nova Headphones.”",
    nimBody: "Una aplicación educativa que conserva el mismo flujo mientras cambia entre inferencia remota con NVIDIA NIM y Ollama local. Descubre herramientas MCP, valida llamadas, las ejecuta y devuelve el resultado al modelo.",
    caseStudyAvailable: "Caso de estudio disponible", bootcampBody: "Un paquete completo de aprendizaje sobre fundamentos de LLMs, inferencia, Nemotron/NIM/NeMo, tool calling, Messages API de Anthropic, MCP, preparación en Linux, seguridad de credenciales y ejercicios prácticos.",
    materialsAvailable: "Material disponible por solicitud", creditBody: "Un estudio de factibilidad y arquitectura de IPOC para aplicar transaction foundation models al credit scoring, incluyendo datos, métricas, MLOps, gobierno, riesgos, costos y criterios claros de no-go.",
    whitepaperAvailable: "White paper disponible por solicitud", gliomaBody: "Un proyecto de deep learning en Jupyter para segmentación de gliomas en imágenes de resonancia magnética T1, con preprocesamiento, entrenamiento y evaluación.",
    viewNotebook: "Ver notebook", aboutEyebrow: "Cómo trabajo", aboutTitle: "Curiosidad para explorar. Enfoque práctico para terminar.",
    aboutBody1: "Mi camino en IA ha sido muy práctico: tomar el concepto de un curso, abrir la herramienta, construir algo, romperlo, entender por qué y mejorarlo. Ese ciclo me ha enseñado más que simplemente seguir instrucciones.",
    aboutBody2: "Me interesa el punto donde la tecnología se encuentra con una persona real: hacer más seguro un agente de voz, ayudar a un modelo a usar la herramienta correcta o convertir un tema complejo en una clase útil.",
    principle1: "Empezar por el usuario, no por el modelo.", principle2: "Probar los casos límite incómodos.", principle3: "Explicar sistemas complejos de forma sencilla.", principle4: "Seguir aprendiendo en público.",
    contactEyebrow: "Construyamos algo útil", contactTitle: "Me interesan la IA aplicada, los agentes y los productos que se sienten humanos.",
    currentGithub: "GitHub actual", mlGithub: "Proyectos de ML", footerLine: "Construido con cursos, experimentos y mucha iteración."
  }
};

const englishText = new Map();
document.querySelectorAll("[data-i18n]").forEach((node) => englishText.set(node.dataset.i18n, node.textContent));

const toggle = document.querySelector("#languageToggle");
let language = localStorage.getItem("portfolio-language") || "en";

function setLanguage(nextLanguage) {
  language = nextLanguage;
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = language === "es" ? translations.es[key] : englishText.get(key);
  });
  toggle.textContent = language === "en" ? "ES" : "EN";
  toggle.setAttribute("aria-label", language === "en" ? "Cambiar a español" : "Switch to English");
  localStorage.setItem("portfolio-language", language);
}

toggle.addEventListener("click", () => setLanguage(language === "en" ? "es" : "en"));
setLanguage(language);

document.querySelector("#year").textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
