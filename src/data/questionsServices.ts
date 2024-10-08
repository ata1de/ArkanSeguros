// src/data/questionsServices.js

export type Question = {
    question: string;
    answer: string;
};

export type ServiceQuestions = {
    name: string;
    image: string;
    questions: Question[];
};

export const questionsServices: ServiceQuestions[] = [
    {
        name: "plano-odontologico",
        image: "/questionsServices/plano-odontologico2.jpg",
        questions: [
            {
                question: "Quais tratamentos estão inclusos?",
                answer: "O Plano Odontológico inclui consultas, tratamentos preventivos, ortodontia e muito mais."
            },
            {
                question: "Posso escolher meu dentista?",   
                answer: "Sim, contamos com uma rede ampla de dentistas credenciados em todo o país."
            },
            {
                question: "Cobre tratamentos de emergência?",
                answer: "Sim, o plano oferece cobertura para tratamentos de emergência."
            }
        ]
    },
    {
        name: "plano-de-saude",
        image: "/questionsServices/plano-de-saude.jpg",
        questions: [
            {
                question: "Quais hospitais são cobertos em Recife?",
                answer: "Nosso plano cobre os melhores hospitais e profissionais de saúde em todo o país."
            },
            {
                question: "Posso personalizar meu plano?",
                answer: "Sim, nossos planos são flexíveis e podem ser personalizados conforme suas necessidades."
            },
            {
                question: "O plano cobre exames especializados?",
                answer: "Sim, o plano inclui cobertura para consultas, exames, internações e tratamentos especializados."
            }
        ]
    },
    {
        name: "seguros-automotivos",
        image: "/questionsServices/seguro-automotivo.jpg",
        questions: [
            {
                question: "Quais coberturas são incluídas?",
                answer: "Nosso seguro cobre roubo, acidentes e outros imprevistos, além de oferecer assistência 24 horas."
            },
            {
                question: "O seguro oferece serviços de guincho?",
                answer: "Sim, oferecemos serviços de guincho e carro reserva para que você nunca fique na mão."
            },
            {
                question: "Quais são as oficinas credenciadas?",
                answer: "Temos uma rede de oficinas credenciadas para garantir reparos rápidos e eficientes."
            }
        ]
    },
    {
        name: "protecao-veicular",
        image: "/questionsServices/protecao-veicular.jpg",
        questions: [
            {
                question: "Quais são os benefícios?",
                answer: "Oferecemos cobertura acessível contra danos, roubos e sinistros, além de assistência 24 horas."
            },
            {
                question: "A proteção cobre enchentes?",
                answer: "Sim, nossa proteção inclui cobertura contra enchentes e colisões."
            },
            {
                question: "Posso ajustar conforme minhas necessidades?",
                answer: "Sim, oferecemos planos flexíveis que se ajustam ao seu perfil e necessidades específicas."
            }
        ]
    },
    {
        name: "seguros-equipamentos-maquinas",
        image: "/questionsServices/seguros-equipamentos-maquinas.jpg",
        questions: [
            {
                question: "Quais tipos de equipamentos estão cobertos?",
                answer: "Nossos seguros cobrem uma variedade de equipamentos e máquinas essenciais para o seu negócio."
            },
            {
                question: "O seguro cobre paralisação de atividades?",
                answer: "Sim, garantimos cobertura contra danos, roubo e paralisação de atividades."
            },
            {
                question: "Como escolher o plano ideal para meu negócio?",
                answer: "Nossa equipe especializada pode orientar você na escolha do plano que melhor atende às suas necessidades."
            }
        ]
    },
    {
        name: "seguro-de-vida",
        image: "/questionsServices/seguro-de-vida.jpg",
        questions: [
            {
                question: "Quais coberturas são oferecidas",
                answer: "O seguro de vida oferece proteção financeira para sua família, com planos flexíveis que se adaptam às suas necessidades."
            },
            {
                question: "O seguro de vida inclui assistência imediata?",
                answer: "Sim, oferecemos assistência imediata e apoio em situações de emergência."
            },
            {
                question: "Como escolher a cobertura ideal?",
                answer: "Nossa equipe pode ajudar você a escolher a cobertura que melhor se adapta às suas necessidades."
            }
        ]
    },
    {
        name: "seguros-prediais",
        image: "/questionsServices/seguros-prediais.jpg",
        questions: [
            {
                question: "Quais riscos estão cobertos?",
                answer: "Os seguros prediais cobrem riscos como incêndios, roubos e desastres naturais."
            },
            {
                question: "Posso personalizar o plano?",
                answer: "Sim, oferecemos planos personalizados que atendem às necessidades específicas de cada cliente."
            },
            {
                question: "O seguro cobre imóveis comerciais?",
                answer: "Sim, nossos seguros prediais cobrem tanto imóveis residenciais quanto comerciais."
            }
        ]
    },
    {
        name: "certificados-digitais",
        image: "/questionsServices/certificado-digital.jpg",
        questions: [
            {
                question: "O que são Certificados Digitais?",
                answer: "Certificados Digitais garantem a segurança das suas transações eletrônicas através de autenticação e criptografia de dados."
            },
            {
                question: "Quais são os benefícios?",
                answer: "Oferecemos um ambiente digital mais seguro, protegendo suas informações contra acessos não autorizados."
            },
            {
                question: "Como adquirir?",
                answer: "Nossa equipe pode orientar você no processo de aquisição de certificados digitais, adequados para empresas e indivíduos."
            }
        ]
    }
];
