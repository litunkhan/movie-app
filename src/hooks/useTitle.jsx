import { useEffect } from 'react';

const useTitle = (title) => {
    
        useEffect(() => {
           
           document.title = `Movie-X ||${title}`;
        
           return () => {
            document.title = 'Movie-X ||'; // Set your default title here
          };
           
          }, [title]); 
    
};

export default useTitle;