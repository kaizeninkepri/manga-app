export default defineEventHandler(async(event) => {
    const query = getQuery(event);
    const mangaById = await fetch(
        // "https://api.jikan.moe/v4/manga/" + query.id + "/full"
        "https://api.mangadex.org/manga?title=" + query.title
    );
    const mangas = mangaById.json();
    return mangas;
});