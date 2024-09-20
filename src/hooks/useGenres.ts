import useData from './useData';

export interface Genre {
    id: number;
    name: string; 
    slug : string;
    games_count: number,
    image_background: string,
}

const useGenres = () => {

    const { data, error, isLoading } = useData<Genre>('/genres');

    return { data, error, isLoading };
}

export default useGenres