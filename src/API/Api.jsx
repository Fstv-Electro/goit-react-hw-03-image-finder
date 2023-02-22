

export default async function fetchQuery(inputValue, page = 1) {
    const url = 'https://pixabay.com/api/';
    const API_KEY = '31643435-c42a12112cebd9cccb736a8a1';
    
    return await fetch(
        `${url}?q=${inputValue}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    ).then(res => res.json());
}

