export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const mangaById = await fetch(
    "https://api.jikan.moe/v4/manga/" + query.id + "/full"
  );
  const mangas = mangaById.json();
  return mangas
});
