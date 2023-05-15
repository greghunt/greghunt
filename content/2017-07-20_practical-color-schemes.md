---
title: Practical Color Schemes for Web Design
description: Choosing a color scheme for your website doesn't have to be complicated. Follow these rules and you'll be sure to nail it.
---

Creating a color scheme for your new brand can be a daunting process if you're going the DIY route. Color theory? Color psychology? Brand recognition? There's a lot to think about for such a straight forward task. Traditionally this was left up to a branding agency that would provide you with the final color palette and some documentation on its reasoning and how you should use it. But that's expensive, and I guarantee you if you're a new business, it's not necessary and can be simplified a whole lot.

<img
  src="https://img.ghunt.io/practical-color-schemes.jpg"
  alt="Practical Color Schemes"
  width={1200}
  height={800}
/>

## Branding and Color Schemes

In most big branding guides, you'll get a handful of colors that create your brand, but only if you use them consistently. If your brand consists of 5 distinct colors, it can drastically change itself depending on how you use those colors. Which one will get the most use? In what context to use a specific color? These are important questions to know the answers. This is the mistake I see a lot of DIY branders making when trying to create a branded design for their website. They grab a color palette and almost randomly start using the colors.

Luckily, websites are actually a pretty consistent medium and how you use those colors can be broken down to a very straight forward process.

## Traditional Color Schemes and Tools

You might've started by Googling color scheme tools. Tools like [Adobe's Kuler](https://color.adobe.com/) or [Coolers](https://coolors.co/) can help inspire and provide you with ready made color palettes for your website. But that's the easy part. What do you do from there? And how do you apply it to a website?

## The difference with web

I've tried these tools myself, and they've been great for inspiration, but in practice they've never panned out. That's because most websites will not comply to an almost random mix of 5 colors, even though they look awesome. It's just not a functional application of a color palette.

Over the years, I realized I had slowly ditched those tools and broken down the process to some very simple rules that are easy to apply and consistently produce great practical results. Here's my web method approach to colors.

## The Web Method

### Step 1: Choose a Primary Color

This is your foundation. A good brand is easy to process and remember. What's easier than one consistently used solid color? The repetition hammers it home and it doesn't get muddled by other competing colors. The other colors I'll mention are only supportive to this main color. They should never compete for attention with it.

Other color theory principles apply here, but don't overthink it. Identify your target market (what color do they resonate with?); choose a memorable but unique color; use it! Here's a nice sea foam:

<div className="flex h-[250px] w-full items-center justify-center bg-[#21c0a8] text-[#1d1c21]">
  Primary
</div>

### Step 2: Choose a Dark Color

A good functional color palette needs good contrast. The web is also inherently a text medium so you're going to want to be able to read things easily. This means choosing a good dark color for text and for contrast. Pure colors like black aren't a great choice unless it's very intentional. An easy solution is to take a darker tone of your primary color and perhaps adjust the hue a bit. Here's what I came up with by moving the hue a bit more towards blue than green:

<div className="flex h-[250px] w-full items-center justify-center bg-[#1d1c21] text-[#21c0a8]">
  Dark
</div>

Notice how we only have two colors so far but they both work exceedingly well in terms of text and background contrast. But two very saturated colors can be overwhelming and restricts our possibilities a bit. We need step 3.

### Step 3: Choose a Light Color

Surprise, surprise, you guessed right. The same thing applies here in reverse. Note, you still want to be able to contrast all combinations that you've chosen so far. Like so:

<div className="flex">
  <div className="flex h-[250px] w-full items-center justify-center bg-[#21c0a8] text-[#1d1c21]">
    Primary
  </div>
  <div className="flex h-[250px] w-full items-center justify-center bg-[#1d1c21] text-[#21c0a8]">
    Dark
  </div>
  <div className="flex h-[250px] w-full items-center justify-center bg-[#e4ebed] text-[#21c0a8]">
    Light
  </div>
</div>

### Step 4: Make your utility belt.

At this point you pretty much have your finished color scheme. Yes it was that easy, and we only have 3 colors in total. However, if you're building anything more than a few static pages, you'll need some variance to communicate information in different states. Or maybe even to just break up the monotony of 3 repetitive colors. Yes, the repetition is good, but when it's all you have to use, it can become a bit much.

The trick here is to not design around your utility belt. Your main color scheme is pretty strict, but your utility belt can be pretty loose in order to simply meet your demands as you build something more complex. Need a message alert color? Take your primary color and change the hue towards red but stay in the same tone. Need some muted text to downplay its importance? Drop the opacity on your dark color.

A good guide here is to build your belt as you go and record it so you can stay consistent, but you won't need it from the start. Here's what a good belt might look like along side our main scheme:

#### Main Scheme

<div className="flex">
  <div className="flex h-[250px] w-full items-center justify-center bg-[#21c0a8] text-[#1d1c21]">
    Primary
  </div>
  <div className="flex h-[250px] w-full items-center justify-center bg-[#1d1c21] text-[#21c0a8]">
    Dark
  </div>
  <div className="flex h-[250px] w-full items-center justify-center bg-[#e4ebed] text-[#21c0a8]">
    Light
  </div>
</div>

#### Utility Belt

<div className="flex">
  <div className="flex h-[50px] w-full items-center justify-center bg-[#ca3f3f] text-[#e39797]">
    Alert
  </div>
  <div className="flex h-[50px] w-full items-center justify-center bg-[#20b7c9] text-[#383544]">
    Info
  </div>
  <div className="flex h-[50px] w-full items-center justify-center bg-[#e4ebed] text-[#7d798c]">
    Muted Text
  </div>
  <div className="flex h-[50px] w-full items-center justify-center bg-[#343338] text-[#7d798c]">
    Dark Highlight
  </div>
</div>

If you're curious, here's the color scheme in practice on a new open-source WordPress theme we'll be releasing shortly:

[![Open Source WordPress Theme](https://img.ghunt.io/open-source-wp-theme.jpg)](https://img.ghunt.io/open-source-wp-theme.jpg)

Notice how the primary color may not be the most used, but it's heavily used as the _accent_ color, the color which is used to draw your attention especially for actionable items. It's not used the most in terms of quantity, but it's the most important color on the page. I often use this strategy where the light/dark colors form the base and the primary color is used as the accent and highlighter.

It's simple, it's flexible, it works. Give it a try!
