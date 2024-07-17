export class Ranking {
    constructor(
        public userName: string,
        public ranking: string,
        public pixelCount: number
    ) {}
}

export class WarCord {
    constructor(
        public coordinate: string,
        public users: string[]
    ) {}
}

export class TopCord {
    constructor(
        public userName: string,
        public topCord: string,
        public count: number
    ) {}
}

export class UserColorCount {
    constructor(
        public userName: string,
        public colors: ColorCount
    ) {}
}

export class ColorCount {
        constructor(
            public White: number,
            public LightGrey: number,
            public MediumGrey: number,
            public DeepGrey: number,
            public DarkGrey: number,
            public Black: number,
            public DarkChocolate: number,
            public Chocolate: number,
            public Brown: number,
            public Peach: number,
            public Beige: number,
            public Pink: number,
            public Magenta: number,
            public Mauve: number,
            public Purple: number,
            public DarkPurple: number,
            public Navy: number,
            public Blue: number,
            public Azure: number,
            public Aqua: number,
            public LightTeal: number,
            public DarkTeal: number,
            public Forest: number,
            public DarkGreen: number,
            public Green: number,
            public Lime: number,
            public PastelYellow: number,
            public Yellow: number,
            public Orange: number,
            public Rust: number,
            public Maroon: number,
            public Rose: number,
            public Red: number,
            public Watermelon: number) {
        }
}