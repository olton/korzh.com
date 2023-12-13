export function slugify(text) {
    return text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '')
        .replace(/--+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '')
}

export function formatDate (date) {
    return new Date(date).toLocaleDateString('en-US')
}

export function sortDate (a, b) {
    return Date.parse(b.frontmatter.date) - Date.parse(a.frontmatter.date)
}

export function buildToc(headings) {
    if (!headings) return []
    const toc = [];
    const parentHeadings = new Map();
    headings.forEach((h) => {
        const heading = { ...h, subheadings: [] };
        parentHeadings.set(heading.depth, heading);
        // Change 2 to 1 if your markdown includes your <h1>
        if (heading.depth === 2) {
            toc.push(heading);
        } else {
            parentHeadings.get(heading.depth - 1) && parentHeadings.get(heading.depth - 1).subheadings.push(heading);
        }
    });
    return toc;
}