export class Overview {
    constructor(
        public year: number,
        public finalCanvas: Image,
        public tags: Tag[],
        public colorCounts: ColorCount[],
        public links: Link[]
    ) { }
}

export class ColorCount {
    constructor(
        public colorVariable: string,
        public colorName: string,
        public count: number
    ) {}
}

export class Tag {
    constructor(
        public type: string,
        public content: string[]
    ) {}
}

export class Link {
    constructor(
        public linkText: string,
        public onClick: string,
        public classes: string
    ) { }
}

export class Image {
    constructor(
        public imageURL: string,
        public imageAlt: string
    ) {}
}

const canvas2025: Overview = new Overview(
    2025,
    new Image('', ''),
    [],
    [],
    []
)

const canvas2024: Overview = new Overview(
    2024,
    new Image('https://raw.githubusercontent.com/TheRealMonte/images/main/2024/final2024.png', 'Final Canvas 2024'),
    [
        new Tag('p', ['1912 users from 305 instances participated in the event in 2024.', 'There were 642643 pixels placed on the canvas. Of those pixels, 409046 are the final pixels on the canvas, making the canvas 81.8092% covered at the end of the event. Here are the counts for each color pixel placed, click on the color to view all of the pixels of that color:']),
        new Tag('colorCounts', []),
        new Tag('p', ['The coordinate with the most pixels placed on was (10,262) with 1427 placed. The users who placed pixels on (10,262) are:']),
        new Tag('ul', ['142446@toast.ooo: 1414 times', 'Kelo@lemmy.world: 7 times', 'hemko@lemmy.dbzer0.com: 2 times', 'ategon@programming.dev: 1 time', 'grant@grants.cafe: 1 time', 'EXtremeExploit@lemmy.world: 1 time', 'hdggDalton@toast.ooo: 1 time']),
        new Tag('p', ['1101 users deleted a total of 15724 pixels. 13 users deleted all of their pixels.'])
    ],
    [
        new ColorCount('white', 'White', 55152),
        new ColorCount('light-grey', 'Light Grey', 20011),
        new ColorCount('medium-grey', 'Medium Grey', 13057),
        new ColorCount('deep-grey', 'Deep Grey', 12730),
        new ColorCount('dark-grey', 'Dark Grey', 12810),
        new ColorCount('black', 'Black', 119773),
        new ColorCount('dark-chocolate', 'Dark Chocolate', 5388),
        new ColorCount('chocolate', 'Chocolate', 8724),
        new ColorCount('brown', 'Brown', 6996),
        new ColorCount('peach', 'Peach', 4138),
        new ColorCount('beige', 'Beige', 8040),
        new ColorCount('pink', 'Pink', 23204),
        new ColorCount('magenta', 'Magenta', 8536),
        new ColorCount('mauve', 'Mauve', 6421),
        new ColorCount('purple', 'Purple', 12185),
        new ColorCount('dark-purple', 'Dark Purple', 10896),
        new ColorCount('navy', 'Navy', 27663),
        new ColorCount('blue', 'Blue', 34210),
        new ColorCount('azure', 'Azure', 32045),
        new ColorCount('aqua', 'Aqua', 28753),
        new ColorCount('light-teal', 'Light Teal', 5153),
        new ColorCount('dark-teal', 'Dark Teal', 5216),
        new ColorCount('forest', 'Forest', 5975),
        new ColorCount('dark-green', 'Dark Green', 12810),
        new ColorCount('green', 'Green', 15535),
        new ColorCount('lime', 'Lime', 4168),
        new ColorCount('pastel-yellow', 'Pastel Yellow', 12417),
        new ColorCount('yellow', 'Yellow', 35911),
        new ColorCount('orange', 'Orange', 12336),
        new ColorCount('rust', 'Rust', 7950),
        new ColorCount('maroon', 'Maroon', 4887),
        new ColorCount('rose', 'Rose', 8750),
        new ColorCount('red', 'Red', 54053),
        new ColorCount('watermelon', 'Watermelon', 3711)
    ],
    [new Link('View the 2024 Graphs', '/2024/graphs', 'btn azure')]

);

const canvas2023: Overview = new Overview(
    2023,
    new Image('https://raw.githubusercontent.com/TheRealMonte/images/main/2023/final2023.png', 'Final Canvas 2023',),
    [
        new Tag('p', ['2208 users from 132 instances participated in the event in 2023.', 'There were 628416 pixels placed on the canvas. Here are the counts for each color pixel placed:']),
        new Tag('colorCounts', []),
        new Tag('p', ['The coordinate with the most pixels placed on was (175, 171) with 170 placed. The users who placed pixels on (175, 171) are:']),
        new Tag('ul', ['Depress_mode@lemmy.world: 83 times', 'Kalcifer@lemmy.world: 77 times', 'anonymous1691293996@lemmy.world: 4 times', 'anonymous1691294527@lemmy.world: 3 times', 'anonymous1691296202@lemmy.world: 1 time', 'bstix@feddit.dk: 1 time', 'Wilker@lemmy.blahaj.zone: 1 time']),
        new Tag('p', ['1000 users deleted a total of 10715 pixels.'])
    ],
    [
        new ColorCount('white', 'White', 22488),
        new ColorCount('light-grey', 'Light Grey', 20308), 
        new ColorCount('medium-grey', 'Medium Grey', 15799), 
        new ColorCount('medium-grey', 'Deep Grey', 13864), 
        new ColorCount('dark-grey', 'Dark Grey', 19708), 
        new ColorCount('black', 'Black', 123666), 
        new ColorCount('chocolate', 'Chocolate', 9669), 
        new ColorCount('brown', 'Brown', 8535), 
        new ColorCount('peach', 'Peach', 5790), 
        new ColorCount('beige', 'Beige', 4821), 
        new ColorCount('pink', 'Pink', 18566), 
        new ColorCount('magenta', 'Magenta', 4554), 
        new ColorCount('mauve', 'Mauve', 10180), 
        new ColorCount('purple', 'Purple', 17346), 
        new ColorCount('navy', 'Navy', 17594), 
        new ColorCount('blue', 'Blue', 58856), 
        new ColorCount('azure', 'Azure', 33653), 
        new ColorCount('aqua', 'Aqua', 12588), 
        new ColorCount('light-teal', 'Light Teal', 5695), 
        new ColorCount('dark-teal', 'Dark Teal', 4701), 
        new ColorCount('forest', 'Forest', 9478), 
        new ColorCount('dark-green', 'Dark Green', 19377), 
        new ColorCount('green', 'Green', 12612), 
        new ColorCount('lime', 'Lime', 5585), 
        new ColorCount('pastel-yellow', 'Pastel Yellow', 8543), 
        new ColorCount('yellow', 'Yellow', 32473), 
        new ColorCount('orange', 'Orange', 14841), 
        new ColorCount('rust', 'Rust', 19064), 
        new ColorCount('maroon', 'Maroon', 4218), 
        new ColorCount('rose', 'Rose', 10948), 
        new ColorCount('red', 'Red', 55683), 
        new ColorCount('watermelon', 'Watermelon', 7213)
    ],
    [new Link('View the 2023 Graphs', '/2023/graphs', 'btn azure')]
);

export const overviewData: Overview[] = [canvas2024, canvas2023, canvas2025]