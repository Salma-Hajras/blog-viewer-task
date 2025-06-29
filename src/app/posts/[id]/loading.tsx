export default function Loading() {
  return (
    <div className="p-6 bg-white rounded shadow text-center animate-pulse space-y-4 max-w-2xl mx-auto mt-10">
      <div className="h-6 bg-gray-300 rounded w-2/3 mx-auto" />
      <div className="h-4 bg-gray-200 rounded w-5/6 mx-auto" />
      <div className="h-4 bg-gray-200 rounded w-4/6 mx-auto" />
    </div>
  );
}
