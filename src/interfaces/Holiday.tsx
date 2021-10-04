export interface Holiday {
    id: string,
    title: string,
    adultPrice: number,
    childPrice: number,
    family: boolean,
    hero: Hero,
    leadParagraph: string,
    features: string[]
}

interface Hero {
    url: string,
    alt: string
}