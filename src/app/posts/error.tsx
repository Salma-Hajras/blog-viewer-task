'use client';

interface ErrorProps {
  error: Error;
}

export default function Error({ error }: ErrorProps) {
  return (
    <div className="p-8 bg-white rounded shadow text-center space-y-3 text-red-600">
      <h2 className="text-2xl font-bold">Something went wrong</h2>
      <p>{error.message}</p> {/* لو محتاجة الرسالة */}
    </div>
  );
}
