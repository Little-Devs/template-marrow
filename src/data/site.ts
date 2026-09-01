export const site = {
  logo: { text: "Marrow", mark: "MR" },
  fonts: { display: "Teko", body: "Karla", mono: "IBM Plex Mono" },
  colors: {
    bone: "#e8dcc8",
    iron: "#1a1714",
    oxblood: "#6b1c23",
    rust: "#8a3a2a",
    chalk: "#f4efe6",
    steel: "#6e675e",
  },
  meta: {
    title: "Marrow — Brunswick strength gym",
    description: "A barbell club on Sydney Road. Squat, bench, deadlift, press. Not a 24-hour cardio box.",
  },
  contact: {
    email: "sales@little.cloud",
    phone: "+61 3 9387 0144",
    phoneHref: "tel:+61393870144",
    address: "412 Sydney Road, Brunswick VIC 3056",
  },
  sections: {
    hero: true,
    board: true,
    programming: true,
    floor: true,
    coaches: true,
    contact: true,
  },
  nav: [
    { href: "#board", label: "This week's board", section: "board" as const },
    { href: "#programming", label: "Programming", section: "programming" as const },
    { href: "#floor", label: "The floor", section: "floor" as const },
    { href: "#coaches", label: "Coaches", section: "coaches" as const },
    { href: "#contact", label: "Come lift", section: "contact" as const },
  ],
  hero: {
    kicker: "Barbell club · Sydney Road",
    titleHtml: "Iron in the <em>marrow.</em>",
    lead: "Marrow is a strength gym in Brunswick. Powerlifting and barbell work. Chalk, knurling, a board for the week. No spin class. No smoothie bar.",
    primaryCta: { label: "Come lift", href: "mailto:sales@little.cloud?subject=Marrow%20enquiry" },
    secondaryCta: { label: "This week's board", href: "#board" },
    caption: "Deadlift platform · 412 Sydney Road",
  },
  board: {
    kicker: "Posted Monday 05:30",
    title: "This week's main lifts",
    week: "Week of 1 Sep",
    note: "Kilos on the bar, not on an app. If you are new, take the empty bar and ask.",
    lifts: [
      { name: "Squat", sets: "5 × 5", load: "110", unit: "kg", note: "Belt on the last two. No bounce." },
      { name: "Bench", sets: "5 × 5", load: "82.5", unit: "kg", note: "Pause. Spotter on the 5s." },
      { name: "Deadlift", sets: "3 × 3", load: "150", unit: "kg", note: "Conventional. Mixed grip optional." },
      { name: "Press", sets: "5 × 3", load: "55", unit: "kg", note: "Strict. No dip." },
    ],
  },
  programming: {
    kicker: "How the week is built",
    title: "Three days. Four lifts.",
    items: [
      { title: "Strength", body: "The board is the program. Squat, bench, deadlift, press. Percentages live on the whiteboard, not in a PDF." },
      { title: "Accessories", body: "Rows, chins, back-offs after the main lift. Nothing that needs a cable jungle." },
      { title: "Open floor", body: "Saturday is unprogrammed. You bring a plan or you copy the board. Coaches walk the room." },
    ],
  },
  floor: {
    kicker: "The room",
    title: "Racks, plates, a floor that takes chalk.",
    shots: [
      { src: "/rack.jpg", alt: "Squat rack", label: "Racks" },
      { src: "/plates.jpg", alt: "Iron plates", label: "Plates" },
      { src: "/barbell.jpg", alt: "Barbell and plates", label: "Bars" },
      { src: "/floor.jpg", alt: "Gym floor", label: "Floor" },
    ],
    items: [
      { title: "Four racks", body: "Power racks, not Smiths. Knurled bars that still have knurling." },
      { title: "Calibrated plates", body: "Kilos, not pounds. Bumper only on the deadlift platform." },
      { title: "Chalk allowed", body: "On your hands and on the bar. Not on the walls. The board is the one exception." },
    ],
  },
  coaches: {
    kicker: "Who writes the board",
    title: "Three coaches. One voice.",
    people: [
      { name: "Nia Vlahos", role: "Head coach", img: "/rack.jpg", alt: "Squat rack, cropped", note: "Started on this floor. Writes the week's kilos." },
      { name: "Tom Reeve", role: "Powerlifting", img: "/barbell.jpg", alt: "Barbell plates", note: "Competition prep. No pep talks." },
      { name: "Sam Okonkwo", role: "Beginners", img: "/chalk.jpg", alt: "Chalked hands", note: "Empty bar first. Then the board." },
    ],
  },
  hours: [
    { days: "Mon–Thu", time: "05:30–21:00" },
    { days: "Fri", time: "05:30–19:00" },
    { days: "Sat", time: "07:00–14:00 open floor" },
    { days: "Sun", time: "Closed — recover" },
  ],
  footer: {
    credit: "Marrow — a Little-Devs template",
    note: "MIT. Pixabay: barbell rockstar_747; rack 9to5strength; chalk Engin_Akyurt; plates kenny; floor Pexels; lift 12019.",
  },
} as const;

export type Site = typeof site;
