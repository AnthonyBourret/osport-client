import { useEffect, useState } from 'react';
import axiosInstance from '../../services/axiosInstance';

const useMutation = (url: string, body: any, method: string): { loading: boolean, data: any, error: string } => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    setData(null);
    if (!body) return;
    const fetchdata = async () => {
      setLoading(true);

      try {
        if (method === 'POST') {
          const res = await axiosInstance.post(url, body);
          setData(res.data.data);
          setLoading(false);
        }
        if (method === 'PATCH') {
          const res = await axiosInstance.patch(url, body);
          setData(res.data.data);
          setLoading(false);
          console.log(res);
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
    () => setData(null);
  }, [url, body]);

  return { loading, data, error };
};

export default useMutation;
