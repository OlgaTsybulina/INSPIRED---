import { router } from '../router';

export const searchController = formSearch => {
    formSearch.addEventListener ('submit', (e) => {
        e.preventDefault();
        console.log(formSearch.search.value);

        router.navigate(`search?value=${formSearch.search.value}`)

    })
}