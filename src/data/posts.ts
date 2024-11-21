export interface Post {
    id: number;
    title: string;
    content: string;
    image?: string;
    date?: string;
    author?: string;
}

export const mockPosts: Post[] = [
    {
        id: 1,
        title: "🚀#DesafíoInnovaTech2GFinTechChallenge | ¡Atención, emprendedores innovadores! 📢",
        content: "Nuestros amigos de @Ubbicuo, hub de innovación y emprendimiento aperturó la convocatoria para la segunda edición del 𝗗𝗲𝘀𝗮𝗳𝗶𝗼 𝗜𝗻𝗻𝗼𝘃𝗮 𝗧𝗲𝗰𝗵 𝟮𝗚 - 𝗙𝗶𝗻𝗧𝗲𝗰𝗵 𝗖𝗵𝗮𝗹𝗹𝗲𝗻𝗴𝗲, en colaboración con @cajatrujillo y su l𝗮𝗯𝗼𝗿𝗮𝘁𝗼𝗿𝗶𝗼 𝗱𝗲 𝗜𝗻𝗻𝗼𝘃𝗮𝗰𝗶𝗼𝗻 𝗪𝗔𝗦𝗜 𝗜𝗡𝗡𝗢𝗩𝗔. Si tienes una solución innovadora en el sector FinTech, ¡Esta es tu oportunidad! 🚀💡 🎯 Serán 3 los ganadores que recibirán grandes 𝗽𝗿𝗲𝗺𝗶𝗼𝘀 𝘃𝗮𝗹𝗼𝗿𝗶𝘇𝗮𝗱𝗼𝘀 𝗲𝗻 𝗺𝗮𝘀 𝗱𝗲 𝗦/ 𝟭 𝟱𝟬𝟬, acceso a programas formativos exclusivos y asesoramiento personalizado para acceder a fondos concursables, todo 𝗰𝗼𝗻 𝗲𝗹 𝗿𝗲𝘀𝗽𝗮𝗹𝗱𝗼 𝗱𝗲 𝗖𝗮𝗷𝗮 𝗧𝗿𝘂𝗷𝗶𝗹𝗹𝗼 y el equipo de expertos en innovación de Ubbicuo. ✅ ¡No dejes pasar esta oportunidad única de ser parte de la transformación del sector financiero! 💰✨ 📅 𝗜𝗻𝘀𝗰𝗿𝗶𝗽𝗰𝗶𝗼𝗻𝗲𝘀 𝗮𝗯𝗶𝗲𝗿𝘁𝗮𝘀 𝗵𝗮𝘀𝘁𝗮 𝗲𝗹 𝟬𝟳 𝗱𝗲 𝗻𝗼𝘃𝗶𝗲𝗺𝗯𝗿𝗲 👉 𝗜𝗻𝘀𝗰𝗿𝗶𝗯𝗲𝘁𝗲 𝗮𝗾𝘂𝗶: bit.ly/Formulario_DesafioInnovaTech2G 📍 𝗟𝗲𝗲 𝗹𝗮𝘀 𝗯𝗮𝘀𝗲𝘀 𝗱𝗲 𝗹𝗮 𝗽𝗼𝘀𝘁𝘂𝗹𝗮𝗰𝗶𝗼𝗻: bit.ly/Bases_DesafioInnovaTech2G 📍 𝗩𝗶𝘀𝗶𝘁𝗮 𝗻𝘂𝗲𝘀𝘁𝗿𝗮 𝗽𝗮𝗴𝗶𝗻𝗮 𝘄𝗲𝗯 𝗽𝗮𝗿𝗮 𝗺𝗮𝘀 𝗱𝗲𝘁𝗮𝗹𝗹𝗲𝘀: https://ubbicuo.com",
        image: "https://lh3.googleusercontent.com/d/1IGAPIwDiEOyejejws_FAz9sRBq8WRqly",
        date: "2024-11-17",
        author: "SEDIPRO UNT"
    },
    {
        id: 2,
        title: "¡𝗗𝗶́𝗮 𝗜𝗻𝘁𝗲𝗿𝗻𝗮𝗰𝗶𝗼𝗻𝗮𝗹 𝗰𝗼𝗻𝘁𝗿𝗮 𝗲𝗹 𝗖𝗮𝗺𝗯𝗶𝗼 𝗖𝗹𝗶𝗺𝗮́𝘁𝗶𝗰𝗼! 🌎❌🔥",
        content: "Unamos fuerzas para proteger nuestro planeta 🌱💪. Pequeñas acciones como apagar luces 💡 y reducir el consumo de plástico ♻️ pueden marcar la diferencia. ¡Actúa hoy por un mañana mejor! 🌍🌿 #DíaContraElCambioClimático #DesarrolloSostenible #AcciónClimática #Sostenibilidad #SediproUNT",
        image: "https://lh3.googleusercontent.com/d/1Oqi7CSlUgrcgtT07_JeAqUA8JQN5d5q_",
        date: "2024-11-16",
        author: "SEDIPRO UNT"
    },
    {
        id: 3,
        title: "Celebramos el Día de la Canción Criolla 🎶",
        content: "Hoy, en SEDIPRO, nos unimos al homenaje de nuestra música criolla, esa que lleva en sus notas la esencia y el orgullo de ser peruanos. Cada canción es un recordatorio de nuestra historia y de lo que nos une. Que este día nos inspire a mantener viva nuestra identidad y a celebrar nuestra cultura. ¡Que viva la canción criolla y que viva el Perú! 🇵🇪 #DíaDeLaCanciónCriolla #SEDIPRO #OrgulloPeruano",
        image: "https://lh3.googleusercontent.com/d/1hqFB4dLzrsTiPeRovhDVCDgncnDnovAX",
        date: "2024-11-17",
        author: "SEDIPRO UNT"
    },
    {
        id: 4,
        title: "Día Internacional de la Dirección de Proyectos 📈✨",
        content: "📆 07 de Noviembre del 2024. Desde el año 2004, el Día Internacional de la Gestión de Proyectos se celebra en todo el mundo para reconocer la importancia de esta disciplina y el valioso trabajo de los gerentes de proyectos. 🌍 La dirección de proyectos permite 🗂️ organizar, 🧑‍🤝‍🧑 liderar y 📝 planificar cada estrategia para el desarrollo de productos o servicios exitosos. \"La dirección de proyectos no solo se trata de cumplir objetivos, sino de transformar ideas en realidades.\" 🌟 #DíaDeLaDirecciónDeProyectos #GestiónDeProyectos #LiderazgoEnProyectos #SediproUNT",
        image: "https://lh3.googleusercontent.com/d/1V5UxTARkXSL_QKU__7XUjimuvqFf-AAV",
        date: "2024-11-18",
        author: "SEDIPRO UNT"
    },
    {
        id: 5,
        title: "¡Día Internacional del Hombre! ✨🤓",
        content: "En este día tan especial, recordamos la importancia de reconocer a los hombres y sus aportes a nuestra sociedad. Hoy conmemoramos el Día Internacional del Hombre, resaltando su valor, bienestar y las contribuciones que hacen para transformar nuestro mundo 🌎. Celebremos juntos y promovamos la conciencia sobre la salud y reconocimiento de sus acciones positivas 🫂 #DíaInternacionalDelHombre #HombresQueInspiran #SEDIPROUNT",
        image: "https://lh3.googleusercontent.com/d/14AssBS6CcPRbj7hxpv3SndCgl8vuvu7l",
        date: "2024-11-19",
        author: "SEDIPRO UNT"
    },
    {
        id: 6,
        title: "¡Día Mundial del Niño!✨👧👦",
        content: "Hoy celebramos la magia de la infancia y recordamos la importancia de proteger sus derechos y bienestar. En este Día Mundial del Niño, destacamos su alegría, creatividad y el potencial para transformar nuestro futuro 🌎. Es el momento de reafirmar nuestro compromiso con su educación, salud y el derecho a soñar sin límites. ¡Hagamos un mundo mejor para ellos! 🫂✨ #DíaMundialDelNiño #FuturoConEsperanza #SEDIPROUNT",
        image: "https://lh3.googleusercontent.com/d/168tn6Xnl6poYu_M1TuNnQ1PXV7FBD8rD",
        date: "2024-11-20",
        author: "SEDIPRO UNT"
    }
];