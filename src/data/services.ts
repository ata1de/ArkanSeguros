// src/data/services.js

export interface Services {
    name: string;
    title: string;
    titleHero: string;
    subtitleHero: string;
    url_bg: string;
    icon: string;
    description: string;
}

export const services = [
    {
        name: "plano-odontologico",
        title: "Plano Odontológico",
        titleHero: "Cuidando do seu sorriso",
        subtitleHero: "Conte conosco para cuidar do seu sorriso.",
        url_bg: "/services/plano-odontologico-bg.png",
        icon: "/icons/icon_teeth.svg",
        description: `
            O serviço de seguro odontológico é um plano de saúde especializado na cobertura de tratamentos dentários, oferecendo aos beneficiários uma ampla gama de atendimentos, desde consultas de rotina até procedimentos complexos.Com um seguro odontológico, é possível agendar consultas e realizar tratamentos em dentistas e clínicas credenciadas, proporcionando <strong>acesso a cuidados dentários de qualidade com custos mais acessíveis</strong>.\n\n O plano cobre consultas de rotina, tratamentos preventivos, restaurações, procedimentos estéticos, atendimentos de urgência e cirurgias orais menores.As operadoras <strong>Amil Dental, Bradesco Dental, OdontoPrev, SulAmérica Odonto e Porto Seguro Odonto</strong> oferecem planos que atendem diversas necessidades, garantindo uma rede ampla de profissionais e clínicas credenciadas.É importante verificar as coberturas específicas de cada plano, os períodos de carência e a possibilidade de reembolso para atendimentos fora da rede credenciada.\n\n Com um seguro odontológico, os beneficiários têm a garantia de <strong>saúde bucal e prevenção de problemas mais graves</strong>, tudo com a comodidade e segurança de um plano de saúde especializado.
`
    },
    {
        name: "plano-de-saude",
        title: "Plano de Saúde",
        titleHero: "Saúde em primeiro lugar",
        subtitleHero: "Conte conosco para manter sua saúde em dia.",
        url_bg: "/services/plano-de-saude-bg.jpg",
        icon: "/icons/icon_health.svg",
        description: `
        O plano de saúde oferece uma ampla gama de benefícios para cuidar da sua saúde e bem-estar. Com cobertura abrangente, você pode contar com <strong>consultas, exames, internações e tratamentos especializados</strong>.Nosso plano é flexível e pode ser personalizado conforme suas necessidades específicas, garantindo acesso aos melhores hospitais e profissionais de saúde.\n\n Oferecemos <strong>assistência imediata em emergências</strong> e apoio contínuo para que você possa viver com tranquilidade. A saúde é o bem mais valioso, e nosso compromisso é proporcionar o suporte necessário para <strong>manter sua saúde em dia</strong>, independentemente das circunstâncias. As operadoras <strong>Amil, Bradesco Saúde, Unimed, SulAmérica Saúde e Golden Cross</strong> estão entre as opções disponíveis, oferecendo uma rede ampla e confiável para cuidar da sua saúde.\n\n Conte com o nosso plano de saúde para garantir cuidados preventivos e intervenções médicas quando necessário, sempre com a segurança e confiança que você merece.
        `
    },
    {
        name: "seguros-automotivos",
        title: "Seguros Automotivos",
        titleHero: "Proteção para seu veículo",
        subtitleHero: "Conte conosco para proteger seu veículo.",
        url_bg: "/services/seguros-automotivo-bg.jpg",
        icon: "/icons/icon_driver.svg",
        description: `
            Nossos seguros automotivos garantem a proteção do seu veículo contra roubo, acidentes e outros imprevistos. Com cobertura abrangente, você dirige com mais tranquilidade e segurança.\n\n Oferecemos <strong>assistência 24 horas, serviços de guincho e carro reserva</strong>, para que você nunca fique na mão. Além disso, temos uma rede de oficinas credenciadas para garantir reparos rápidos e eficientes. Proteja seu patrimônio com um seguro automotivo que proporciona segurança contra diversos riscos do dia a dia.\n\n As seguradoras <strong>Porto Seguro, Bradesco Seguros, SulAmérica Seguros, Tokio Marine e HDI Seguros</strong> oferecem planos adaptáveis às suas necessidades, garantindo uma cobertura completa e confiável para seu veículo. Dirija com tranquilidade sabendo que seu carro está protegido por uma das principais seguradoras do mercado.\n\n Conte com nosso seguro automotivo para manter seu veículo protegido em qualquer situação.
`
    },
    {
        name: "protecao-veicular",
        title: "Proteção Veicular",
        titleHero: "Seu carro sempre protegido",
        subtitleHero: "Conte conosco para proteger seu carro.",
        url_bg: "/services/seguro-veicular-bg.jpg",
        icon: "/icons/icon_car.svg",
        description: `
            Proteja seu veículo com nossa proteção veicular completa e acessível. Estamos aqui para oferecer a segurança que seu carro merece contra danos, roubos e sinistros. Com <strong>assistência 24 horas</strong> e coberturas adicionais como proteção contra enchentes e colisões, garantimos que você dirija com tranquilidade.\n\n Nossos planos flexíveis se adaptam ao seu perfil e necessidades específicas, proporcionando a cobertura ideal para seu patrimônio. Contamos com uma rede de oficinas credenciadas e serviços de guincho para garantir reparos rápidos e eficientes. As seguradoras <strong>Porto Seguro, Mapfre Seguros, Tokio Marine, HDI Seguros e SulAmérica Seguros</strong> oferecem opções confiáveis e abrangentes, garantindo a proteção completa do seu veículo em qualquer situação.\n\n Não deixe seu patrimônio desprotegido. Garanta agora mesmo nossa proteção veicular e tenha a tranquilidade de saber que seu carro está seguro contra os imprevistos do dia a dia.
            `
    },
    {
        name: "seguros-equipamentos-maquinas",
        title: "Seguros de Máquinas",
        titleHero: "Proteção para seus ativos",
        subtitleHero: "Conte conosco para proteger seus equipamentos.",
        url_bg: "/services/seguros-equipamentos-maquinas-bg.png",
        icon: "/icons/icon_machine.svg",
        description: `
            Proteja seus equipamentos e máquinas com nosso seguro especializado, oferecendo cobertura abrangente contra danos, roubo e paralisação de atividades. Estamos aqui para garantir que seu negócio continue operando sem interrupções, mesmo diante de imprevistos.\n\n Nossos planos são personalizados para atender às necessidades específicas do seu negócio, proporcionando segurança e suporte em momentos críticos. Contamos com uma equipe especializada que entende as particularidades do seu setor e está pronta para oferecer soluções eficientes.\n\n As seguradoras <strong>Porto Seguro, Tokio Marine, Bradesco Seguros, Mapfre Seguros e SulAmérica Seguros</strong> oferecem opções confiáveis e adaptáveis, garantindo que seus equipamentos estejam protegidos contra diversos riscos.\n\n Não deixe seus ativos valiosos desprotegidos. Invista na segurança do seu negócio com nosso seguro de máquinas e tenha a tranquilidade de saber que sua produção está segura e protegida, independentemente dos desafios que possam surgir.
`
    },
    {
        name: "seguro-de-vida",
        title: "Seguro de Vida",
        titleHero: "Tranquilidade para você e sua família",
        subtitleHero: "Conte conosco para proteger sua família.",
        url_bg: "/services/seguro-de-vida-bg.jpg",
        icon: "/icons/icon_life.svg",
        description: `
            Garanta a segurança e a tranquilidade de sua família com nosso seguro de vida, oferecendo proteção financeira em momentos de imprevistos. Nosso seguro de vida é desenhado para proporcionar a paz de espírito que você e seus entes queridos merecem, cobrindo desde despesas médicas até apoio financeiro em caso de falecimento.\n\n Com nossos planos flexíveis, você pode escolher a cobertura que melhor se adapta às suas necessidades, garantindo que sua família esteja sempre amparada. Nossos serviços incluem assistência imediata e apoio em situações de emergência, proporcionando um suporte completo quando você mais precisar.\n\n As seguradoras <strong>Porto Seguro, Bradesco Seguros, SulAmérica Seguros, MetLife e Prudential</strong> são algumas das principais parceiras, oferecendo planos robustos e confiáveis para proteger quem você mais ama.\n\n Não deixe o futuro de sua família ao acaso. Invista em um seguro de vida e tenha a certeza de que, independentemente do que aconteça, seus entes queridos estarão seguros e protegidos. Garanta a tranquilidade de saber que, mesmo nos momentos mais difíceis, você fez a escolha certa para proteger o futuro daqueles que são mais importantes para você.\n\n Entre em contato conosco agora mesmo e descubra como nosso seguro de vida pode proporcionar a segurança que você e sua família merecem. Não espere mais para garantir essa proteção essencial.
            `
    },
    {
        name: "seguros-prediais",
        title: "Seguros Prediais",
        titleHero: "Segurança para seu patrimônio",
        subtitleHero: "Conte conosco para proteger seu imóvel.",
        url_bg: "/services/seguros-prediais-bg.jpg",
        icon: "/icons/icon_builder.svg",
        description: `
            Proteja seu patrimônio com nossos seguros prediais, oferecendo uma cobertura completa contra uma variedade de riscos, como incêndios, roubos e desastres naturais. Nosso seguro predial é desenhado para garantir a segurança do seu imóvel, seja ele residencial ou comercial, proporcionando a tranquilidade que você merece.\n\n Com nossos planos personalizados, você pode escolher a cobertura que melhor se adapta às suas necessidades específicas, garantindo a preservação do seu investimento. Nossa equipe especializada está pronta para orientar você na escolha da melhor opção, assegurando que seu imóvel esteja protegido contra os imprevistos do dia a dia.\n\n As seguradoras <strong>Porto Seguro, Mapfre Seguros, Bradesco Seguros, Tokio Marine e SulAmérica Seguros</strong> são algumas das principais parceiras, oferecendo planos robustos e confiáveis para garantir a segurança do seu patrimônio.\n\n Não arrisque a segurança do seu imóvel. Invista em um seguro predial e tenha a certeza de que seu patrimônio está protegido contra diversos riscos. Com nosso seguro, você pode viver ou trabalhar sem preocupações, sabendo que seu imóvel está seguro e protegido.\n\n Entre em contato conosco agora mesmo e descubra como nosso seguro predial pode proporcionar a proteção que seu imóvel merece. Não espere mais para garantir a segurança do seu patrimônio.
            `
    },
    {
        name: "certificados-digitais",
        title: "Certificados Digitais",
        titleHero: "Segurança digital",
        subtitleHero: "Conte conosco para proteger suas transações online.",
        url_bg: "/services/certificados-digitais-bg.png",
        icon: "/icons/icon_certificate.svg",
        description: `
        Garanta a segurança das suas transações eletrônicas com nossos certificados digitais, proporcionando autenticação e criptografia de dados de alta confiabilidade. Com um certificado digital, você protege suas informações contra acessos não autorizados, garantindo um ambiente digital mais seguro para suas operações diárias.\n\n Nossos certificados digitais são ideais para empresas e indivíduos que buscam segurança e confiança em suas transações online. Oferecemos uma gama de soluções para autenticação, assinatura digital e criptografia, atendendo às necessidades específicas de cada cliente. Com nossos certificados, você pode realizar transações eletrônicas com total tranquilidade, sabendo que seus dados estão protegidos contra fraudes e violações de privacidade.\n\n As autoridades certificadoras <strong>Serasa Experian, Certisign, Soluti, Valid e Certificados Digitais Digitalsign</strong> são algumas das principais parceiras, oferecendo soluções robustas e confiáveis para garantir a segurança das suas transações eletrônicas.\n\n Não comprometa a segurança das suas operações online. Invista em certificados digitais e tenha a certeza de que suas transações estão protegidas contra ameaças cibernéticas. Com nossos certificados, você garante a integridade e a confidencialidade das suas informações, proporcionando um ambiente digital seguro para você e seus clientes.\n\n Entre em contato conosco agora mesmo e descubra como nossos certificados digitais podem proteger suas transações eletrônicas. Não espere mais para garantir a segurança e a confiança que você precisa em suas operações online.
        `
    }
];
