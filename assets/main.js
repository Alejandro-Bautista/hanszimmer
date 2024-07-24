const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCJeBQabyLa_FvMxb6G67lkw&part=snippet%2Cid&order=date&maxResults=50';

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '459eef686fmsh33159e2bbec4956p1be966jsncf67ed4e76fa',
		'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi){
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async () => {
    try{
        const ultimosVideos = await fetchData(API);
        let view = `
        ${ultimosVideos.items.map(ultimosVideos => `
          <div class="group relative">
            <div
              class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
              <img src="${ultimosVideos.snippet.thumbnails.high.url}" alt="${ultimosVideos.snippet.description}" class="w-full">
            </div>
          <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
              <span aria-hidden="true" class="absolute inset-0"></span>
              ${ultimosVideos.snippet.title}
            </h3>
           </div>
         </div>
          `).slice(0,4).join('')}
        `;
        content.innerHTML = view;
    }catch (err){
      console.log(err);
    }
})();






