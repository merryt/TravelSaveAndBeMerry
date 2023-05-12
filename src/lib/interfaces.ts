interface FrontMatter {
    date: Date;
    updatedDate: Date;
    description: string;
    title: string;
    coverPhoto: string;
    authors: Array<string>;
    tags: string;
}

export type { FrontMatter }