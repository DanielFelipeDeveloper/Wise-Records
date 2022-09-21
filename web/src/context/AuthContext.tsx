import cookie from 'js-cookie';

import { createContext, ReactNode, useContext, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, User } from 'firebase/auth';
import { useRouter } from 'next/router';
import { firebase } from '../services/firebase';

interface AuthContextData {
  user: User;
  loading: boolean;
  signInGoogle: () => void;
  signOut: () => void;
}

interface AuthContextProviderProps {
  children: ReactNode;
}

const AuthContext = createContext({} as AuthContextData);

const useAuth = () => useContext(AuthContext);

const firebaseAuth = getAuth(firebase);

const AuthContextProvider = ({ children } : AuthContextProviderProps) => {
  const router = useRouter();
  const [user, setUser] = useState<User>(null);
  const [loading, setLoading] = useState(false);

  const setSession = (refreshToken: string | false) => {
    if (refreshToken) {
      cookie.set('WiseRecords-RefreshToken', refreshToken, {
        expires: 1,
      });
    } else {
      cookie.remove('@WiseRecords-RefreshToken');
    }
  };

  const signInGoogle = async () => {
    try {
      setLoading(true);
      const { user: googleUser } = await signInWithPopup(firebaseAuth, new GoogleAuthProvider());

      console.log(googleUser);

      setUser(googleUser);
      setSession(googleUser.refreshToken);
      router.push('/');
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    try {
      setLoading(true);

      firebaseAuth.signOut();
      setUser(null);
      setSession(false);
      router.push('/');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ signInGoogle, signOut, user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider, useAuth };
