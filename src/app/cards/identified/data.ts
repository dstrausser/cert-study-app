export type IdentifiedCard = {
  pos: string;
  thumb: string;
  card: string;
  set: string;
  price: number;
};

export type Photo = {
  image: string;
  cards: IdentifiedCard[];
};

const c = (
  thumbBase: string,
  pos: string,
  card: string,
  set: string,
  price: number,
): IdentifiedCard => ({
  pos,
  thumb: `/cards/identified/crops/${thumbBase}.jpg`,
  card,
  set,
  price,
});

export const photos: Photo[] = [
  {
    image: "IMG_0561",
    cards: [
      c("IMG_0561_r0c0", "R1-1", "Mega Gengar ex メガゲンガー", "MEGA Dream ex (JP) 240/193 SAR", 460.22),
      c("IMG_0561_r0c1", "R1-2", "Zekrom ex", "Black Bolt 166/086 SIR", 246.99),
      c("IMG_0561_r0c2", "R1-3", "Reshiram ex", "White Flare 166/086 SIR", 200.99),
      c("IMG_0561_r0c3", "R1-4", "Lance's Charizard", "(set unverified)", 0),
      c("IMG_0561_r0c4", "R1-5", "Squirtle", "Stellar Crown 148/142 IR", 122.60),
      c("IMG_0561_r1c0", "R2-1", "Kyurem ex", "Black Bolt 165/086 SIR", 76.54),
      c("IMG_0561_r1c1", "R2-2", "Flareon ex", "Prismatic Evolutions 146/131 SIR", 193.65),
      c("IMG_0561_r1c2", "R2-3", "Umbreon ブラッキー", "Neo Discovery (JP) No. 197", 191.49),
      c("IMG_0561_r1c3", "R2-4", "Pikachu ex", "Surging Sparks 219/191 UR", 29.53),
      c("IMG_0561_r1c4", "R2-5", "Mischievous Pichu いたずら好きのピチュー", "Misc Promo 214/S-P", 30.54),
      c("IMG_0561_r2c0", "R3-1", "Meowth", "Phantasmal Flames 106/094 IR", 22.98),
      c("IMG_0561_r2c1", "R3-2", "Pikachu ex ピカチュウex (JP SAR)", "MEGA Dream ex (JP) 234/193 SAR", 252.67),
      c("IMG_0561_r2c2", "R3-3", "M Charizard EX (Y) Secret", "Flashfire 107 Secret Rare", 271.09),
      c("IMG_0561_r2c3", "R3-4", "M Blastoise EX", "Generations 18 UR", 27.33),
      c("IMG_0561_r2c4", "R3-5", "M Venusaur EX", "Generations 2 UR", 24.10),
    ],
  },
  {
    image: "IMG_0563",
    cards: [
      c("IMG_0563_r0c0", "R1-1", "Blastoise & Piplup GX (Full Art)", "Cosmic Eclipse 214/236 UR", 70.71),
      c("IMG_0563_r0c1", "R1-2", "Charizard ex (JP) リザードンex", "Shiny Treasure ex (JP) 331/190 SSR", 21.03),
      c("IMG_0563_r0c2", "R1-3", "Meowth (JP) ニャース", "SV-P Promo 192/SV-P", 68.26),
      c("IMG_0563_r0c3", "R1-4", "Cynthia's Garchomp ex", "Destined Rivals 241/182 Hyper Rare", 34.77),
      c("IMG_0563_r0c4", "R1-5", "Latios", "Surging Sparks 203/191 IR", 34.56),
      c("IMG_0563_r1c0", "R2-1", "Alolan Exeggutor ex", "Surging Sparks 242/191 SIR", 30.72),
      c("IMG_0563_r1c1", "R2-2", "Vaporeon (Master Ball Pattern) (CN) 水伊布", "Gem Pack 2 (CN) 0210/14", 2.13),
      c("IMG_0563_r1c2", "R2-3", "Erika's Invitation", "SV 151 (MEW) 203/165 SIR", 22.81),
      c("IMG_0563_r1c3", "R2-4", "Minccino", "Black Bolt 152/086 IR", 22.80),
      c("IMG_0563_r1c4", "R2-5", "Mega Absol ex", "Mega Evolution 180/132 SIR", 72.22),
      c("IMG_0563_r2c0", "R3-1", "Mega Dragonite ex メガカイリュー", "MEGA Dream ex (JP) 232/193 MAR", 20.37),
      c("IMG_0563_r2c1", "R3-2", "Drowzee", "SV Base Set 210/198 IR", 67.32),
      c("IMG_0563_r2c2", "R3-3", "Mega Hawlucha ex メガルチャブル", "MEGA Dream ex (JP) 239/193 SAR", 27.24),
      c("IMG_0563_r2c3", "R3-4", "Garganacl", "Paradox Rift 202/182 IR", 4.89),
      c("IMG_0563_r2c4", "R3-5", "Slowpoke", "SV Base Set 204/198 IR", 46.97),
    ],
  },
  {
    image: "IMG_0565",
    cards: [
      c("IMG_0565_r0c0", "R1-1", "Zeraora", "Stellar Crown 151/142 IR", 11.75),
      c("IMG_0565_r0c1", "R1-2", "Arctibax", "Paldea Evolved 209/193 IR", 16.09),
      c("IMG_0565_r0c2", "R1-3", "Umbreon", "Undaunted 10 Holo", 70.59),
      c("IMG_0565_r0c3", "R1-4", "Jolteon", "Brilliant Stars Trainer Gallery TG04/TG30", 17.97),
      c("IMG_0565_r0c4", "R1-5", "Gloom", "Obsidian Flames 198/197 IR", 27.14),
      c("IMG_0565_r1c0", "R2-1", "Cinccino", "Temporal Forces 183/162 IR", 33.71),
      c("IMG_0565_r1c1", "R2-2", "Cleffa", "Obsidian Flames 202/197 IR", 50.02),
      c("IMG_0565_r1c2", "R2-3", "Eevee (Master Ball Pattern)", "Prismatic Evolutions 074/131", 16.29),
      c("IMG_0565_r1c3", "R2-4", "Umbreon ex (Master Ball Pattern)", "Prismatic Evolutions 060/131", 0),
      c("IMG_0565_r1c4", "R2-5", "Pichu (JP)", "Expedition (Japanese) 114/128 Rare", 185.00),
      c("IMG_0565_r2c0", "R3-1", "Slowpoke (2nd copy)", "SV Base Set 204/198 IR", 46.97),
      c("IMG_0565_r2c1", "R3-2", "Riolu", "Crown Zenith: Galarian Gallery GG26/GG70", 10.55),
      c("IMG_0565_r2c2", "R3-3", "Victini", "SV Promo 208", 16.13),
      c("IMG_0565_r2c3", "R3-4", "Eevee (sleeping)", "SV Promo 173", 16.14),
      c("IMG_0565_r2c4", "R3-5", "Mega Lucario ex (JP) メガルカリオ", "Mega Brave (JP) 088/063 SAR", 76.77),
    ],
  },
  {
    image: "IMG_0567",
    cards: [
      c("IMG_0567_r0c0", "R1-1", "Mega Charizard X ex メガリザードンX", "MEGA Dream ex (JP) 223/193 MAR", 57.05),
      c("IMG_0567_r0c1", "R1-2", "Marill", "Ascended Heroes 232/217 IR", 17.13),
      c("IMG_0567_r0c2", "R1-3", "Umbreon Gold Star ☆", "Celebrations: Classic Collection 17/17", 90.69),
      c("IMG_0567_r0c3", "R1-4", "Iono's Bellibolt ex", "Journey Together 183/159 SIR", 43.28),
      c("IMG_0567_r0c4", "R1-5", "Mega Diancie ex メガディアンシー", "MEGA Dream ex (JP) 238/193 SAR", 24.11),
      c("IMG_0567_r1c0", "R2-1", "N's Zekrom", "MEGA Dream ex (JP) 210/193 Art Rare", 5.83),
      c("IMG_0567_r1c1", "R2-2", "Vaporeon", "Brilliant Stars Trainer Gallery TG02/TG30", 24.06),
      c("IMG_0567_r1c2", "R2-3", "Boss's Orders (Ghetsis)", "Paldea Evolved 265/193 SIR", 20.48),
      c("IMG_0567_r1c3", "R2-4", "Skeledirge ex", "Paldea Evolved 258/193 SIR", 35.53),
      c("IMG_0567_r1c4", "R2-5", "Pikachu (World Hobby Fair) (JP)", "Pokemon World Hobby Fair Promo (JP)", 163),
      c("IMG_0567_r2c0", "R3-1", "Giovanni's Persian (JP) サカキのペルシアン", "Gym Challenge (Japanese) 053", 29.51),
      c("IMG_0567_r2c1", "R3-2", "Pikachu & Zekrom GX", "Sun & Moon Promo SM248", 35.16),
      c("IMG_0567_r2c2", "R3-3", "Oricorio ex オドリドリex", "Inferno X (JP) 111/080 SAR", 31.36),
      c("IMG_0567_r2c3", "R3-4", "Mega Gengar ex", "Ascended Heroes 269/217 MAR", 92.63),
      c("IMG_0567_r2c4", "R3-5", "Mega Dragonite ex", "Ascended Heroes 271/217 MAR", 63.39),
    ],
  },
  {
    image: "IMG_0569",
    cards: [
      c("IMG_0569_r0c0", "R1-1", "Mega Feraligatr ex", "Ascended Heroes 274/217 SIR", 172.39),
      c("IMG_0569_r0c1", "R1-2", "Exeggutor", "Mega Evolution 135/132 IR", 4.78),
      c("IMG_0569_r0c2", "R1-3", "Wailord", "Journey Together 162/159 IR", 16.28),
      c("IMG_0569_r0c3", "R1-4", "Mega Gardevoir ex", "Mega Evolution 178/132 SIR", 202.22),
      c("IMG_0569_r1c0", "R2-1", "Misty's Tears (JP) カスミのなみだ", "Gym Heroes (Japanese)", 63.60),
      c("IMG_0569_r1c1", "R2-2", "Pikachu (with Dawn)", "Lost Origin Trainer Gallery TG05/TG30", 63.25),
      c("IMG_0569_r1c2", "R2-3", "Lillie's Determination", "Mega Evolution 184/132 SIR", 76.10),
    ],
  },
];

export const totalValue = photos.reduce(
  (sum, p) => sum + p.cards.reduce((s, c) => s + c.price, 0),
  0,
);
