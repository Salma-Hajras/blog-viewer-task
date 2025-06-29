export default function Loading() {
  return (
    <div className="p-8 max-w-2xl mx-auto mt-10 bg-white rounded shadow text-center space-y-4 animate-pulse">
      <div className="h-8 bg-gray-300 rounded w-3/4 mx-auto" />
      <div className="h-4 bg-gray-200 rounded w-full" />
      <div className="h-4 bg-gray-200 rounded w-5/6 mx-auto" />
      <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto" />
    </div>
  );
}
