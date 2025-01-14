// src/pages/About/components/Team.tsx
import React from 'react';
import { teamMembers } from '../utilities/initialData';

const Team: React.FC = () => {
  return (
    <section className="py-8">
      <h2 className="text-3xl font-secondary text-center mb-6">Meet Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {teamMembers.map((member) => (
          <div key={member.id} className="bg-white text-primary p-4 rounded shadow-lg">
            <img src={member.image} alt={member.name} className="w-full h-40 object-cover rounded" />
            <h3 className="text-xl font-primary mt-4">{member.name}</h3>
            <p className="text-sm">{member.position}</p>
            <p className="text-sm">{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
