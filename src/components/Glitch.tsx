export default function Glitch({ title }: { title: string }) {
  return (
    <div className="glitch text-4xl lg:text-5xl" data-text={title}>
      {title}
    </div>
  );
}
