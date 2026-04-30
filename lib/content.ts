export type Lang = "en" | "es";

export const content = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      services: "Services",
      ventures: "Ventures",
      contact: "Contact"
    },
    hero: {
      badge: "CTO • AI Engineering • Cloud/Data Architecture",
      title: "I build technology, teams and AI solutions that scale business.",
      subtitle:
        "Technology leader with 15+ years of experience across LATAM, leading technology as CTO, VP-level leader and senior engineering executive in international environments.",
      primary: "Work with me",
      secondary: "View GitHub"
    },
    about: {
      kicker: "About",
      title: "CTO who combines strategy, technology and real business execution.",
      body:
        "I help companies scale engineering teams, implement AI capabilities and execute technology projects with real business impact. I have led teams as CTO, Tech Director, VP Engineering and Technology Lead across retail, healthcare, software and enterprise environments.",
      highlights: [
        "15+ years in CTO, VP-level and technology leadership roles",
        "Experience across Bolivia, Peru and Chile",
        "Collaboration with teams in India, Spain, Argentina, Colombia and Mexico",
        "Cloud/Data focus: GCP, Azure, BigQuery and ETL pipelines",
        "AI Engineering: RAG, LLMs, agents and automation",
        "Organizational design: Scrum, Kanban, SAFe, OKRs, UnFIX and PODs"
      ]
    },
    experience: {
      kicker: "Experience",
      title: "Experience across LATAM and global teams.",
      intro:
        "I’ve led engineering teams and delivered technology solutions across Bolivia, Peru and Chile, collaborating with distributed teams in India, Spain, Argentina, Colombia and Mexico.",
      items: [
        {
          role: "Chief Technology Officer",
          company: "Sapiens Digital Lab",
          period: "2025 — Present | Peru",
          points: [
            "Defined and executed technology and commercial strategy.",
            "Built AI-driven services and technology outsourcing models.",
            "Led growth, client acquisition and delivery quality.",
            "Scaled internal processes for operational efficiency."
          ]
        },
        {
          role: "Tech Director",
          company: "Globant",
          period: "2023 — 2024 | Peru",
          points: [
            "Led enterprise engineering teams across multiple clients.",
            "Delivered complex software projects aligned with business goals.",
            "Built technical-commercial proposals for new opportunities.",
            "Mentored Tech Leads to ensure engineering excellence."
          ]
        },
        {
          role: "VP Engineering",
          company: "Teamcore",
          period: "2022 — 2023 | Chile",
          points: [
            "Led multidisciplinary teams across Web, Mobile, BI and Agile.",
            "Scaled engineering organization for business growth.",
            "Implemented POD-based operating model and agile structures.",
            "Worked with international stakeholders, including FEMSA initiatives in Colombia and Mexico.",
            "Introduced AI tools and automation in development workflows."
          ]
        },
        {
          role: "Engineering Leadership",
          company: "Tottus / Belcorp / Auna",
          period: "2010 — 2022 | LATAM",
          points: [
            "Led digital transformation and e-commerce initiatives.",
            "Managed agile teams of 25+ engineers.",
            "Delivered integrations across Peru and Chile.",
            "Coordinated with distributed teams in India, Spain, Argentina and Colombia.",
            "Worked on cloud-based platforms using GCP, Azure and data-driven architectures."
          ]
        }
      ],
      achievements: [
        "Enterprise companies: Globant, Belcorp, Tottus, Auna",
        "Experience across Bolivia, Peru and Chile",
        "Global collaboration: India, Spain, Argentina, Colombia and Mexico",
        "Led teams of 20+ engineers",
        "Delivered e-commerce, cloud, data and enterprise platforms"
      ]
    },
    projects: {
      kicker: "Projects",
      title: "Selected technical projects.",
      intro:
        "A curated set of projects that show my current focus in AI Engineering, RAG, agents, automation and real-world systems.",
      items: [
        {
          name: "AI Multitasking Utility",
          tag: "AI Engineering",
          description:
            "AI system that processes user input and returns structured JSON outputs with actions, priority and confidence scoring."
        },
        {
          name: "RAG FAQ with Chroma",
          tag: "RAG / Embeddings",
          description:
            "Retrieval-Augmented Generation system using embeddings, semantic search and contextual answers over long FAQ content."
        },
        {
          name: "Scrum A2A Agents",
          tag: "AI Agents",
          description:
            "Multi-agent system simulating roles like CTO, Product Owner and Scrum Master for decision-making workflows."
        },
        {
          name: "Juicy Burger POS",
          tag: "Business System",
          description:
            "Operational POS concept for restaurant order management, inventory tracking and daily sales control."
        }
      ]
    },
    how: {
      kicker: "How I can help",
      title: "Technology leadership focused on execution.",
      items: [
        "Scale engineering teams across LATAM and global environments",
        "Implement AI solutions, RAG workflows, agents and automation",
        "Design cloud/data architectures using GCP, Azure, BigQuery and ETL pipelines",
        "Execute technology projects end-to-end with business impact"
      ]
    },
    services: {
      kicker: "Services",
      title: "Services",
      items: [
        {
          name: "Fractional CTO / VP-level Technology Leadership",
          description:
            "Strategic technology leadership for companies that need CTO/VP-level guidance, architecture, execution and team direction."
        },
        {
          name: "AI Solutions Consulting",
          description:
            "Design and implementation of AI workflows, RAG, LLM-based tools, automation and agentic systems."
        },
        {
          name: "Cloud & Data Architecture",
          description:
            "Architecture for GCP, Azure, BigQuery, ETL pipelines and scalable data platforms."
        },
        {
          name: "Solution Architecture",
          description:
            "Technical design for enterprise systems, integrations, platforms and modernization initiatives."
        },
        {
          name: "Engineering Operating Model",
          description:
            "Design of team structures, delivery models, agile practices, governance, Scrum, Kanban, PODs and OKRs."
        }
      ]
    },
    ventures: {
      kicker: "Ventures",
      title: "Ventures & business execution.",
      intro:
        "Beyond technology leadership, I have built and operated businesses in fitness, food and consumer products, applying systems, digital tools and execution discipline.",
      items: [
        {
          name: "Baruj Equipetrol",
          logo: "/images/baruj-logo.png",
          role: "Partner",
          metric: "Active fitness community and HYROX-style training positioning",
          summary:
            "Fitness training club focused on hybrid training, HYROX-style preparation and community growth.",
          did: [
            "Supported positioning and growth initiatives.",
            "Applied digital tools for reservations and community management.",
            "Contributed to business execution and operational improvement."
          ],
          impact: [
            "Improved digital presence and community engagement.",
            "Strengthened the business around training experience and member retention."
          ]
        },
        {
          name: "Juicy Burger",
          logo: "/images/juicy-logo.png",
          role: "Co-owner",
          metric: "Real-world food operation with systems for sales and inventory control",
          summary:
            "Food business with real-world operations focused on burgers, fast service and internal process control.",
          did: [
            "Designed operational improvements for daily sales and production.",
            "Worked on POS and inventory tracking concepts.",
            "Applied systems thinking to improve control and scalability."
          ],
          impact: [
            "Better visibility of daily operations.",
            "Improved control of sales, stock and production planning."
          ]
        },
        {
          name: "HidraJamaica",
          logo: "/images/hidra-logo.png",
          role: "Founder / Brand Builder",
          metric: "Natural hydration product created for athletes and fitness communities",
          summary:
            "Natural hibiscus-based drink brand for athletes and active people.",
          did: [
            "Developed product positioning and brand concept.",
            "Designed go-to-market messaging for the fitness segment.",
            "Built a product story around natural hydration and recovery."
          ],
          impact: [
            "Created a differentiated consumer product for athletes.",
            "Connected product, brand and fitness community."
          ]
        },
        {
          name: "Invictus SCZ",
          logo: "/images/invictus-logo.png",
          role: "Ex-Founder",
          metric: "Fitness business built from zero and successfully transitioned",
          summary:
            "Fitness brand and training center launched from scratch in Santa Cruz, Bolivia.",
          did: [
            "Created and launched the brand using AI-assisted naming, colors and positioning.",
            "Built the initial community and operating concept.",
            "Successfully transitioned ownership."
          ],
          impact: [
            "Built a real fitness business from zero to operations.",
            "Demonstrated execution across branding, community and operations."
          ]
        }
      ]
    },
    skills: {
      kicker: "Skills",
      title: "Core capabilities.",
      groups: [
        {
          name: "Leadership",
          skills: ["Engineering Management", "Team Scaling", "Stakeholder Management", "Mentoring"]
        },
        {
          name: "AI Engineering",
          skills: ["RAG", "LLMs", "Agents", "Prompt Engineering", "Automation"]
        },
        {
          name: "Cloud & Data",
          skills: ["GCP", "Azure", "BigQuery", "ETL Pipelines", "Data Architecture"]
        },
        {
          name: "Software Engineering",
          skills: ["Python", "Node.js", "SQL", "APIs", "System Design"]
        },
        {
          name: "Agile & Organizational Design",
          skills: ["Scrum", "Kanban", "SAFe", "OKRs", "UnFIX", "PODs / Squads"]
        }
      ]
    },
    testimonials: {
      kicker: "Testimonials",
      title: "Recommendations.",
      items: [
        {
          quote:
            "Strategic leader with strong execution focus and results orientation.",
          detail:
            "His strategic vision was key to achieving effective agile adoption and successful integration work with the team.",
          author: "Sebastián Ortega",
          role: "MBA | Project Manager | PMO | Scrum Master"
        },
        {
          quote:
            "Strong business understanding and co-creation mindset.",
          detail:
            "He understood the business needs, led his team effectively and helped accelerate technology projects through collaboration.",
          author: "Carlos Rivero",
          role: "Operations & Supply Chain Leader"
        },
        {
          quote:
            "Structure, prioritization and human leadership.",
          detail:
            "He brings clarity and confidence to the team without losing the human side of leadership.",
          author: "Renzo Frassinelli",
          role: "Tech Director"
        },
        {
          quote:
            "Team leadership, tech curiosity and business awareness.",
          detail:
            "His leadership and business awareness helped make a complex website implementation happen.",
          author: "Javier Briceño",
          role: "Projects & Operations"
        },
        {
          quote:
            "Drives team growth, maturity and culture.",
          detail:
            "He supports teams with technical expertise while helping people grow and build a stronger culture.",
          author: "Kelly Gabriela Salgado",
          role: "Scrum Master | Coach | Mentor"
        }
      ]
    },
    contact: {
      kicker: "Contact",
      title: "Let’s build something valuable.",
      body:
        "Open to international roles as CTO, VP of Technology or strategic technology leadership, driving AI initiatives, cloud/data architecture and engineering execution at scale.",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
      whatsapp: "WhatsApp"
    }
  },
  es: {
    nav: {
      about: "Sobre mí",
      experience: "Experiencia",
      projects: "Proyectos",
      services: "Servicios",
      ventures: "Ventures",
      contact: "Contacto"
    },
    hero: {
      badge: "CTO • AI Engineering • Arquitectura Cloud/Data",
      title: "Construyo tecnología, equipos y soluciones de IA que escalan negocios.",
      subtitle:
        "Líder tecnológico con +15 años de experiencia en LATAM, liderando tecnología como CTO, VP de Tecnología y roles senior de ingeniería en entornos internacionales.",
      primary: "Trabajemos juntos",
      secondary: "Ver GitHub"
    },
    about: {
      kicker: "Sobre mí",
      title: "CTO que combina estrategia, tecnología y ejecución real de negocio.",
      body:
        "Ayudo a empresas a escalar equipos de ingeniería, implementar capacidades de IA y ejecutar proyectos tecnológicos con impacto real de negocio. He liderado equipos como CTO, Tech Director, VP Engineering y Technology Lead en retail, salud, software y entornos enterprise.",
      highlights: [
        "+15 años en roles CTO, VP-level y liderazgo tecnológico",
        "Experiencia en Bolivia, Perú y Chile",
        "Colaboración con equipos en India, España, Argentina, Colombia y México",
        "Cloud/Data: GCP, Azure, BigQuery y pipelines ETL",
        "AI Engineering: RAG, LLMs, agentes y automatización",
        "Diseño organizacional: Scrum, Kanban, SAFe, OKRs, UnFIX y PODs"
      ]
    },
    experience: {
      kicker: "Experiencia",
      title: "Experiencia en LATAM y equipos globales.",
      intro:
        "He liderado equipos de ingeniería y soluciones tecnológicas en Bolivia, Perú y Chile, colaborando con equipos distribuidos en India, España, Argentina, Colombia y México.",
      items: [
        {
          role: "Chief Technology Officer",
          company: "Sapiens Digital Lab",
          period: "2025 — Actualidad | Perú",
          points: [
            "Definición y ejecución de estrategia tecnológica y comercial.",
            "Construcción de servicios basados en IA y modelos de outsourcing tecnológico.",
            "Liderazgo de crecimiento, adquisición de clientes y calidad de entrega.",
            "Escalamiento de procesos internos para eficiencia operativa."
          ]
        },
        {
          role: "Tech Director",
          company: "Globant",
          period: "2023 — 2024 | Perú",
          points: [
            "Liderazgo de equipos enterprise en múltiples clientes.",
            "Entrega de proyectos complejos alineados a objetivos de negocio.",
            "Elaboración de propuestas técnico-comerciales.",
            "Mentoring a Tech Leads para asegurar excelencia técnica."
          ]
        },
        {
          role: "VP Engineering",
          company: "Teamcore",
          period: "2022 — 2023 | Chile",
          points: [
            "Liderazgo de equipos multidisciplinarios Web, Mobile, BI y Agile.",
            "Escalamiento de la organización de ingeniería.",
            "Implementación de modelo operativo basado en PODs.",
            "Trabajo con stakeholders internacionales, incluyendo iniciativas con FEMSA en Colombia y México.",
            "Introducción de herramientas de IA y automatización."
          ]
        },
        {
          role: "Engineering Leadership",
          company: "Tottus / Belcorp / Auna",
          period: "2010 — 2022 | LATAM",
          points: [
            "Liderazgo de transformación digital e iniciativas e-commerce.",
            "Gestión de equipos ágiles de 25+ ingenieros.",
            "Entrega de integraciones en Perú y Chile.",
            "Coordinación con equipos distribuidos en India, España, Argentina y Colombia.",
            "Trabajo en plataformas cloud usando GCP, Azure y arquitecturas data-driven."
          ]
        }
      ],
      achievements: [
        "Empresas enterprise: Globant, Belcorp, Tottus, Auna",
        "Experiencia en Bolivia, Perú y Chile",
        "Colaboración global: India, España, Argentina, Colombia y México",
        "Liderazgo de equipos de 20+ ingenieros",
        "Entrega de plataformas e-commerce, cloud, data y enterprise"
      ]
    },
    projects: {
      kicker: "Proyectos",
      title: "Proyectos técnicos seleccionados.",
      intro:
        "Una selección de proyectos que muestran mi foco actual en AI Engineering, RAG, agentes, automatización y sistemas reales.",
      items: [
        {
          name: "AI Multitasking Utility",
          tag: "AI Engineering",
          description:
            "Sistema de IA que procesa entradas de usuario y devuelve salidas JSON estructuradas con acciones, prioridad y confidence scoring."
        },
        {
          name: "RAG FAQ with Chroma",
          tag: "RAG / Embeddings",
          description:
            "Sistema RAG usando embeddings, búsqueda semántica y respuestas contextuales sobre contenido FAQ extenso."
        },
        {
          name: "Scrum A2A Agents",
          tag: "AI Agents",
          description:
            "Sistema multiagente que simula roles como CTO, Product Owner y Scrum Master para flujos de decisión."
        },
        {
          name: "Juicy Burger POS",
          tag: "Sistema de negocio",
          description:
            "Concepto de POS operativo para gestión de pedidos, inventario y control de ventas diarias."
        }
      ]
    },
    how: {
      kicker: "Cómo puedo ayudar",
      title: "Liderazgo tecnológico enfocado en ejecución.",
      items: [
        "Escalar equipos de ingeniería en LATAM y entornos globales",
        "Implementar soluciones de IA, RAG, agentes y automatización",
        "Diseñar arquitecturas cloud/data usando GCP, Azure, BigQuery y pipelines ETL",
        "Ejecutar proyectos tecnológicos end-to-end con impacto de negocio"
      ]
    },
    services: {
      kicker: "Servicios",
      title: "Servicios",
      items: [
        {
          name: "Fractional CTO / Liderazgo tecnológico VP-level",
          description:
            "Liderazgo tecnológico estratégico para empresas que necesitan guía CTO/VP-level, arquitectura, ejecución y dirección de equipos."
        },
        {
          name: "AI Solutions Consulting",
          description:
            "Diseño e implementación de workflows de IA, RAG, herramientas con LLMs, automatización y agentes."
        },
        {
          name: "Cloud & Data Architecture",
          description:
            "Arquitectura para GCP, Azure, BigQuery, pipelines ETL y plataformas de datos escalables."
        },
        {
          name: "Solution Architecture",
          description:
            "Diseño técnico para sistemas enterprise, integraciones, plataformas e iniciativas de modernización."
        },
        {
          name: "Engineering Operating Model",
          description:
            "Diseño de estructuras de equipo, modelos de delivery, prácticas ágiles, gobernanza, Scrum, Kanban, PODs y OKRs."
        }
      ]
    },
    ventures: {
      kicker: "Ventures",
      title: "Ventures y ejecución de negocio.",
      intro:
        "Además del liderazgo tecnológico, he construido y operado negocios en fitness, alimentos y productos de consumo, aplicando sistemas, herramientas digitales y disciplina de ejecución.",
      items: [
        {
          name: "Baruj Equipetrol",
          logo: "/images/baruj-logo.png",
          role: "Socio",
          metric: "Comunidad fitness activa y posicionamiento en entrenamiento tipo HYROX",
          summary:
            "Training club enfocado en entrenamiento híbrido, preparación tipo HYROX y crecimiento de comunidad.",
          did: [
            "Apoyo en posicionamiento y crecimiento.",
            "Aplicación de herramientas digitales para reservas y gestión de comunidad.",
            "Contribución a ejecución de negocio y mejora operativa."
          ],
          impact: [
            "Mejora de presencia digital y engagement de comunidad.",
            "Fortalecimiento del negocio alrededor de experiencia de entrenamiento y retención."
          ]
        },
        {
          name: "Juicy Burger",
          logo: "/images/juicy-logo.png",
          role: "Copropietario",
          metric: "Operación gastronómica real con sistemas para ventas e inventario",
          summary:
            "Negocio gastronómico con operación real enfocado en hamburguesas, servicio rápido y control interno.",
          did: [
            "Diseño de mejoras operativas para ventas y producción diaria.",
            "Trabajo en conceptos de POS y control de inventario.",
            "Aplicación de pensamiento sistémico para mejorar control y escalabilidad."
          ],
          impact: [
            "Mejor visibilidad de la operación diaria.",
            "Mejor control de ventas, stock y planificación de producción."
          ]
        },
        {
          name: "HidraJamaica",
          logo: "/images/hidra-logo.png",
          role: "Fundador / Brand Builder",
          metric: "Producto natural de hidratación creado para atletas y comunidad fitness",
          summary:
            "Marca de bebida natural a base de flor de jamaica para atletas y personas activas.",
          did: [
            "Desarrollo del posicionamiento y concepto de marca.",
            "Diseño de mensajes de go-to-market para el segmento fitness.",
            "Construcción de historia de producto alrededor de hidratación natural y recuperación."
          ],
          impact: [
            "Creación de producto diferenciado para atletas.",
            "Conexión entre producto, marca y comunidad fitness."
          ]
        },
        {
          name: "Invictus SCZ",
          logo: "/images/invictus-logo.png",
          role: "Ex-Fundador",
          metric: "Negocio fitness construido desde cero y transferido exitosamente",
          summary:
            "Marca fitness y centro de entrenamiento lanzado desde cero en Santa Cruz, Bolivia.",
          did: [
            "Creación y lanzamiento de marca usando IA para naming, colores y posicionamiento.",
            "Construcción de comunidad inicial y concepto operativo.",
            "Transferencia exitosa de propiedad."
          ],
          impact: [
            "Construcción de negocio fitness real desde cero.",
            "Ejecución en branding, comunidad y operación."
          ]
        }
      ]
    },
    skills: {
      kicker: "Habilidades",
      title: "Capacidades principales.",
      groups: [
        {
          name: "Leadership",
          skills: ["Engineering Management", "Team Scaling", "Stakeholder Management", "Mentoring"]
        },
        {
          name: "AI Engineering",
          skills: ["RAG", "LLMs", "Agents", "Prompt Engineering", "Automation"]
        },
        {
          name: "Cloud & Data",
          skills: ["GCP", "Azure", "BigQuery", "ETL Pipelines", "Data Architecture"]
        },
        {
          name: "Software Engineering",
          skills: ["Python", "Node.js", "SQL", "APIs", "System Design"]
        },
        {
          name: "Agile & Organizational Design",
          skills: ["Scrum", "Kanban", "SAFe", "OKRs", "UnFIX", "PODs / Squads"]
        }
      ]
    },
    testimonials: {
      kicker: "Testimonios",
      title: "Recomendaciones.",
      items: [
        {
          quote:
            "Líder estratégico con fuerte foco en ejecución y resultados.",
          detail:
            "Su visión fue clave para lograr una adopción ágil efectiva y una integración exitosa con el equipo.",
          author: "Sebastián Ortega",
          role: "MBA | Project Manager | PMO | Scrum Master"
        },
        {
          quote:
            "Entendimiento de negocio y mentalidad de co-creación.",
          detail:
            "Entendió las necesidades del negocio, lideró a su equipo y ayudó a acelerar proyectos tecnológicos colaborando con distintas áreas.",
          author: "Carlos Rivero",
          role: "Líder de Operaciones & Supply Chain"
        },
        {
          quote:
            "Estructura, priorización y liderazgo humano.",
          detail:
            "Aporta claridad y confianza al equipo sin perder el trato humano que necesita un buen liderazgo.",
          author: "Renzo Frassinelli",
          role: "Tech Director"
        },
        {
          quote:
            "Liderazgo, curiosidad tecnológica y visión de negocio.",
          detail:
            "Su manejo del estrés, liderazgo y visión ayudaron a concretar una implementación compleja.",
          author: "Javier Briceño",
          role: "Projects & Operations"
        },
        {
          quote:
            "Impulsa crecimiento, madurez y cultura de equipos.",
          detail:
            "Acompaña con gran expertise técnico y calidad humana, ayudando a que los equipos crezcan y maduren.",
          author: "Kelly Gabriela Salgado",
          role: "Scrum Master | Coach | Mentora"
        }
      ]
    },
    contact: {
      kicker: "Contacto",
      title: "Construyamos algo valioso.",
      body:
        "Abierto a roles internacionales como CTO, VP de Tecnología o liderazgo estratégico, impulsando iniciativas de IA, arquitectura cloud/data y ejecución de ingeniería a escala.",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
      whatsapp: "WhatsApp"
    }
  }
} as const;
