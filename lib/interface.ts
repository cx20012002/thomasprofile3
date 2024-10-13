export interface History{
    title: string;
    experience: {
        first: string;
        second: string;
        third: string;
        link: string;
    }[];
}

export interface Profile{
    title: string;
    subtitle: string;
    smallTitle: string;
    featureImage: string;
    images: string[];
    slug: {current: string};
    introBlocks: any;
    summary: string;
    content: any;
    profileSection: any;
    gallery: any;
    _createdAt: string;
}