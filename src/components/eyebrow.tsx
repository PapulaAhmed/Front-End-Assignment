interface EyebrowProps {
  label: string;
}

const Eyebrow = ({ label }: EyebrowProps) => {
  return (
    <span className="text-xs font-medium tracking-wide rounded-md px-3 py-1 inline-block border border-slate-200">
      {label}
    </span>
  );
};

export default Eyebrow;
