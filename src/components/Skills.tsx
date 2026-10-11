'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Tilt } from './Tilt';
import { AnimatedGroup, AnimatedGroupItem } from './motion-primitives/AnimatedGroup';
import { skillCategories } from '@/data/skills';

export function Skills() {
  return (
    <section
      id="skills"
      className="section bg-transparent"
      aria-labelledby="skills-heading"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="kicker">
            <span className="kicker-dot" aria-hidden="true" />
            07 // Stack
          </span>
          <h2 id="skills-heading" className="heading-lg mb-4">
            Technical Skills
          </h2>
          <p className="body text-textSecondary">
            Technologies and tools I work with, organized by domain.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <Tilt key={category.category} className="h-full">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.08, ease: [0.19, 1, 0.22, 1] }}
              className={cn(
                'card group relative overflow-hidden h-full',
                category.category === 'CURRENTLY LEARNING' && 'ring-1 ring-accent/30'
              )}
              tabIndex={0}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-normal" aria-hidden="true" />

              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-2">
                  <span className={cn(
                    'tag-accent text-caption',
                    category.category === 'CURRENTLY LEARNING' && 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                  )}>
                    {category.category}
                  </span>
                </div>

                <AnimatedGroup
                  preset="scale"
                  stagger={0.035}
                  className="flex flex-wrap gap-2"
                  role="list"
                  aria-label={`${category.category} skills`}
                >
                  {category.skills.map((skill) => (
                    <AnimatedGroupItem
                      key={skill}
                      preset="scale"
                      className={cn(
                        'tag group/skill',
                        category.category === 'CURRENTLY LEARNING' && 'border-amber-500/30 text-amber-400 hover:border-amber-500 hover:bg-amber-500/10'
                      )}
                      role="listitem"
                    >
                      {skill}
                    </AnimatedGroupItem>
                  ))}
                  {category.category === 'CURRENTLY LEARNING' && (
                    <span className="cursor-blink self-center" aria-hidden="true" />
                  )}
                </AnimatedGroup>
              </div>

              <div
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-normal"
                aria-hidden="true"
              />
            </motion.article>
            </Tilt>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.19, 1, 0.22, 1] }}
          className="mt-10 text-center body-sm text-textMuted"
        >
          Skills listed reflect actual experience and current learning focus. No proficiency percentages or exaggerated claims.
        </motion.p>
      </div>
    </section>
  );
}