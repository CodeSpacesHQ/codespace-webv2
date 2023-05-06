import { useEffect, useState } from 'react'

const useReadingProgress = () => {
  const [completion, setCompletion] = useState(0);

  useEffect(() =>{
    const updateScrollCompletion = () =>{
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setCompletion((document.documentElement.scrollTop / height) * 100);
    }
    window.addEventListener('scroll', updateScrollCompletion);
  }, [])
  return completion;
}

export default useReadingProgress
