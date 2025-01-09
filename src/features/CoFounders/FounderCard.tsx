import React from 'react';
import { Linkedin, Twitter, Mail, Github } from 'lucide-react';

interface SocialLinks {
  linkedin: string;
  twitter: string;
  github: string;
  email: string;
}

interface Founder {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  social: SocialLinks;
}

interface FounderCardProps {
  founder: Founder;
}

const FounderCard: React.FC<FounderCardProps> = ({ founder }) => {
  return (
    <div className="w-72 shrink-0 transform cursor-pointer transition-all duration-300 hover:scale-105">
      <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="aspect-[4/5] overflow-hidden">
          <img
            src={founder.image}
            alt={founder.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="mb-1 text-xl font-bold text-white">{founder.name}</h3>
          <p className="mb-2 text-sm font-medium text-purple-400">
            {founder.role}
          </p>
          <p className="mb-4 text-sm text-gray-400">{founder.bio}</p>

          <div className="flex space-x-3">
            <a
              href={founder.social.linkedin}
              className="rounded-full bg-white/10 p-2 backdrop-blur-sm transition-colors hover:bg-purple-500"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={founder.social.twitter}
              className="rounded-full bg-white/10 p-2 backdrop-blur-sm transition-colors hover:bg-purple-500"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a
              href={founder.social.github}
              className="rounded-full bg-white/10 p-2 backdrop-blur-sm transition-colors hover:bg-purple-500"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${founder.social.email}`}
              className="rounded-full bg-white/10 p-2 backdrop-blur-sm transition-colors hover:bg-purple-500"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderCard;
