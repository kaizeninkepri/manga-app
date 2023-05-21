export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const response = await fetch(
    "https://api.jikan.moe/v4/manga/" + query.id + "/characters"
  );
  const data = response.json();

  return   data;
});
