import Link from 'next/link';
import { Zap, Twitter, Linkedin, Github } from 'lucide-react';
import { Container } from './Container';

const footerLinks = {
  Platform: [
    { label: 'Courses',      href: '/courses'     },
    { label: 'Learning Paths', href: '/paths'     },
    { label: 'Pricing',      href: '/pricing'     },
    { label: 'Reviews',      href: '/reviews'     },
  ],
  Company: [
    { label: 'About',        href: '/about'       },
    { label: 'Blog',         href: '/blog'        },
    { label: 'Careers',      href: '/careers'     },
    { label: 'Contact',      href: '/contact'     },
  ],
  Resources: [
    { label: 'Documentation', href: '/docs'       },
    { label: 'Help Center',   href: '/help'       },
    { label: 'Community',     href: '/community'  },
    { label: 'Changelog',     href: '/changelog'  },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy'  },
    { label: 'Terms of Use',   href: '/terms'    },
    { label: 'Cookie Policy',  href: '/cookies'  },
  ],
};

const socialLinks = [
  { Icon: Twitter,  href: '#', label: 'Twitter'  },
  { Icon: Linkedin, href: '#', label: 'LinkedIn'  },
  { Icon: Github,   href: '#', label: 'GitHub'   },
];

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      <Container className="py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 pb-12 border-b border-slate-800">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-600">
                <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-[1.05rem] font-bold text-white tracking-tight">
                NextSkill <span className="text-brand-400">AI</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-500 max-w-xs">
              AI-powered education for practical skill building. Learn faster, retain more, advance further.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex items-center justify-center w-9 h-9 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4 className="text-sm font-semibold text-white mb-4">{group}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-500 hover:text-slate-200 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            &copy; {new Date().getFullYear()} NextSkill AI. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">
            Built for learners who mean business.
          </p>
        </div>
      </Container>
    </footer>
  );
}
