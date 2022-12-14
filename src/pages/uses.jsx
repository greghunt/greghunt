import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Greg Hunt</title>
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title="Software I use, gadgets I love, and other things I recommend."
        intro="I think a lot about my workflow and how I most efficiently get things done. Ironically, I'm probably less efficient from all the thinking about that that I do. In any case, maybe my workflow can inspire someone elses' as well."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="16” MacBook Pro, Core i7, 16GB RAM (2019)">
              This has been my work horse for the past 3 years. The 16" screen
              allows me to use it as a desktop so I don't have to switch from
              laptop to desktop. I am planning on upgrading in the near future
              to a MacBook Air M2, since I need to be more mobile and also find
              that the added screen space of the 16" isn't all that necessary.
              In fact, a smaller screen helps me focus on the task at hand.
            </Tool>
            <Tool title="Coffee Shops and Librairies">
              My setup is extremely minimal because I'm working from a variety
              of coffee shops and librairies. They have everything I need and
              are completely free except for my coffee fee which I would pay for
              anyway.
            </Tool>
            <Tool title="Soundcore by Anker Life Q30 Hybrid Active Noise Cancelling Headphones">
              I wouldn't be able to concentrate in most coffee shops sometimes
              without some good noise cancelling headphones. These do the trick.
              Sometimes I even put them on without any music as a sort of "Do
              Not Disturb" signal.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="VS Code">
              I've been using VS Code for awhile now and it's been satisfactory.
              The extension ecosystem has been the best part about it. Although
              recently I'm encoutering a lot of CPU hogging and am considering
              switching to something more efficient.
            </Tool>
            <Tool title="iTerm2">
              It's a terminal a step up from the built in MacOS terminal. I've
              dabbled with Warp as well but it doesn't seem super stable yet.
            </Tool>
            <Tool title="TablePlus">
              Great software for working with databases. Has saved me from
              building about a thousand admin interfaces for my various projects
              over the years.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Figma">
              We started using Figma as just a design tool but now it’s become
              our virtual whiteboard for the entire company. Never would have
              expected the collaboration features to be the real hook.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Writing">
            <Tool title="iPhone with Portable BlueTooth Keyboard">
              Most of my writing is done on the go, at random times and in
              random outdoor places. I used to carry around a notebook but I'm
              just way too slow writing without a keyboard. Since I always have
              my phone on me, I also carry a foldable pocket bluetooth keyboard
              that I connect to my phone and write.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Organization / Productivity">
            <Tool title="Apple Reminders">
              This is my dumping grounds. I filter through it at the end of the
              day, but every thought gets indiscrimately dumped here while I'm
              moving through my day.
            </Tool>
            <Tool title="Obsidian">
              Once I start going through my reminders, I copy what I can over to
              a folder of markdown files I have hosted on the iCloud. I use
              Obsidian to edit them. I've always found myself defaulting to text
              files as my way of self-organizing, so I just doubled down on that
              method.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
