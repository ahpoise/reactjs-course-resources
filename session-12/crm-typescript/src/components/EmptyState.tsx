type EmptyStateProps = { message: string };

export function EmptyState({ message }: EmptyStateProps) {
  return (
    <div className="px-6 py-12 text-center text-gray-500 border border-dashed border-gray-300 rounded-lg">
      <p>{message}</p>
    </div>
  );
}
