const mock = [
  {
    track_id: "spotify:track:6MaIMR1Dearuvq60zy6MTa",
    track_name: "HOLDIN' ON",
    artist: "Pangeaux",
    album_name: "Secret Origins Of Yesterday",
    image_url:
      "https://i.scdn.co/image/ab67616d0000b273288d4e4b200ebc078b4fe41b",
    average_color: [147, 26, 120, 255],
  },
  {
    track_id: "spotify:track:1k0JAiH11gHL9dc5dfQjQr",
    track_name: "NOT CUTE ANYMORE",
    artist: "ILLIT",
    album_name: "NOT CUTE ANYMORE",
    image_url:
      "https://i.scdn.co/image/ab67616d0000b2733d09075f6c7fabe9a7234cb3",
    average_color: [183, 190, 191, 255],
  },
  {
    track_id: "spotify:track:7BaxYnTazocAOK3istsW1z",
    track_name: "You're Not The Only One I Know",
    artist: "The Sundays",
    album_name: "Reading, Writing And Arithmetic",
    image_url:
      "https://i.scdn.co/image/ab67616d0000b273441242b353fc7449f60599c6",
    average_color: [88, 94, 96, 255],
  },
  {
    track_id: "spotify:track:1fRZjjVLUDNuxYzRtqOGUa",
    track_name: "You're Gonna Tell Me",
    artist: "Roni Bar Hadas",
    album_name: "Calm the Beast",
    image_url:
      "https://i.scdn.co/image/ab67616d0000b2733a30d280772670ede825eb96",
    average_color: [120, 79, 65, 255],
  },
  {
    track_id: "spotify:track:7sXOV8uUpxPtyTZoV2iqYa",
    track_name: "Have A Baby (With Me)",
    artist: "Daniel Caesar",
    album_name: "Son Of Spergy",
    image_url:
      "https://i.scdn.co/image/ab67616d0000b2732bad6e56e77d5bef0aa3f2dc",
    average_color: [103, 46, 46, 255],
  },
  {
    track_id: "spotify:track:57L5EYzCfHS7Jd58rV33lW",
    track_name: "HIGHJACK",
    artist: "A$AP Rocky",
    album_name: "HIGHJACK",
    image_url:
      "https://i.scdn.co/image/ab67616d0000b273588dda00d43cd9b2566de08f",
    average_color: [196, 195, 195, 255],
  },
  {
    track_id: "spotify:track:474uVhyGgK5MtY9gMcDgGl",
    track_name: "It's Called: Freefall",
    artist: "Rainbow Kitten Surprise",
    album_name: "How to: Friend, Love, Freefall",
    image_url:
      "https://i.scdn.co/image/ab67616d0000b2739529217e48fc8bab89c8a1f9",
    average_color: [180, 159, 149, 255],
  },
  {
    track_id: "spotify:track:2QjOHCTQ1Jl3zawyYOpxh6",
    track_name: "Sweater Weather",
    artist: "The Neighbourhood",
    album_name: "I Love You.",
    image_url:
      "https://i.scdn.co/image/ab67616d0000b2738265a736a1eb838ad5a0b921",
    average_color: [123, 123, 123, 255],
  },
  {
    track_id: "spotify:track:7vgTNTaEz3CsBZ1N4YQalM",
    track_name: "Ghost Town",
    artist: "Kanye West",
    album_name: "ye",
    image_url:
      "https://i.scdn.co/image/ab67616d0000b2730cd942c1a864afa4e92d04f2",
    average_color: [108, 115, 123, 255],
  },
  {
    track_id: "spotify:track:5oo9qmQjU5dReOX3amF5j2",
    track_name: "Human Sacrifice",
    artist: "kamen!",
    album_name: "Human Sacrifice",
    image_url:
      "https://i.scdn.co/image/ab67616d0000b27332d940623ca7bf6fc1d8a082",
    average_color: [90, 113, 139, 255],
  },
  {
    track_id: "spotify:track:1NKc15MkCOQZ0tdy8tTxie",
    track_name: "These Days",
    artist: "Wet",
    album_name: "Don't You",
    image_url:
      "https://i.scdn.co/image/ab67616d0000b273461c448f8856c504429fb12d",
    average_color: [130, 118, 89, 255],
  },
  {
    track_id: "spotify:track:1Skjc7Vv4uGdzI8H27Q2qD",
    track_name: "Doin What I Want",
    artist: "Natalie Nunn",
    album_name: "Doin What I Want",
    image_url:
      "https://i.scdn.co/image/ab67616d0000b2736919de6d140e8634f2334202",
    average_color: [127, 79, 139, 255],
  },
  {
    track_id: "spotify:track:1KA2JLeMi0Mo3hjO0442re",
    track_name: "SUPERPOSITION (feat. John Mayer)",
    artist: "Daniel Caesar",
    album_name: "CASE STUDY 01",
    image_url:
      "https://i.scdn.co/image/ab67616d0000b273969c21ea34fe372a3e468947",
    average_color: [112, 126, 141, 255],
  },
  {
    track_id: "spotify:track:6L9f5MEhW4FlA6gktmzcZF",
    track_name: "NASCAR",
    artist: "Angelo Mota",
    album_name: "ZAÏRE",
    image_url:
      "https://i.scdn.co/image/ab67616d0000b2732329691a945398ec62f3edbf",
    average_color: [96, 87, 78, 255],
  },
  {
    track_id: "spotify:track:1b6tPXXCV2fSNtR3SKWUQA",
    track_name: "Available",
    artist: "Justin Bieber",
    album_name: "Changes",
    image_url:
      "https://i.scdn.co/image/ab67616d0000b2737fe4a82a08c4f0decbeddbc6",
    average_color: [214, 65, 51, 255],
  },
  {
    track_id: "spotify:track:3AX4HIRJY6GT6tgMkO5987",
    track_name: "Hate to See Your Heart Break",
    artist: "Paramore",
    album_name: "Paramore",
    image_url:
      "https://i.scdn.co/image/ab67616d0000b273532033d0d90736f661c13d35",
    average_color: [94, 87, 83, 255],
  },
  {
    track_id: "spotify:track:00WLowvlN5cjkYpQV6pjo4",
    track_name: "Die For You",
    artist: "Joji",
    album_name: "SMITHEREENS",
    image_url:
      "https://i.scdn.co/image/ab67616d0000b273cdd1a8a427b3f81f4f4f4f7d",
    average_color: [78, 125, 132, 255],
  },
  {
    track_id: "spotify:track:2LlOeW5rVcvl3QcPNPcDus",
    track_name: "Always",
    artist: "Daniel Caesar",
    album_name: "NEVER ENOUGH",
    image_url:
      "https://i.scdn.co/image/ab67616d0000b2737c68face1dc58127f3a7b1cc",
    average_color: [29, 43, 132, 255],
  },
  {
    track_id: "spotify:track:75XoxL802pG8pNCf7SquaV",
    track_name: "DAYLIGHT DOOM",
    artist: "MOTO BANDIT",
    album_name: "DAYLIGHT DOOM",
    image_url:
      "https://i.scdn.co/image/ab67616d0000b27303b29dd7fd8d82f5017e8169",
    average_color: [154, 145, 166, 255],
  },
  {
    track_id: "spotify:track:0TxPln0uhql4ucFGk1XISM",
    track_name: "Wrong Time",
    artist: "Hippie Sabotage",
    album_name: "Wrong Time",
    image_url:
      "https://i.scdn.co/image/ab67616d0000b273bdc61cff45a69c03a589c953",
    average_color: [250, 249, 248, 255],
  },
  {
    track_id: "spotify:track:522YBf6WqBwJVAe7oHLymu",
    track_name: "Seasons (Waiting on You)",
    artist: "Future Islands",
    album_name: "Singles",
    image_url:
      "https://i.scdn.co/image/ab67616d0000b2730896bc513dc78701474ecc03",
    average_color: [177, 176, 174, 255],
  },
  {
    track_id: "spotify:track:1PDOSyRGnlMRRt22mb3UHA",
    track_name: "Tennessee",
    artist: "Allan Rayman",
    album_name: "Hotel Allan",
    image_url:
      "https://i.scdn.co/image/ab67616d0000b27337754c1adfef49a478902ccd",
    average_color: [134, 108, 90, 255],
  },
  {
    track_id: "spotify:track:6i4T7CZeZKaBPor8EMCv8P",
    track_name: "Yamaha",
    artist: "Delta Spirit",
    album_name: "Delta Spirit",
    image_url:
      "https://i.scdn.co/image/ab67616d0000b27381727cf46d21d415690a743d",
    average_color: [152, 142, 121, 255],
  },
  {
    track_id: "spotify:track:2MYidPOz5NHAtKUySTzbwx",
    track_name: "Paul",
    artist: "Big Thief",
    album_name: "Masterpiece",
    image_url:
      "https://i.scdn.co/image/ab67616d0000b27328b2424c5b007b0e073c42ce",
    average_color: [111, 103, 108, 255],
  },
  {
    track_id: "spotify:track:1xLs8Mu1QEVbGCpyHQ2r2U",
    track_name: "Why",
    artist: "Dominic Fike",
    album_name: "What Could Possibly Go Wrong",
    image_url:
      "https://i.scdn.co/image/ab67616d0000b2738c7e2ab6558632be78a244c2",
    average_color: [69, 51, 55, 255],
  },
  {
    track_id: "spotify:track:2q0VexHJirnUPnEOhr2DxK",
    track_name: "Biking",
    artist: "Frank Ocean",
    album_name: "Biking",
    image_url:
      "https://i.scdn.co/image/ab67616d0000b27369a8328489e5e485514a8667",
    average_color: [135, 124, 106, 255],
  },
  {
    track_id: "spotify:track:2rkrHfK24hPStO9qZnJm7C",
    track_name: "The Question",
    artist: "Balu Brigada",
    album_name: "Portal",
    image_url:
      "https://i.scdn.co/image/ab67616d0000b2731fc8017bbf246da18b953789",
    average_color: [201, 77, 118, 255],
  },
  {
    track_id: "spotify:track:7DC9Tga06eZW9gcrKWWgmv",
    track_name: "Spirals",
    artist: "Nick Leng",
    album_name: "SPIRALS",
    image_url:
      "https://i.scdn.co/image/ab67616d0000b273e282097ee768101be9965eeb",
    average_color: [75, 67, 68, 255],
  },
  {
    track_id: "spotify:track:6DH13QYXK7lKkYHSU88N48",
    track_name: "Who Knows",
    artist: "Daniel Caesar",
    album_name: "Son Of Spergy",
    image_url:
      "https://i.scdn.co/image/ab67616d0000b2732bad6e56e77d5bef0aa3f2dc",
    average_color: [103, 46, 46, 255],
  },
  {
    track_id: "spotify:track:3R47KOuGuGvmoeQqbODPa3",
    track_name: "If It Wasn't For The Nights",
    artist: "ABBA",
    album_name: "Voulez-Vous",
    image_url:
      "https://i.scdn.co/image/ab67616d0000b273aa22899360d8ba6704732dec",
    average_color: [98, 134, 160, 255],
  },
  {
    track_id: "spotify:track:6CdV33i2ztlvFheXGz4Huc",
    track_name: "No One Else Like You",
    artist: "Adam Levine",
    album_name:
      "Begin Again - Music From And Inspired By The Original Motion Picture",
    image_url:
      "https://i.scdn.co/image/ab67616d0000b27366c6044dc629f3746fd3a0ad",
    average_color: [155, 148, 136, 255],
  },
  {
    track_id: "spotify:track:59dLtGBS26x7kc0rHbaPrq",
    track_name: "Nothin' on You (feat. Bruno Mars)",
    artist: "B.o.B",
    album_name: "B.o.B Presents: The Adventures of Bobby Ray",
    image_url:
      "https://i.scdn.co/image/ab67616d0000b273caa23612279c2d059a0d3a82",
    average_color: [111, 102, 77, 255],
  },
  {
    track_id: "spotify:track:6WTFHKrnZpwEBLRS10Ylqs",
    track_name: "misses",
    artist: "Dominic Fike",
    album_name: "14 minutes",
    image_url:
      "https://i.scdn.co/image/ab67616d0000b2730297fb98f81fc0b611fcf71d",
    average_color: [107, 108, 104, 255],
  },
  {
    track_id: "spotify:track:0hOYLhwJERtlBm6Q0ALBCF",
    track_name: "Some Things",
    artist: "Verzache",
    album_name: "Thought Pool",
    image_url:
      "https://i.scdn.co/image/ab67616d0000b27387fff9b1fa350a7fe8881b5e",
    average_color: [115, 120, 108, 255],
  },
  {
    track_id: "spotify:track:3QIoEi8Enr9uHffwInGIsC",
    track_name: "Please Come Home for Christmas - 2013 Remaster",
    artist: "Eagles",
    album_name:
      "Please Come Home for Christmas / Funky New Year (2013 Remaster)",
    image_url:
      "https://i.scdn.co/image/ab67616d0000b2736d4362a2b2e39422000f8ed3",
    average_color: [175, 173, 172, 255],
  },
  {
    track_id: "spotify:track:1AvuBt1hrjsHeBxFX91Rn6",
    track_name: "in the pool",
    artist: "kensuke ushio",
    album_name:
      "CHAINSAW MAN THE MOVIE: REZE ARC original soundtrack -summer's end-",
    image_url:
      "https://i.scdn.co/image/ab67616d0000b2735bf8b362e97fdbfbb8ea4685",
    average_color: [112, 116, 117, 255],
  },
  {
    track_id: "spotify:track:6z1kLsntE7FuzKZHZWrXYN",
    track_name: "instagram",
    artist: "DEAN",
    album_name: "instagram",
    image_url:
      "https://i.scdn.co/image/ab67616d0000b2734ee9dc60013d5648d0f23bcc",
    average_color: [170, 171, 171, 255],
  },
  {
    track_id: "spotify:track:0NDKrxRuw0H3tZxbpYIhze",
    track_name: "I Caught Myself",
    artist: "Paramore",
    album_name: "I Caught Myself",
    image_url:
      "https://i.scdn.co/image/ab67616d0000b273eff73e0f01f187ab1ce996f8",
    average_color: [88, 80, 76, 255],
  },
  {
    track_id: "spotify:track:1D7e5XHuTiflRfS3iU97Yo",
    track_name: "So Far Above Me (Broke and Breaking)",
    artist: "Storrs.",
    album_name: "Storrs",
    image_url:
      "https://i.scdn.co/image/ab67616d0000b273df2ec04e6f9ad9e42b429bdf",
    average_color: [153, 135, 118, 255],
  },
  {
    track_id: "spotify:track:4dyx5SzxPPaD8xQIid5Wjj",
    track_name: "Young Folks",
    artist: "Peter Bjorn and John",
    album_name: "Writer's Block",
    image_url:
      "https://i.scdn.co/image/ab67616d0000b2739cf4ac84b224a02f34d2e4f6",
    average_color: [175, 178, 179, 255],
  },
  {
    track_id: "spotify:track:4CBfY6tYGrm6o5wluoPKaT",
    track_name: "Scream Drive Faster",
    artist: "LAUREL",
    album_name: "Scream Drive Faster",
    image_url:
      "https://i.scdn.co/image/ab67616d0000b27355e00e99a232c2117de6c00a",
    average_color: [70, 111, 159, 255],
  },
  {
    track_id: "spotify:track:7jTLS32BMC2UyTTjEUW6BT",
    track_name: "That's Life",
    artist: "Lady Gaga",
    album_name: "Harlequin",
    image_url:
      "https://i.scdn.co/image/ab67616d0000b2738c6bfaa9549f8438bcafb668",
    average_color: [141, 145, 114, 255],
  },
  {
    track_id: "spotify:track:57uX2vR9j9DNiANDYfXw1i",
    track_name: "Never Say Never",
    artist: "The Fray",
    album_name: "The Fray",
    image_url:
      "https://i.scdn.co/image/ab67616d0000b27392b32435efed601fc8f1045d",
    average_color: [115, 103, 69, 255],
  },
  {
    track_id: "spotify:track:0EqH5Wz93cJtfUGv3vtQPY",
    track_name: "29 Intro",
    artist: "J. Cole",
    album_name: "The Fall-Off",
    image_url:
      "https://i.scdn.co/image/ab67616d0000b27380788f104c780412212e97e3",
    average_color: [171, 142, 136, 255],
  },
  {
    track_id: "spotify:track:1BLCLnPdaht6Y7XlaMSBYu",
    track_name: "Playing with Fire",
    artist: "Nick Leng",
    album_name: "Drivers",
    image_url:
      "https://i.scdn.co/image/ab67616d0000b273d1b4834a5da6b3c077699758",
    average_color: [29, 29, 29, 255],
  },
  {
    track_id: "spotify:track:4waPZF96vX1Oz5pzH6dB0h",
    track_name: "I'll Take Care of You (feat. Yebba)",
    artist: "Tyler, The Creator",
    album_name: "DON'T TAP THE GLASS",
    image_url:
      "https://i.scdn.co/image/ab67616d0000b2734b7fbb849ed845ddedcce346",
    average_color: [232, 224, 218, 255],
  },
  {
    track_id: "spotify:track:1eyzqe2QqGZUmfcPZtrIyt",
    track_name: "Midnight City",
    artist: "M83",
    album_name: "Hurry Up, We're Dreaming",
    image_url:
      "https://i.scdn.co/image/ab67616d0000b27390e9adff5f77dd1ff6d24e47",
    average_color: [72, 60, 71, 255],
  },
  {
    track_id: "spotify:track:3wJrBiiTIRRfKSL2TQWR60",
    track_name: "Delilah (pull me out of this)",
    artist: "Fred again..",
    album_name: "Actual Life 3 (January 1 - September 9 2022)",
    image_url:
      "https://i.scdn.co/image/ab67616d0000b2737d34227aa022d09d8f4b62f5",
    average_color: [24, 57, 175, 255],
  },
  {
    track_id: "spotify:track:03EdQABuvf0suFxxbqdYBl",
    track_name: "Shock The World - Melody Version",
    artist: "That Boy Franco",
    album_name: "Shock The World (Melody Version)",
    image_url:
      "https://i.scdn.co/image/ab67616d0000b273cabf270b5bae1900283f07d4",
    average_color: [149, 125, 121, 255],
  },
  {
    track_id: "spotify:track:21o0j5Lyo210rlEOgyGYVB",
    track_name: "It Feels the Same Everyday",
    artist: "Yellow House",
    album_name: "A Carnival of Fears",
    image_url:
      "https://i.scdn.co/image/ab67616d0000b273238d9d43908b01587500d8cf",
    average_color: [138, 133, 99, 255],
  },
];

const toEncodedHSL = (rgba) => {
  if (!rgba || rgba.length < 3 || rgba[3] === 0) return null;
  const r = rgba[0] / 255;
  const g = rgba[1] / 255;
  const b = rgba[2] / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  const c = max - min;

  if (c === 0) {
    return [0, 0, 1];
  }

  const s = l <= 0.5 ? c / (max + min) : c / (2 - max - min);

  let h;
  if (max === r) {
    h = (g - b) / c + (g < b ? 6 : 0);
  } else if (max === g) {
    h = (b - r) / c + 2;
  } else {
    h = (r - g) / c + 4;
  }
  h *= 60;
  const hRad = (h * Math.PI) / 180;
  return [Math.sin(hRad) * s, Math.cos(hRad) * s, l];
};

const prepareSongs = (songs) =>
  songs
    .map((song) => ({
      song,
      vector: toEncodedHSL(song.average_color),
    }))
    .filter(({ vector }) => vector !== null);
