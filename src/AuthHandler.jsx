import { useEffect } from 'react';
import { supabase } from './lib/supabase';

function AuthHandler() {
  useEffect(() => {
    const handleInvite = async () => {
      const { data, error } = await supabase.auth.getSessionFromUrl();
      if (error) {
        console.error('Error completing login:', error.message);
      } else {
        console.log('Logged in user:', data.session.user);
        // Optionally redirect to home/dashboard
        window.location.href = '/'; // redirect to homepage
      }
    };
    handleInvite();
  }, []);

  return <p>Logging you in...</p>;
}

export default AuthHandler;
