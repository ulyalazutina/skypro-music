'use client';

import { useEffect } from 'react';

export default function Error({ error }:{error:string}) {
  useEffect(() => {
    // Логирование ошибки
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Что-то пошло не так!</h2>
      {/* <button onClick={reset}>Попробовать снова</button> */}
    </div>
  );
}