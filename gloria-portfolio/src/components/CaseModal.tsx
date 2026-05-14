export default function CaseModal({ open, onClose, data }: any) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="bg-slate p-10 rounded-2xl max-w-xl">
        <h2 className="text-2xl text-gold font-bold">{data.title}</h2>
        <p className="text-gray-300 mt-4">{data.desc}</p>

        <button
          onClick={onClose}
          className="mt-6 bg-gold text-black px-4 py-2 rounded-xl"
        >
          Close
        </button>
      </div>
    </div>
  );
}
