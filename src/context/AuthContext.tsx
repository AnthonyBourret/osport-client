import React, {
 createContext, useState, FunctionComponent, ReactNode, useEffect,
} from 'react';
import { useCookies } from 'react-cookie';
import axiosInstance from '../services/axiosInstance';

// Définir le type pour le contexte
interface AuthContextProps {
  user: UserProfile | null;
  logUser: (cleanUsername: string, password: string) => Promise<string>;
  isAuth: boolean;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

interface UserInfo {
  userId: number;
}

interface UserProfile {
  message: string;
  userInfos: UserInfo;
}

// Définir le type pour les props du fournisseur du contexte
interface AuthContextProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthContextProvider: FunctionComponent<AuthContextProviderProps> = ({ children }) => {
  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  const [user, setUser] = useState<UserProfile | null>(cookies.user || null);
  const [isAuth, setIsAuth] = useState<boolean>(null);

  useEffect(() => {
    setCookie('user', user);
  }, [user, setCookie]);

    const storeCredentials = (payload: UserProfile): void => {
    setUser(payload);
    setCookie('user', payload);
  };

  const validateUser = async (): Promise<void> => {
    try {
      const response = await axiosInstance.get('/user/validate');
      if (response.status === 200) {
        storeCredentials(response.data);
        setIsAuth(true);
      }
    } catch (e) {
      setIsAuth(false);
      console.error('Une erreur s\'est produite lors de la récupération des données de l\'utilisateur', e);
    }
  };

  // wrap in useMemo or useCallback
  const logUser = async (cleanUsername: string, password: string): Promise<string> => {
    let errorMessage = '';

    try {
      const response = await axiosInstance.post('/signin', {
        username: cleanUsername,
        password,
      });

      if (response.status === 200 && response.data.error !== 'Invalid input') {
        validateUser();
      } else if (response.status === 200 && response.data.error === 'Invalid input') {
        setIsAuth(false);
        errorMessage = 'Votre nom d\'utilisateur ou votre mot de passe est incorrect.';
      } else {
        setIsAuth(false);
        errorMessage = 'Une erreur inattendue s\'est produite lors de la connexion au serveur.';
      }
    } catch (e) {
      console.error('Une erreur s\'est produite lors de l\'attente de la réponse', e);
    }
    return errorMessage;
  };

  useEffect(() => {
    validateUser();
 }, []);

  return (
    <AuthContext.Provider value={{
 user,
logUser,
isAuth,
setIsAuth,
}}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
