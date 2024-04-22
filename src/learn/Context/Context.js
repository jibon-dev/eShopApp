const [sliders, setSliders] = useState([]);

  useEffect(() => {
    const fetchSliderData = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/slider-list/`);
        const data = await res.json();
        setSliders(data);
      } catch (error) {
        console.error('Error fetching slider data:', error);
      }
    };
    fetchSliderData();
  }, []);