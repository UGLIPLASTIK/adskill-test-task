import OffersPage from '@/pages/OffersPage';
import { Suspense } from 'react';
function App() {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <OffersPage />
    </Suspense>
  );
}

export default App;
