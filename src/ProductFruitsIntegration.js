import { useEffect, useState } from 'react';
import { ProductFruits } from 'react-product-fruits';

const PROJECT_CODE = process.env.REACT_APP_PRODUCT_FRUIT_CODE;

export default function ProductFruitsIntegration({ userInfo }) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const listener = function() { 
      console.log('Product Fruits is ready!');
      setIsReady(true);
    };
    window.addEventListener('productfruits_ready', listener);
    return () => {
      window.removeEventListener('productfruits_ready', listener);
      setIsReady(false);
    };
  }, []);

  useEffect(() => {
    if (!userInfo) { return; }
    console.log('ProductFruitsIntegration mounted');
    return () => {
      console.log('ProductFruitsIntegration cleanup');
      window?.productFruits?.services?.destroy?.();
      setIsReady(false);
    };
  }, [userInfo]);

  // useEffect(() => {
  //   if (!isReady) { return; }
  //   const api = window.productFruits.api;
  //   console.log('Product Fruits API', api);
  //   api.button.listen('closed', () => {
  //     console.log('Product Fruits button closed');
  //   });
  //   api.checklists.markItemAsDone('inviteUserModal');
  //   api.checklists.markItemAsDone('buildMode');
  //   api.checklists.markItemAsDone('userPreferencesModal');
  //   api.checklists.listen('item-launched', (_, internalId) => {
  //     console.log('Product Fruits item launched', internalId);
  //   });
  // }, [isReady]);

  if (!userInfo) { return null; }

  console.log('ProductFruitsIntegration render');

  return (
    <ProductFruits workspaceCode={PROJECT_CODE} language="en" user={userInfo} />
  );
}
