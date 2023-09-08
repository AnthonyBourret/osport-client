import { useEffect, useState } from 'react';
import axiosInstance from '../../services/axiosInstance';

const useFetch = (url: string, method: string): { loading: boolean, data: any, error: string } => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchdata = async () => {
      setLoading(true);

      try {
        if (method === 'GET') {
          const res = await axiosInstance.get(url);
          setData(res.data.data);
          setLoading(false);
        }
        if (method === 'DELETE') {
          const res = await axiosInstance.delete(url);
          setData(res.data.data);
          setLoading(false);
        }
      } catch (err) {
        console.log(err);
        if (err.response.data.error) {
          setError('Une erreur inattendue s\'est produite lors de la récupération de vos données.');
          setLoading(false);
        }
      }
    };
    fetchdata();
  }, [url, method]);

  return { loading, data, error };
};

export default useFetch;
