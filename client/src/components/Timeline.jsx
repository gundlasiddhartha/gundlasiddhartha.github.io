import { useEffect, useRef } from 'react';

const Timeline = ({ items }) => {
  const listRef = useRef(null);

  useEffect(() => {
    const elements = listRef.current?.querySelectorAll('li');
    if (!elements || elements.length === 0) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      {
        threshold: 0.15
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [items]);

  return (
    <section className="timeline">
      <ul ref={listRef}>
        {items.map((item) => (
          <li key={`${item.company}-${item.period}`}>
            <div className="text-white">
              <h6 className="h4">{item.company}</h6>
              <span className="time-label">{item.period}</span>
              <p className="mb-1">{item.role}</p>
              <p className="mb-0">{item.location}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Timeline;
