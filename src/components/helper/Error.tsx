import React from 'react';

function Error({ error }: { error: string }) {
  if (!error) return null;
  return <p className="text-ColorRed text-lg mx-4 mb-[100vh]">{error}</p>;
}

export default Error;
