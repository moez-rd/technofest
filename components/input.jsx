export default function Input({ name, type, label, value, onChange, placeholder }) {
  return (
    <div className="mt-4 flex flex-col space-y-1 text-gray-700">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        className="rounded-lg border-0 bg-gray-200 py-2.5 focus:ring-0"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}
