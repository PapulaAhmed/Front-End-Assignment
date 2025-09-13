interface TestimonialCardProps {
  title?: string;
  text: string;
}

const TestimonialCard = ({ title, text }: TestimonialCardProps) => {
  return (
    <div
      className="rounded-2xl bg-white outline-none p-8 flex flex-col"
      style={{ boxShadow: "0 4px 10px 0 rgba(0, 0, 0, 0.05)" }}
    >
      {title ? (
        <div>
          <h4 className="font-medium text-slate-900 mb-4">{title}</h4>
        </div>
      ) : null}
      <p className="text-slate-600 text-sm leading-relaxed">{text}</p>
    </div>
  );
};

export default TestimonialCard;
