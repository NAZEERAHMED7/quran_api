document.getElementById('Button').addEventListener('click', fetchQuran);

function fetchQuran() {
    const edition = document.getElementById('option').value;
    const url = `https://api.alquran.cloud/v1/quran/${edition}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const surahs = data.data.surahs;
            let quranHTML = '';

            surahs.forEach(surah => {
                quranHTML += `<h2>${surah.englishName} (${surah.name})</h2>`;
                surah.ayahs.forEach(ayah => {
                    quranHTML += `<p>${ayah.numberInSurah}. ${ayah.text}</p>`;
                });
            });

            document.getElementById('quranText').innerHTML = quranHTML;
        })
        .catch(error => {
            document.getElementById('quranText').innerHTML = '<p>Error fetching Quran data.</p>';
            console.error('Error fetching Quran data:', error);
        });
}




