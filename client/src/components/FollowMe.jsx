import React from 'react';

const socials = [
  { id: 'github', label: 'GitHub', icon: 'fab fa-github', href: 'https://github.com/gundlasiddhartha', aria: 'Open GitHub profile' },
  { id: 'linkedin', label: 'LinkedIn', icon: 'fab fa-linkedin-in', href: 'https://www.linkedin.com/in/gundlasiddhartha/', aria: 'Open LinkedIn profile' },
  { id: 'instagram', label: 'Instagram', icon: 'fab fa-instagram', href: 'https://instagram.com/', aria: 'Open Instagram profile' },
  { id: 'behance', label: 'Behance', icon: 'fab fa-behance', href: 'https://www.behance.net/', aria: 'Open Behance profile' }
];

const FollowMe = () => {
  return (
    <aside className="follow-rail" aria-label="Follow me on social media">
      <div className="rail-inner">
        <span className="rail-stem" aria-hidden="true" />
        <ul className="rail-icons">
          {socials.map((s) => (
            <li key={s.id}>
              <a className="rail-link" href={s.href} target="_blank" rel="noreferrer" aria-label={s.aria} title={s.label}>
                <i className={s.icon} />
              </a>
            </li>
          ))}
        </ul>
        <span className="rail-caption">Follow me</span>
      </div>
    </aside>
  );
};

export default FollowMe;
