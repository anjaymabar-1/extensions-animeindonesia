function fetchAnimeList() {
  const baseUrl = "https://anichin.cafe";
  const doc = fetchDocument(baseUrl);
  const animeList = [];

  // Memilih elemen yang berisi daftar anime
  const items = doc.select("div#content article");
  for (const item of items) {
    const titleElement = item.select("h2.entry-title a");
    const title = titleElement.text();
    const url = titleElement.attr("href");
    const thumbnail = item.select("img").attr("src");
    const episodeElement = item.select("div.eps a");
    const episode = episodeElement ? episodeElement.text() : "N/A";

    animeList.push({
      title,
      url,
      thumbnail,
      episode
    });
  }

  return animeList;
}
