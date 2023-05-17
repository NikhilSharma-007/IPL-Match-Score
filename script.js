async function getMatchData() {
    return await fetch("https://api.cricapi.com/v1/currentMatches?apikey=2c97023d-87c1-45b3-ba16-b792f6d8abfc&offset=0")

        .then(data => data.json())
        .then(data => {
            if (data.status != "success") return;

            const matchesList = data.data;

            if (!matchesList) return [];

            //add your api key from cricketdata.org
            const relevantData = matchesList.filter(match => match.series_id == "c75f8952-74d4-416f-b7b4-7da4b4e3ae6e").map(match => `${match.name}, ${match.status}`);
            console.log({ relevantData });

            document.getElementById("matches").innerHTML = relevantData.map(match => `<li>${match} </li>`).join('');

            return relevantData;

        })
        .catch(e => console.log(e));
}

getMatchData();
