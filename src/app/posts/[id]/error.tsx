'use client';

interface ErrorProps {
  error: Error;
}

export default function Error({ error }: ErrorProps) {
  return (
    <div className="p-8 bg-white rounded shadow text-center space-y-4 max-w-2xl mx-auto mt-10">
      <h2 className="text-2xl font-bold text-red-700">Something went wrong</h2>
      <p className="text-gray-700">{error.message}</p>
      <p className="text-sm text-gray-500">Please try again later or go back to the homepage.</p>
    </div>
  );
}
