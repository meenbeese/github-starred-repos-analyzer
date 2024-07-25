(async () => {
    const fetch = (await import('node-fetch')).default;

    async function getStarredRepos(username) {
        let repos = [];
        let page = 1;
        let perPage = 100;
        let fetchedRepos;

        do {
            const response = await fetch(`https://api.github.com/users/${username}/starred?page=${page}&per_page=${perPage}`);
            fetchedRepos = await response.json();
            repos = repos.concat(fetchedRepos);
            page++;
        } while (fetchedRepos.length === perPage);

        return repos;
    }

    async function analyzeLanguages(username) {
        const repos = await getStarredRepos(username);
        const languageCount = {};

        repos.forEach(repo => {
            const language = repo.language;
            if (language) {
                if (!languageCount[language]) {
                    languageCount[language] = 0;
                }
                languageCount[language]++;
            }
        });

        const totalStarredRepos = repos.length;
        console.log(`\nTotal Starred Repos: ${totalStarredRepos}`);
        console.log('\nLanguage        Count');
        console.log('---------------------');

        const sortedLanguages = Object.entries(languageCount).sort((a, b) => b[1] - a[1]);
        sortedLanguages.forEach(([language, count]) => {
            console.log(`${language.padEnd(15)} ${count}`);
        });
    }

    const username = process.argv[2];
    if (!username) {
        console.error('Please provide a GitHub username as a command line argument.');
        process.exit(1);
    }

    analyzeLanguages(username);
})();
