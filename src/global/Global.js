
export const useFetchData = () => {
    const [fetchedData, setFetchedData] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await fetch(`${BASE_URL}/carts/api/cart-count`);
            const data = await response.json();
            setFetchedData(data.total_quantity);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return { fetchedData, loading, fetchData };
};