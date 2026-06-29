// Один GROQ-запрос, который возвращает весь контент сайта в форме,
// совпадающей со структурой сид-данных (src/data/*).

export const allContentQuery = `{
  "branches": *[_type == "branch"] | order(order asc) {
    "slug": slug.current, name, short, address, landmark, phone, workingHours, mapUrl, summary,
    "directions": directions[]{ "name": label, "slug": department->slug.current }
  },
  "departments": *[_type == "department"] | order(order asc) {
    "slug": slug.current, name, summary, about, benefits,
    "subdirections": subdirections[]{ "slug": slug, name, summary }
  },
  "networkDirections": *[_type == "department" && inNetwork == true] | order(networkOrder asc) {
    "name": coalesce(networkTitle, name), "slug": slug.current
  },
  "doctors": *[_type == "doctor"] | order(order asc) {
    "slug": slug.current, name, position,
    "department": department->name, "departmentSlug": department->slug.current,
    audience, experienceYears, priceInitial, priceRepeat,
    competencies, education, experienceText, additionalInfo,
    "photo": photo.asset->url
  },
  "serviceCategories": *[_type == "serviceCategory"] | order(order asc) {
    "slug": slug.current, name, summary,
    "items": items[]{ "slug": slug, name, price }
  },
  "analizyCategories": *[_type == "analizCategory"] | order(order asc) {
    "slug": slug.current, name,
    "items": items[]{ "slug": slug, name, price }
  },
  "promos": *[_type == "promo"] | order(order asc) {
    "slug": slug.current, title, validUntil, conditions
  },
  "news": *[_type == "newsArticle"] | order(order asc) {
    "slug": slug.current, title, excerpt, publishedAt, body, "cover": cover.asset->url
  },
  "vacancies": *[_type == "vacancy"] | order(order asc) {
    "slug": slug.current, title, department, type
  },
  "gobmpArticles": *[_type == "gobmpArticle"] | order(order asc) {
    "slug": slug.current, title, excerpt
  },
  "testimonials": *[_type == "testimonial" && published == true] | order(order asc) {
    author, text, rating, date
  },
  "siteSettings": *[_type == "siteSettings"][0] {
    phones, email, workingHours, partners,
    "schedule": schedule[]{ service, hours },
    "addresses": addresses[]{ short, full, mapUrl }
  },
  "aboutPage": *[_type == "aboutPage"][0] {
    "leadership": leadership[]{ name, role, bio },
    "historyTimeline": historyTimeline[]{ year, event },
    "certificates": certificates[]{ slug, title }
  },
  "charityPage": *[_type == "charityPage"][0] { paragraphs },
  "corporatePage": *[_type == "corporatePage"][0] { paragraphs },
  "privacyPage": *[_type == "privacyPage"][0] { "sections": sections[]{ title, text } }
}`
