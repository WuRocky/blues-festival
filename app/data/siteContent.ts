export const createNavigationItems = (t) => [
  { to: '/', label: t('nav.home') },
  { to: '/registration', label: t('nav.registration') },
  { to: '/teachers', label: t('nav.teachers') },
  { to: '/schedule', label: t('nav.schedule') },
  { to: '/venue', label: t('nav.venue') },
  { to: '/info', label: t('nav.info') },
  { to: '/contact', label: t('nav.contact') },
]

export const createEventMeta = (t) => ({
  name: t('event.name'),
  date: t('event.date'),
  location: t('event.location'),
  venue: t('event.venue'),
  contact: 'hello@bluesicu.com',
})

export const createHomeSections = (t) => ({
  hero: {
    eyebrow: t('home.hero.eyebrow'),
    title: t('home.hero.title'),
    description: t('home.hero.description'),
    primaryCta: { label: t('home.hero.primaryCta'), to: '/registration' },
    secondaryCta: { label: t('home.hero.secondaryCta'), to: '/schedule' },
    stats: [
      { label: t('home.hero.stats.track'), value: t('home.hero.stats.trackValue') },
      { label: t('home.hero.stats.teachers'), value: t('home.hero.stats.teachersValue') },
      { label: t('home.hero.stats.music'), value: t('home.hero.stats.musicValue') },
    ],
  },
  highlights: [
    {
      title: t('home.highlights.0.title'),
      description: t('home.highlights.0.description'),
    },
    {
      title: t('home.highlights.1.title'),
      description: t('home.highlights.1.description'),
    },
    {
      title: t('home.highlights.2.title'),
      description: t('home.highlights.2.description'),
    },
  ],
  audience: [
    {
      title: t('home.audience.0.title'),
      description: t('home.audience.0.description'),
    },
    {
      title: t('home.audience.1.title'),
      description: t('home.audience.1.description'),
    },
    {
      title: t('home.audience.2.title'),
      description: t('home.audience.2.description'),
    },
  ],
  restructure: [
    t('home.restructure.0'),
    t('home.restructure.1'),
    t('home.restructure.2'),
    t('home.restructure.3'),
    t('home.restructure.4'),
    t('home.restructure.5'),
  ],
})

export const scheduleSections = [
  {
    day: 'Friday',
    titleKey: 'schedule.days.friday.title',
    itemsKeys: [
      'schedule.days.friday.items.0',
      'schedule.days.friday.items.1',
      'schedule.days.friday.items.2',
    ],
  },
  {
    day: 'Saturday',
    titleKey: 'schedule.days.saturday.title',
    itemsKeys: [
      'schedule.days.saturday.items.0',
      'schedule.days.saturday.items.1',
      'schedule.days.saturday.items.2',
    ],
  },
  {
    day: 'Sunday',
    titleKey: 'schedule.days.sunday.title',
    itemsKeys: [
      'schedule.days.sunday.items.0',
      'schedule.days.sunday.items.1',
      'schedule.days.sunday.items.2',
    ],
  },
]

export const teacherSections = [
  {
    titleKey: 'teachers.sections.partner.title',
    descriptionKey: 'teachers.sections.partner.description',
  },
  {
    titleKey: 'teachers.sections.solo.title',
    descriptionKey: 'teachers.sections.solo.description',
  },
  {
    titleKey: 'teachers.sections.music.title',
    descriptionKey: 'teachers.sections.music.description',
  },
]

export const teacherProfiles = [
  {
    name: 'Damon Stone',
    roleKey: 'teachers.roles.partner',
    description:
      'Damon has been dancing his entire life, starting with vernacular Jazz/Blues first taught to him at the age of six by his grandmother. After nearly a decade of learning from his elders, he continued studying numerous dance forms and in 1995 returned his focus to the history and styles of Swing and Blues, especially the Southern styles of the Mississippi Delta region. He has studied the development of vernacular Jazz and Blues dance across the United States, learning directly from a number of the original dancers.',
  },
  {
    name: 'Kelsy Stone',
    roleKey: 'teachers.roles.partner',
    description:
      'Kelsy brings a lifetime of dance training, a passion for vernacular dance, and a sharp eye for technique to the Blues dance world. She has taught, mentored, coordinated competitions, and judged at major events in the US and abroad including bluesSHOUT!, The Experiment, Muse, Hearken the Blues, Black Label Blues, and BluesGeek. Her teaching balances deep technique, musical joy, humor, and a serious respect for African American cultural roots. She believes every mistake is a chance to learn, every class a challenge, and every dance an opportunity to honor those who came before.',
  },
  {
    name: 'Catherine Palmier',
    roleKey: 'teachers.roles.solo',
    description:
      "Catherine Palmier assists individuals in unleashing one's authentic movement, offering guided explorations that refine dance through grounded organic movement, effortless power, and fluid grace. With more than 22 years of professional dance experience, academic training, and knowledge across multiple styles, she helps dancers discover the origin and understanding of their movement. Drawing from performance concepts, emotions, visualization, memory, body mechanics, sensation, and alignment, she supports students in developing insight, playfulness, enthusiasm, and a signature style. Her sensitivity across styles and ability to reveal the limitless nature of African dance make her a strong asset for dancers of any genre or experience.",
  },
]

export const musicianProfiles = [
  {
    name: 'The Five Box',
    roleKey: 'teachers.roles.liveBand',
    meta: 'Japan, 3 to 4 musicians',
    description:
      'Suitable to present as the main band on the site and connect directly to the marquee party or featured performance slot.',
  },
  {
    name: 'Stef Rosen',
    roleKey: 'teachers.roles.soloMusician',
    meta: 'Germany, solo musician',
    description:
      'Works well as a featured concert or intimate set highlight and should be clearly presented as a solo musician rather than a small footnote.',
  },
]

export const registrationSections = [
  {
    titleKey: 'registration.sections.passes.title',
    pointsKeys: [
      'registration.sections.passes.points.0',
      'registration.sections.passes.points.1',
      'registration.sections.passes.points.2',
      'registration.sections.passes.points.3',
    ],
  },
  {
    titleKey: 'registration.sections.levels.title',
    pointsKeys: [
      'registration.sections.levels.points.0',
      'registration.sections.levels.points.1',
      'registration.sections.levels.points.2',
      'registration.sections.levels.points.3',
    ],
  },
  {
    titleKey: 'registration.sections.decision.title',
    pointsKeys: [
      'registration.sections.decision.points.0',
      'registration.sections.decision.points.1',
      'registration.sections.decision.points.2',
    ],
  },
]

export const infoSections = [
  {
    titleKey: 'info.sections.audience.title',
    descriptionKey: 'info.sections.audience.description',
  },
  {
    titleKey: 'info.sections.format.title',
    descriptionKey: 'info.sections.format.description',
  },
  {
    titleKey: 'info.sections.faq.title',
    descriptionKey: 'info.sections.faq.description',
  },
  {
    titleKey: 'info.sections.policy.title',
    descriptionKey: 'info.sections.policy.description',
  },
]

export const venueSections = [
  {
    titleKey: 'venue.sections.main.title',
    descriptionKey: 'venue.sections.main.description',
  },
  {
    titleKey: 'venue.sections.stay.title',
    descriptionKey: 'venue.sections.stay.description',
  },
  {
    titleKey: 'venue.sections.transport.title',
    descriptionKey: 'venue.sections.transport.description',
  },
]

export const contactSections = [
  {
    titleKey: 'contact.sections.primary.title',
    descriptionKey: 'contact.sections.primary.description',
  },
  {
    titleKey: 'contact.sections.social.title',
    descriptionKey: 'contact.sections.social.description',
  },
  {
    titleKey: 'contact.sections.partnership.title',
    descriptionKey: 'contact.sections.partnership.description',
  },
]

export const aboutSections = [
  {
    titleKey: 'about.sections.vision.title',
    descriptionKey: 'about.sections.vision.description',
  },
  {
    titleKey: 'about.sections.curatorial.title',
    descriptionKey: 'about.sections.curatorial.description',
  },
  {
    titleKey: 'about.sections.community.title',
    descriptionKey: 'about.sections.community.description',
  },
]
