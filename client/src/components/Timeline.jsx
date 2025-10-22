import { useEffect, useMemo, useRef } from 'react';

const getInitials = (text) =>
  (text || '')
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

const Timeline = ({ items }) => {
  const listRef = useRef(null);
  const progressRef = useRef(null);

  const sortedItems = useMemo(() => items.slice(), [items]);

  useEffect(() => {
    const listElement = listRef.current;
    const cardElements = listElement?.querySelectorAll('li');
    if (!listElement || !cardElements || cardElements.length === 0) {
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
      { threshold: 0.15 }
    );

    cardElements.forEach((el) => observer.observe(el));

    const updateProgress = () => {
      const container = listElement.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const start = Math.max(0, viewportHeight * 0.1 - container.top);
      const total = container.height * 0.98;
      const clamped = Math.max(0, Math.min(total, start));
      if (progressRef.current) {
        progressRef.current.style.height = `${clamped}px`;
      }
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, [sortedItems]);

  return (
    <section className="timeline" aria-label="Career timeline">
      <div className="timeline-track" aria-hidden="true" />
      <div className="timeline-progress" ref={progressRef} aria-hidden="true" />
      <ul ref={listRef}>
        {sortedItems.map((item, index) => {
          const initials = getInitials(item.company);
          const side = index % 2 === 0 ? 'left' : 'right';
          return (
            <li key={`${item.company}-${item.period}`} className={`timeline-item ${side}`}>
              <span className="timeline-node" aria-hidden="true">
                <span className="timeline-node__inner">{initials}</span>
              </span>
              <article className="timeline-card" aria-label={`${item.title || item.role} at ${item.company}`}>
                <header className="timeline-card__header">
                  <h6 className="h5 company mb-1">{item.company}</h6>
                  <span className="time-label">{item.period}</span>
                </header>
                <p className="mb-1 role">{item.role}</p>
                <p className="mb-0 location text-white-50">{item.location}</p>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Timeline;
