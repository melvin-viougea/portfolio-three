import {ansible, azure, chief, computeris, devops, docker, firebase, flutter, gitlab, jira, mobile, nextjs, reactjs, solutions909, springboot, swift, symfony, tailwind, web,} from "../assets";

const navLinks = [
    {
        id: "about",
        title: "À propos",
    },
    {
        id: "work",
        title: "Expériences",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Développeur Web",
        icon: web,
    },
    {
        title: "Développeur Mobile",
        icon: mobile,
    },
    {
        title: "Ingénieur DevOps",
        icon: devops,
    },
    {
        title: "Chef de projet",
        icon: chief,
    },
];

const technologies = [
    {
        name: "NextJS",
        icon: nextjs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Spring Boot",
        icon: springboot,
    },
    {
        name: "Symfony",
        icon: symfony,
    },
    {
        name: "Flutter",
        icon: flutter,
    },
    {
        name: "Swift",
        icon: swift,
    },
    {
        name: "Firebase",
        icon: firebase,
    },
    {
        name: "Docker",
        icon: docker,
    },
    {
        name: "Azure",
        icon: azure,
    },
    {
        name: "Ansible",
        icon: ansible,
    },
    {
        name: "GitLab",
        icon: gitlab,
    },
    {
        name: "Jira",
        icon: jira,
    },
];

const experiences = [
    {
        title: "Développeur Fullstack / DevOps (Alternance)",
        company_name: "Solutions 909",
        icon: solutions909,
        iconBg: "#888888",
        date: "Décembre 2022 - Novembre 2024",
        points: [
            "Développement d'une suite d'applications web avec Symfony et React.",
            "Dockerisation et orchestration des applications pour une meilleure scalabilité.",
            "Mise en place et gestion des bases de données SQL, et optimisation des performances.",
            "Participation aux processus DevOps pour l'intégration continue et le déploiement automatisé.",
        ],
    },
    {
        title: "Développeur Fullstack (Freelance)",
        company_name: "Solutions 909",
        icon: solutions909,
        iconBg: "#888888",
        date: "Juillet 2021 - Août 2022",
        points: [
            "Développement d'applications web avec Symfony et React.",
            "Gestion des bases de données et implémentation de fonctionnalités personnalisées.",
            "Optimisation des performances des applications et amélioration de l'expérience utilisateur.",
        ],
    },
    {
        title: "Développeur Web (Stagiaire)",
        company_name: "Solutions 909",
        icon: solutions909,
        iconBg: "#888888",
        date: "Janvier 2022 - Février 2022",
        points: [
            "Création d'un nouveau projet avec BoltCMS.",
            "Adaptation responsive d'une version de site WordPress.",
            "Développement d'applications web avec Symfony et React.",
        ],
    },
    {
        title: "Développeur (Stagiaire)",
        company_name: "Computeris",
        icon: computeris,
        iconBg: "#E6DEDD",
        date: "Juin 2021 - Juin 2021",
        points: [
            "Développement de sites web statiques en HTML, CSS, PHP, et JavaScript.",
            "Assistance dans la mise en place de solutions techniques pour améliorer la performance et l'accessibilité des sites.",
        ],
    },
];

const projects = [
    // {
    //     name: "T-WEB-501",
    //     description: "Le projet \"Job Board\" utilise React pour gérer des annonces d'emploi, avec un backend en Express. Il inclut un système d'authentification et une interface d'administration.",
    //     tags: [
    //         {
    //             name: "Web",
    //             color: "text-blue-500",
    //         },
    //     ],
    // },
    // {
    //     name: "T-CEN-500",
    //     description: "Le projet \"Iron Man\" gère la construction d'une armure imprimée en 3D, intégrant des éléments robotisés. Il couvre la gestion des ressources, des risques et du budget, avec des livrables en Gantt et en communication.",
    //     tags: [
    //         {
    //             name: "Management",
    //             color: "text-green-500",
    //         },
    //     ],
    // },
    // {
    //     name: "T-JAV-501",
    //     description: "Le projet \"Dashboard\" utilise React pour le frontend et Java Spring Boot pour le backend, intégrant OAuth2. Il permet aux utilisateurs de créer des tableaux de bord dynamiques avec des widgets basés sur des données d'API externes.",
    //     tags: [
    //         {
    //             name: "Web",
    //             color: "text-blue-500",
    //         },
    //     ],
    // },
    // {
    //     name: "T-NSA-501",
    //     description: "Le projet \"You shall not pass\" configure une infrastructure réseau avec OpenBSD comme passerelle et FreeBSD comme serveur web, incluant un DHCP pour trois sous-réseaux et sécurisation des communications.",
    //     tags: [
    //         {
    //             name: "Réseau",
    //             color: "text-purple-500",
    //         },
    //     ],
    // },
    // {
    //     name: "T-JSF-600",
    //     description: "Le projet développe un client et un serveur IRC avec la stack MERN, utilisant des sockets. Le serveur gère plusieurs connexions, permettant la gestion de canaux et l'envoi de messages avec notifications.",
    //     tags: [
    //         {
    //             name: "Web",
    //             color: "text-blue-500",
    //         },
    //     ],
    // },
    {
        name: "T-SEC-600",
        description: "Le projet \"Socat\" comprend 12 défis Boot2Root axés sur l'exploitation de failles réseau. Les participants lancent des VMs TryHackMe pour découvrir des vulnérabilités et obtenir des droits root en collectant des drapeaux.",
        tags: [
            {
                name: "Cybersécu",
                color: "text-red-500",
            },
        ],
    },
    {
        name: "T-DEV-600",
        description: "Le projet \"Redditech\" développe une application de navigation pour Reddit, intégrant OAuth2, affichage du profil utilisateur et gestion des abonnements, avec une documentation technique complète exigée.",
        tags: [
            {
                name: "Mobile",
                color: "text-teal-500",
            },
            {
                name: "Management",
                color: "text-green-500",
            },
        ],
    },
    {
        name: "T-DOP-600 1",
        description: "Le projet \"Popeye\" containerise une application de sondage avec Docker, intégrant Flask, Java, PostgreSQL, Redis, et une interface Node.js, gérée via un fichier docker-compose.yml et accessible localement.",
        tags: [
            {
                name: "DevOps",
                color: "text-orange-500",
            },
        ],
    },
    // {
    //     name: "T-ORG-600",
    //     description: "Le projet modélise des flux de communication au sein d'une entreprise via un graphe représentant les échanges entre employés, analysant centralisation, processus décisionnels et division du travail, suivi d'une présentation comparative.",
    //     tags: [
    //         {
    //             name: "Management",
    //             color: "text-green-500",
    //         },
    //     ],
    // },
    {
        name: "T-YEP-600",
        description: "Le projet de fin d'année \"PixelVault\" est un RPG mobile au tour par tour, développé en C# avec Unity, .NET pour l'API REST et SQL Server. L'équipe a conçu gameplay, interface utilisateur et un système de progression évolutif. Un cahier des charges complet est exigé.",
        tags: [
            {
                name: "Mobile",
                color: "text-teal-500",
            },
            {
                name: "Management",
                color: "text-green-500",
            },
        ],
    },
    // {
    //     name: "T-DOP-600 2",
    //     description: "Le projet \"My_Marvin\" automatise la configuration de Jenkins avec \"Configuration as Code\" et Job DSL, créant des utilisateurs avec rôles spécifiques et automatisant des tâches comme le clonage de dépôts et la configuration de pipelines CI/CD.",
    //     tags: [
    //         {
    //             name: "DevOps",
    //             color: "text-orange-500",
    //         },
    //     ],
    // },
    // {
    //     name: "T-WEB-600",
    //     description: "Le projet développe une API générique pour sites e-commerce avec Symfony, permettant la gestion de produits, utilisateurs et commandes, déployée automatiquement via Ansible sur un serveur Debian. L'API respecte les standards REST et gère les données en JSON.",
    //     tags: [
    //         {
    //             name: "Web",
    //             color: "text-blue-500",
    //         },
    //     ],
    // },
    {
        name: "T-DOP-600 3",
        description: "Le projet \"Bernstein\" déploie une application de sondage sur Kubernetes avec Azure, orchestrée par Traefik pour le proxy inverse et le load balancing. Comprend des services Flask, Redis, Java et Node.js pour gérer et afficher les résultats des votes, avec PostgreSQL pour le stockage et cAdvisor pour la surveillance des conteneurs.",
        tags: [
            {
                name: "DevOps",
                color: "text-orange-500",
            },
        ],
    },
    {
        name: "T-POO-700",
        description: "Le projet \"Time Manager\" est une application de suivi du temps de travail, développée en React et Elixir, permettant de gérer les horaires, afficher des tableaux de bord et suivre les temps de travail quotidiens et hebdomadaires. L'application est dockerisée et inclut une version mobile.",
        tags: [
            {
                name: "Web",
                color: "text-blue-500",
            },
            {
                name: "Mobile",
                color: "text-teal-500",
            },
            {
                name: "DevOps",
                color: "text-orange-500",
            },
        ],
    },
    {
        name: "T-NSA-700",
        description: "Le projet \"SLA\" met en place une plateforme d'hébergement partagée sans Docker, utilisant Ansible et GitLab CI/CD pour automatiser le build, test, et déploiement d'applications Laravel et Angular, garantissant un rollback rapide et un minimum de downtime.",
        tags: [
            {
                name: "DevOps",
                color: "text-orange-500",
            },
        ],
    },
    {
        name: "T-DEV-700",
        description: "Le projet \"Cash Manager\" est un système de paiement distant pour détaillants, avec une app mobile en Swift et Java Spring Boot. Il gère paniers et paiements via NFC/QR, avec un serveur validant les transactions, dockerisé avec tests unitaires et Design Patterns pour assurer qualité et maintenabilité.",
        tags: [
            {
                name: "Mobile",
                color: "text-teal-500",
            },
        ],
    },
    // {
    //     name: "T-DIT-700",
    //     description: "Le projet \"Gotham\" réorganise la collecte des déchets en intégrant des technologies comme GPS et poubelles intelligentes. L'équipe de gestion du changement prépare les parties prenantes et gère la mise en œuvre des nouvelles solutions, avec des livrables prévus à chaque phase de transformation.",
    //     tags: [
    //         {
    //             name: "Management",
    //             color: "text-green-500",
    //         },
    //     ],
    // },
    // {
    //     name: "T-ESP-800",
    //     description: "Le projet \"Minigames VR\" propose une expérience de réalité virtuelle développée avec Unity en C#, offrant des jeux populaires dans un environnement multijoueur. Les joueurs sont connectés à une blockchain Polkadot pour le stockage et la gestion des données, avec livraison de documents techniques.",
    //     tags: [
    //         {
    //             name: "VR",
    //             color: "text-indigo-500",
    //         },
    //         {
    //             name: "Management",
    //             color: "text-green-500",
    //         },
    //     ],
    // },
    {
        name: "T-NSA-800",
        description: "Le projet \"LostOps\" optimise une infrastructure cloud en établissant un monitoring multi-niveaux et en améliorant les pipelines CI/CD sur GitHub Actions, intégrant des métriques, des scans de sécurité et une documentation des outils.",
        tags: [
            {
                name: "DevOps",
                color: "text-orange-500",
            },
            {
                name: "Management",
                color: "text-green-500",
            },
        ],
    },
    {
        name: "T-DEV-810",
        description: "Le projet \"Zoidberg\" utilise l'apprentissage automatique pour détecter la pneumonie à partir d'images radiographiques. Il inclut l'intégration de réseaux neuronaux, validations croisées, comparaisons de méthodes, et la livraison de documents techniques et d'une synthèse des résultats.",
        tags: [
            {
                name: "IA",
                color: "text-gray-500",
            },
            {
                name: "Management",
                color: "text-green-500",
            },
        ],
    },
];

export {navLinks, services, technologies, experiences, projects};
