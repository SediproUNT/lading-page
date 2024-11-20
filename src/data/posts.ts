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
        title: "Nuevo Curso de Dirección de Proyectos",
        content: "Únete a nuestro próximo curso donde aprenderás las mejores prácticas en gestión de proyectos...",
        image: "/assets/img/posts/curso-1.jpg",
        date: "2024-03-20",
        author: "SEDIPRO UNT"
    },
    {
        id: 2,
        title: "Workshop de Liderazgo",
        content: "Desarrolla tus habilidades de liderazgo en nuestro workshop intensivo...",
        image: "/assets/img/posts/workshop-1.jpg",
        date: "2024-03-15",
        author: "SEDIPRO UNT"
    },
    // Añade más posts según necesites
];